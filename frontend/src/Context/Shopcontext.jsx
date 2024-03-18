import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';


export const Shopcontext=createContext(null);



const getDefaultcart=()=>{
    let cart={};
    for (let index = 0; index <5; index++) {
        cart[index]=0
        
    }
    return cart;
}




const shopContextprovider=(props)=>{
    
    const [cartItems,setcartItems]=useState(getDefaultcart())
    // console.log(cartItems);

    const [all_product,setall_product]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((resp)=>resp.json()).then((data)=>setall_product(data))
        
        if(localStorage.getItem('login-auth')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('login-auth')}`,
                    'Content-Type':'application/json'
                },
                body:""
            }).then((resp)=>resp.json()).then((data)=>setcartItems(data))
        }
    },[])

    
    const addtocart=(itemid)=>{
        setcartItems((prev) => ({...prev,[itemid]:prev[itemid]+1}))
        if(localStorage.getItem('login-auth')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('login-auth')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'itemId':itemid})
            }).then((resp)=>resp.json()).then((data)=>console.log(data))

            setTimeout(() => {
                toast.success('Thank you for order')
            }, 2000);
        }
        
    }
    const removefromcart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        if(localStorage.getItem('login-auth')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('login-auth')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'itemId':itemid})
            }).then((resp)=>resp.json()).then((data)=>console.log(data))
        }
        
    }

    const gettotalCartitems=()=>{
        let totalitem=0;
        for (const item in cartItems){
           if(cartItems[item]>0){
            totalitem += cartItems[item]
           }
        }
        return totalitem;
    } 
    
    let context={gettotalCartitems,all_product,cartItems,addtocart,removefromcart}

return(
    <Shopcontext.Provider value={context} >
        { props.children }
    </Shopcontext.Provider>
)


}

export default shopContextprovider;