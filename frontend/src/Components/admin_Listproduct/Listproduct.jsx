import React, { useEffect, useState } from 'react'
import crossIcon from "../../assets/cross_icon.png"
import "./Listproduct.scss"

function Listproduct() {

 const [allproducts,setallproducts]=useState([]);

 const fetchdata=async()=>{
  await fetch('/allproducts').then((resp)=>resp.json())
  .then((data)=>setallproducts(data))
  console.log(allproducts.products);
 }

 useEffect(()=>{
  fetchdata();
 },[])

 const removeproduct=async(id)=>{

   await fetch('http://localhost:4000/removeproduct',{
    method:'POST',
    headers:{
      Accpt:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({id:id})
   })
   await fetchdata()
 

 }


  return (
    <div className='listproduct'>
      <h2>All products</h2>
      <div className="elements">
        <p>Product</p>
        <p>name</p>
        <p>price</p>
        <p>remove</p>
      </div>
      <div className="product">
        {
          allproducts.map((element,index)=>{
            return <div key={index} className='elements'>
              <img src={element.image} className='img' style={{width:'200px'}} alt="product's image" srcset="" />
              <p>{element.name}</p>
              <p>{element.price}</p>
              <img src={crossIcon} onClick={()=>{removeproduct(element.id)}} alt="" srcset="" />
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Listproduct