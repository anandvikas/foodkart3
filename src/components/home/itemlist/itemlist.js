import { useNavigate } from 'react-router-dom'
import productInfo from "../../../assets/data/food"
import './itemlist.css'



// THIS BLOCK OF CODE IS SORTING THE DATA BY TOP RATING AND RETURNING ARRAY OF SORTED DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const rSort = () => {
    let ratings = []
    for (let i = 0; i < productInfo.length; i++) {
        ratings.push(productInfo[i].rating)
    }
    let sortedRatings = ratings.sort((a, b) => { return b - a })

    let topSortedDuplicate = []
    for (let i = 0; i < sortedRatings.length; i++) {
        for (let j = 0; j < productInfo.length; j++) {
            if (sortedRatings[i] === productInfo[j].rating) {
                topSortedDuplicate.push(productInfo[j])
            }
        }
    }
    let sortedItems = [...new Set(topSortedDuplicate)]
    // console.log(topSorted)
    return sortedItems
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// THIS BLOCK OF CODE IS SORTING THE DATA BY LATEST ID AND RETURNING ARRAY OF SORTED DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const lSort = () => {
    let id = []
    for (let i = 0; i < productInfo.length; i++) {
        id.push(productInfo[i].id)
    }
    let sortedID = id.sort((a, b) => { return b - a })

    let topSortedDuplicate = []
    for (let i = 0; i < sortedID.length; i++) {
        for (let j = 0; j < productInfo.length; j++) {
            if (sortedID[i] === productInfo[j].id) {
                topSortedDuplicate.push(productInfo[j])
            }
        }
    }
    let sortedItems = [...new Set(topSortedDuplicate)]
    // console.log(topSorted)
    return sortedItems
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// THIS BLOCK OF CODE IS SORTING THE DATA BY CHEAPEST AND RETURNING ARRAY OF SORTED DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const plSort = () => {
    let price = []
    for (let i = 0; i < productInfo.length; i++) {
        price.push(productInfo[i].price)
    }
    let sortedPrice = price.sort((a, b) => { return a - b })

    let topSortedDuplicate = []
    for (let i = 0; i < sortedPrice.length; i++) {
        for (let j = 0; j < productInfo.length; j++) {
            if (sortedPrice[i] === productInfo[j].price) {
                topSortedDuplicate.push(productInfo[j])
            }
        }
    }
    let sortedItems = [...new Set(topSortedDuplicate)]
    // console.log(topSorted)
    return sortedItems
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// THIS BLOCK OF CODE IS SORTING THE DATA BY EXPENSIVE AND RETURNING ARRAY OF SORTED DATA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const phSort = () => {
    let price = []
    for (let i = 0; i < productInfo.length; i++) {
        price.push(productInfo[i].price)
    }
    let sortedPrice = price.sort((a, b) => { return b - a })

    let topSortedDuplicate = []
    for (let i = 0; i < sortedPrice.length; i++) {
        for (let j = 0; j < productInfo.length; j++) {
            if (sortedPrice[i] === productInfo[j].price) {
                topSortedDuplicate.push(productInfo[j])
            }
        }
    }
    let sortedItems = [...new Set(topSortedDuplicate)]
    // console.log(topSorted)
    return sortedItems
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// THIS WILL CALL REQUIRED SORTING FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const getSorted = (request) => {
    let sortedItems
    if (request === 'Sort By Rating') {
        // console.log('sort by rating')
        sortedItems = rSort()
    } else if (request === 'Sort By Latest') {
        // console.log('Sort By Latest')
        sortedItems = lSort()
    } else if (request === 'Sort By Price Lowest') {
        // console.log('Sort By Price Lowest')
        sortedItems = plSort()
    } else if (request === 'Sort By Price Highest') {
        // console.log('Sort By Price Highest')
        sortedItems = phSort()
    }
    return sortedItems
}

// THIS WILL FILTER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const getFiltered = (request, sortedItems) => {      
    let filteredItems
    if (request === 'all') {
        filteredItems = sortedItems
    } else {
        filteredItems = sortedItems.filter((val) => {            
            return (val.catagory+'s' === request)
        })
    }
    
    return filteredItems
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const ListContent = (props) => {    
    let sortedItems = getSorted(props.filterData.sort)
    let filteredItems = getFiltered(props.filterData.catg, sortedItems)
    // console.log(sortedItems)
    // console.log(filteredItems)

    return (
        filteredItems.map((val) => {
            return (
                <div className="cCardSpace" key={val.id}>
                    <div className="cCard">
                        <img src={val.image} alt={val.name} className={val.id} />
                        <h3 className={val.id}>{val.name}</h3>
                    </div>
                </div>
            )
        })
        // <h1>my name is vikas</h1>
    )
}
const ItemList = (props) => {
    const navigate = useNavigate()

    return (
        <>
            <h2 className="cText" id="cText">Products</h2>
            <div className="cCon" onClick={(event) => {
                if (event.target.parentElement.className === 'cCard') {
                    navigate(`/product/${event.target.className}`)
                    props.setItem(parseInt(event.target.className))
                }
            }}>
                <ListContent
                    filterData={props.filterData}
                />
            </div>
        </>
    )
}
export default ItemList;