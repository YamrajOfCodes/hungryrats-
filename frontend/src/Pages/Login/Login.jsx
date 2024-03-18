import React, { useState } from 'react'
import  menu from "../../assets/menu.png"
import "./Login.scss"
import logo from "../../assets/logo.png"
import { toast } from 'react-toastify';

function Login() {

  const [formdata,setformdata]=useState({
    email:'',
    password:''
  });

  const login=async(e)=>{
   
    e.preventDefault();

    
    let logindata;
    
     await fetch('/login',{
      method:'POST',
      headers:{
        Accept:'application-logindata',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata)
     })
     .then((resp)=>resp.json())
     .then((data)=> logindata=data)

     
     if(logindata.success=='true'){
       localStorage.setItem('login-auth',logindata.token);
       toast.success('Login successfully')
       console.log('data',logindata.validuser.email);
       setTimeout(() => {
        if(logindata.validuser.email==='kkk@gmail.com'){
         window.location.replace('/addproduct')

        }else{

          window.location.replace('/food')
        }
        
      }, 2000);
     }
     else{
      toast.error(logindata.errors)
     }
    
    
     }

  const handler=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
  }


  return (
    <section className='wrapper'>
        <div className="container login-container">
            <div className="col-sm-8 offsetset-sm-2 col-lg-6 offset-lg-3 col-xl-4 text-center">
                <div className="logo">
                    <img src={logo} className='img-fluid' alt="" srcset="" />
                </div>
                      <form className='rounded bg-white shadow p-5'>
                        <h3 className='text-dark fw-bolder fs-4  mb-2'>Sign In to Hungryrats</h3>
                        <div class="form-floating mb-3 mt-5">
      <input type="email" name='email' value={formdata.email} onChange={handler} class="form-control" id="floatingInput" placeholder="name@example.com"/>
       <label for="floatingInput">Email address</label>
   </div>
    <div class="form-floating">
    <input type="password"  name='password' onChange={handler} value={formdata.password} class="form-control" id="floatingPassword" placeholder="Password"/>
    <label for="floatingPassword">Password</label>
    </div>
    <button type='submit' className='btn-primary w-100 my-4' onClick={login} >Login</button>

     </form>
            </div>
        </div>
    </section>
  )
}

export default Login