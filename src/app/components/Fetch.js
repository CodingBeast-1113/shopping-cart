'use client'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Rating from '@mui/material/Rating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';


const Fetch = () => {
    const [data,setData]=useState([])
    const [filterdata,setFilterData]=useState([])

    console.log(data)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/`)
        .then(d=>d.json())
        .then(res=>setData(res))
        .catch(err=>console.log(err))
    },[])

    const handlefilter=(e)=>{
        const result=data.filter((products)=>products.category===e.target.value)
        setFilterData(result)
        console.log(filterdata)
    }

    const handlenav=()=>{
        document.querySelector('.main-nav').style.display="flex"
    }
    const handlesearch=(e)=>{
        const search=data.filter(items=>items.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilterData(search)
    }

  return (
    <>
    
    <div className='fetch-main'>
        <div>
            <button onClick={handlenav}><MenuIcon/></button>
        </div>
        <div className='searchbar'>
            <input type="text" placeholder='Search Products' onChange={handlesearch}/>
        </div>
      <div className='fetch-buttons'>
       
        <button onClick={handlefilter} value="men's clothing">Mens clothing</button>
        <button onClick={handlefilter} value="women's clothing">Womens clothing</button>
        <button onClick={handlefilter} value="electronics">Electronics</button>
        <button onClick={handlefilter} value="jewelery">Jewelery</button>
      </div>
      <div className='fetch-data'>
        {
            (filterdata.length) ? filterdata.map((e)=>(
                <div key={e.id} className='fetch-images'>
                  <img src={e.image} alt="" />
                  <h2>$ {e.price}</h2>  
                  <h4><Rating name="half-rating-read" defaultValue={e.rating.rate} precision={0.5} readOnly/></h4> 
                  <h3 className='title'>{e.title}</h3>
                  <div className='social'>
                        <h3><FavoriteBorderIcon/></h3>
                        <h3><CommentIcon/></h3>
                        <h3><ReplyIcon/></h3>
                    </div>
                </div>
            )) : data.map((e)=>(
                <div key={e.id} className='fetch-images'>
                    <img src={e.image} alt="" />
                    <h2>$ {e.price}</h2>
                    <h4><Rating name="half-rating-read" defaultValue={e.rating.rate} precision={0.5} readOnly /></h4> 
                    <h3 className='title'>{e.title}</h3> 
                    <div className='social'>
                        <h3><FavoriteBorderIcon/></h3>
                        <h3><CommentIcon/></h3>
                        <h3><ReplyIcon/></h3>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
      
    </>
  )
}

export default Fetch
