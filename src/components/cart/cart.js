import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import './cart.css'

let totalItemPrice;


const ListItems = (props) => {

    const [count, updateCount] = useState(1)
    // this will increase and decrease the count
    const decrease = () => {
        if (count > 1) {
            updateCount(count - 1)
        } else {
            alert("can't be less then 1")
        }
    }
    const increase = () => {
        if (count < 5) {
            updateCount(count + 1)
        } else {
            alert("can't be more then 5")
        }
    }
    // ========================================


    return (
        <div className='cartItemList'>
            <div className="imgPart">
                <img src={props.val.image} alt={props.val.name} />
            </div>
            <div className="infoPart">
                <h3>{props.val.name}</h3>
                <p>Rating : {props.val.rating}</p>
                <p>₹{props.val.price}</p>
                <div className='apr'>
                    <div className='pmBtn'><button onClick={decrease}>-</button><span>{count}</span><button onClick={increase}>+</button></div>
                    <h3 className='ip'>₹{count * props.val.price}</h3>
                    <div className='rBtn'>
                        <Tooltip title="Remove" placement="top">
                            <DeleteIcon onClick={() => { props.remove(props.val.id) }} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
const GetItems = (props) => {
    let items = props.cartItems
    const [itemlist, updatelist] = useState(items)

    // this will remove items
    const remove = (id) => {
        updatelist((prev) => {
            let updated = prev.filter((val) => {
                return val.id !== id
            })
            return updated
        })
    }
    // =======================

    return (
        <div className="cartItemsCon">
            {
                itemlist.map((val) => {
                    return (
                        <ListItems val={val} key={val.id} remove={remove} />
                    )
                })
            }
        </div>
    )
}

const GetPrice = () => {
    useEffect(() => {
        let ips = document.querySelectorAll('.ip')
        console.log(ips.length)
    })
    
    // let costs = ips.map((val)=>{
    //     return val.innerText
    // })
    // console.log(costs)
    return (
        <div className='cartCheckoutCon'>vikas</div>
    )
}
const Cart = (props) => {

    return (
        <section className="cartPageCon">
            <div className='cartCon'>
                <GetItems cartItems={props.cartItems} />
                <GetPrice />
            </div>
        </section>
    )
}
export default Cart;