import React, { useState } from 'react'
import uploadrea from "../../assets/upload_area.svg"
import "./Addproduct.scss"
import { Outlet } from 'react-router-dom';

function Addproduct() {

 const [image,setimage]=useState(false);
 const [productdetails,setproductdetails]=useState({
    name:'',
    image:'',
    price:'',
    messname:'',
    desc:''
 })

 const imagehandler=(e)=>{
  setimage(e.target.files[0])
 }

 const changehandler=(e)=>{
    setproductdetails({...productdetails,[e.target.name]:e.target.value})
 }

 const addproduct=async(e)=>{
    let responsedata;
    let product=productdetails

    let formdata=new FormData();
    formdata.append('product',image)


    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formdata,
    }).then((resp)=>resp.json()).then((data)=>responsedata=data);

    if(responsedata.success){
      product.image=responsedata.image_url;
      console.log(product);

      await fetch("/addproduct",{
        method:"POST",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        data.success ? alert('product added'): alert('product is not added')
    
    })

     }
 
 }

  return (
    <div className='addproduct'>
      <Outlet/>
        <div className="input-fields">
            <p>Product name</p>
            <input value={productdetails.name} onChange={changehandler} type="text" name='name' />
        </div>
        <div className="input-fields">
            <p>Price</p>
            <input value={productdetails.price}  onChange={changehandler} type="text" name='price' />
        </div>
        <div className="input-fields">
            <p>Mess name</p>
            <input value={productdetails.messname}  onChange={changehandler} type="text" name='messname' />
        </div>
        <div className="input-fields">
            <p>Description</p>
            <input value={productdetails.desc}  onChange={changehandler} type="text" name='desc' />
        </div>
        <div className="input-fields">
           <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image): uploadrea}  className='addproduct-thumbnail' alt="" srcset="" />
           </label>
           <input type="file" onChange={imagehandler}  name='image' id='file-input' hidden />
        </div>
        <button onClick={addproduct} className='addproductbtn'>Add product</button>
    </div>
  )
}

export default Addproduct