import { useState } from 'react';

import './sortfilter.css'
import Button from '@mui/material/Button';


const SortFilter = (props) => {
    // filterValue will store the filter data 
    const [filterValue, updateFilterValue] = useState({catg:'all', sort:'Sort By Rating'})    
    const changed = (event)=>{        
        let value = event.target.value
        let name = event.target.name        
        updateFilterValue((prev)=>{
            return {...prev, [name]:value}
        })
    }

    
    return (
        <>
            <div className='sfCon'>
                <div className='fCon'>
                    <label htmlFor='catg' className='flabel'>Select Catagory</label>
                    <select name='catg' onChange={changed} value={filterValue.catg}>
                        <option>all</option>
                        <option>meals</option>
                        <option>snacks</option>
                        <option>drinks</option>
                    </select>
                </div>
                <div className='sCon'>
                    <label htmlFor='sort' className='flabel'>Sort</label>
                    <select name='sort' onChange={changed} value={filterValue.sort}>
                        <option>Sort By Rating</option>
                        <option>Sort By Latest</option>
                        <option>Sort By Price Lowest</option>
                        <option>Sort By Price Highest</option>
                    </select>
                </div>
                <div className='bCon'>
                    {/* onclick will send the filter data to itemlist component */}
                    <Button variant="contained" style={{ backgroundColor: '#233a3e' }} onClick={()=>{props.updateListByFilter(filterValue)}}>Filter</Button>
                </div>
            </div>
        </>
    )
}
export default SortFilter;