// IMPORTING CSS -------------------------------
import './newitems.css'

// IMPORTING DATA --------------------------------------
import productInfo from '../../../assets/data/food';

// for scrolling ------------------------------------------------
function scrollLeft(){
    document.getElementById('scrolldiv').scrollLeft -= 380;
}
function scrollRight(){
    document.getElementById('scrolldiv').scrollLeft += 380;
}
// THIS WILL SORT NEWEST 5 -------------------------------
function sortNew(){
    let ids = []
    for (let i = 0; i < productInfo.length; i++) {        
        ids.push(productInfo[i].id)
    }    
    let newSorted = ids.sort((a, b) => { return b - a })    
    let NewSorted = []    
    for (let i = 0; i < newSorted.length; i++) {
        for (let j = 0; j < productInfo.length; j++) {
            if (newSorted[i] == productInfo[j].id) {
                NewSorted.push(productInfo[j])                
            }
        }
    } 
    return NewSorted
}
function GetNew() {
    let n = 8
    let newN = sortNew().slice(0, n)
    return (
        newN.map((val) => {
            return (
                <div className="scrollitems" key={val.id}>
                    <img src={val.image} alt={val.name} />
                    <h2>{val.name}</h2>
                </div>
            );
        })
    );

}

// COMPONENT -------------------------------------
const NewItems = () => {    
    return (
        <div className="onpCon">
            <h2 className="onpText">Our New Products</h2>
            <div className="onpProducts">
                <button id="scrollleft" className="scrollBtn" onClick={scrollLeft}>&lt;</button>
                <div className="horscroll" id="scrolldiv">
                    <GetNew/>                    
                </div>
                <button id="scrollright" className="scrollBtn" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
}
export default NewItems;