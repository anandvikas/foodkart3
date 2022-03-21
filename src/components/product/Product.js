import productInfo from "../../assets/data/food";
import './product.css'
const Product = (props)=>{
    let item = productInfo.filter((val)=>{
        return val.id === props.id
    })
    // console.log(item)
    return (
        <div className='lpConBackground'>        
            <div className='lpCon'>
                <div className='lpImgCon'>
                    <img src={item[0].image} alt='image' />
                </div>
                <div className='lpTextCon'>
                    <h1>{item[0].name}</h1>
                    <h3>{item[0].description}</h3>
                    <h2 className='price'>₹ {item[0].price}</h2>
                    <p className='rating'><strong>Customer Rating : {item[0].rating}</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores soluta necessitatibus quasi, sunt sint, hic iusto earum officia facilis eius distinctio culpa tempora fugit. Iusto repudiandae illum beatae quae cumque rem earum facilis iste necessitatibus, magnam quasi accusantium sed ducimus.</p>
                    <button id='addToCart' onClick={()=>{props.addToCart(item[0]); alert('Product added to cart')}}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;