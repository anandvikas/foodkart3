import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"

// IMPORTING CSS AND COMPONENTS---------------------------------------------------
import './nav.css'
import productInfo from '../../assets/data/food';
// IMPORTING IMAGE --------------------------------------
import logo from '../../assets/images/websiteImages/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

// this will print auto suggestion in dropdown of search ******************************************************
function showSuggestion(event) {
    document.getElementById('searchSuggestion').style.display = 'flex'
    let value = event.target.value
    let len = value.length
    let sugestion = ''
    if (value !== "") {
        let val = value[0].toUpperCase().concat(value.slice(1).toLowerCase())
        for (let i = 0; i < productInfo.length; i++) {
            if (val === productInfo[i].name.substring(0, len)) {
                sugestion += `<a>${productInfo[i].name}</a>`
            }
        }
        document.getElementById('searchSuggestion').innerHTML = sugestion
    } else {
        document.getElementById('searchSuggestion').innerHTML = sugestion
    }
}

function chooseSuggestion(event) {
    document.getElementById('searchInput').value = event.target.innerHTML
    document.getElementById('searchSuggestion').style.display = 'none'
}

function searchClicked(e, navigate, setItem){    
    e.preventDefault()
    let query = document.getElementById('searchInput').value
    // console.log(query)
    let names = productInfo.map((val)=>{return val.name})
    // console.log(names)
    if(!names.includes(query)){
        alert('this Item is not available')
        document.getElementById('searchInput').value = ''
        return;
    }
    productInfo.forEach((val)=>{
        if(val.name === query){           
            navigate(`/foodkart3/product/${((val.id).toString())}`)
            setItem(val.id)
            document.getElementById('searchInput').value = ''            
        } 
    })    
}
// ****************************************************************************************************************


// COMPONENT --------------------------------------------
const Nav = (props) => {
    const navigate = useNavigate()

    // this will toggle the visibility of responsive navbar 
    const [state, update] = useState('section2')
    function toggle() {
        if (state == 'section2') {
            update('section2 visible')
        }
        if (state == 'section2 visible') {
            update('section2')
        }
    }

    return (
        <section className='navBack' onClick={()=>{document.documentElement.scrollTop = 0;}}>
            <nav className="navCon" >
                <div className="section1">
                    <NavLink to='/foodkart3/' className='navLogoCon'>
                        <img src={logo} alt='Logo' />
                        <h1>Food Kart</h1>
                    </NavLink>
                    <div className='navResCon'>
                        <button id='responsiveBtn' onClick={toggle}><MenuIcon /></button>
                    </div>
                </div>

                <div className={state}>
                    <div className='sec2component' id='navLinkCon'>
                        <div className="links dropdown">
                            <NavLink to='/foodkart3/' className="linksProducts">Products</NavLink>
                            {/* <div className='linksProductsDrop'>
                                <NavLink to='/' onClick={()=>{props.updateListByNav('all')}}>all</NavLink>
                                <NavLink to='/' onClick={()=>{props.updateListByNav('meals')}}>meals</NavLink>
                                <NavLink to='/' onClick={()=>{props.updateListByNav('snacks')}}>snacks</NavLink>
                                <NavLink to='/' onClick={()=>{props.updateListByNav('drinks')}}>drinks</NavLink>
                            </div> */}
                        </div>
                        <NavLink to='/foodkart3/about' className="links">About</NavLink>
                        <NavLink to='/foodkart3/customer_support' className="links">Customer Support</NavLink>
                        <NavLink to='/foodkart3/contact' className="links">Contact</NavLink>
                    </div>
                    <div className='sec2component' id='navSearchCon'>
                        <form action="xyz.php" className='searchBar'>
                            <input type="text" placeholder='Search' id='searchInput' autoComplete='off' onChange={showSuggestion}/>
                            <button onClick={(e)=>{searchClicked(e, navigate, props.setItem)}}><SearchIcon /></button>
                            {/* using event deligation in it  */}
                            <div className='searchSuggestion' id='searchSuggestion' onClick={chooseSuggestion}></div>
                        </form>
                    </div>
                    <div className='sec2component' id='navLogCon'>
                        <button id='login' onClick={props.showLSform}>Login</button>
                        <NavLink to='/foodkart3/cart' id='cart'><LocalMallIcon /></NavLink>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;