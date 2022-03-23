import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import './cart.css'

import Button from '@mui/material/Button';


const ListItems = (props) => {

    const [count, updateCount] = useState(1)
    // this will increase and decrease the count
    const decrease = () => {
        if (count > 1) {
            updateCount(count - 1)
        } else {
            alert("can't be less then 1")
        }
        props.uVisivility('hidden')
    }
    const increase = () => {
        if (count < 5) {
            updateCount(count + 1)
        } else {
            alert("can't be more then 5")
        }
        props.uVisivility('hidden')
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
                            <DeleteIcon onClick={() => { props.remove(props.val.id); props.uVisivility('hidden'); }} />
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
                        <ListItems val={val} key={val.id} remove={remove} uVisivility={props.uVisivility}/>
                    )
                })
            }
        </div>
    )
}

const GetPrice = (props) => {
    const [totalItemCost, updateTIC] = useState(0)
    // const [visibility, uVisivility] = useState('hidden')       
    let tdc = 50
    const calculate = () => {   
        let ips = document.querySelectorAll('.ip')      
        let tic = 0
        for (let i = 0; i < ips.length; i++) {
            tic += parseInt((ips[i].innerText.slice(1)))
        }
        updateTIC(tic)
        props.uVisivility('pricing')
    }
    
    return (
        <div className='cartCheckoutCon'>
            <Button id='ctBtn' onClick={calculate}>Calculate Total</Button>
            <div className={props.visibility}>
                <hr />
                <p><span>Item Charge</span><span>₹{totalItemCost}</span></p>
                <p><span>Delivery Charge</span><span>₹{tdc}</span></p>
                <h3><span>Total</span><span>₹{totalItemCost + tdc}</span></h3>
                <hr />
                <Button id='orBtn' onClick={() => { alert('FAKE message : Order is placed') }}>Order</Button>
            </div>
        </div>
    )
}
const Cart = (props) => {
    const [visibility, uVisivility] = useState('hidden')
    // useEffect(()=>{
    //     uVisivility('hidden')
    // }, [GetItems])
    if (props.cartItems.length === 0) {
        return (
            <section className="cartPageCon">
                <h1 className='cartCon' style={{ textAlign: 'center' }}>
                    Cart is empty
                </h1>
            </section>
        )
    } else {
        return (
            <section className="cartPageCon">
                <div className='cartCon'>
                    <GetItems cartItems={props.cartItems} uVisivility={uVisivility}/>
                    <GetPrice visibility={visibility} uVisivility={uVisivility}/>
                    {/* <GetPrice /> */}
                </div>
            </section>
        )
    }
}
export default Cart;