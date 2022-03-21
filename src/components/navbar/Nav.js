import { useState } from 'react';
import { NavLink } from "react-router-dom"

// IMPORTING CSS AND COMPONENTS---------------------------------------------------
import './nav.css'
// IMPORTING IMAGE --------------------------------------
import logo from '../../assets/images/websiteImages/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';


// COMPONENT --------------------------------------------
const Nav = (props) => {

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
        <section className='navBack'>
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
                            <input type="text" placeholder='Search' id='searchInput' />
                            <button ><SearchIcon /></button>
                            {/* using event deligation in it  */}
                            <div className='searchSuggestion' id='searchSuggestion'></div>
                        </form>
                    </div>
                    <div className='sec2component' id='navLogCon'>
                        <button id='login'>Login</button>
                        <NavLink to='/foodkart3/cart' id='cart'><LocalMallIcon /></NavLink>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;