import { useState } from "react";

import Banner from "./banner/banner";
import SortFilter from "./sortfilter/sortfilter";
import ItemList from "./itemlist/itemlist";
import NewItems from "./newitems/newitems";

const Home = (props) => {
    const [state1, update1] = useState(<ItemList
        setItem={props.setItem}
        filterData={{catg:'all', sort:'Sort By Rating'}}
    />)
    // psssing filterData to ItemList component 
    const updateListByFilter = (filterData)=>{
        update1(<ItemList setItem={props.setItem} filterData={filterData}/>)        
        console.log('chikara')
    }
    return (
        <>
            <section className='homeSection'>
                <Banner />
                <SortFilter 
                    updateListByFilter={updateListByFilter}
                />
                {state1}
                <NewItems/>
            </section>
        </>
    )
}
export default Home;