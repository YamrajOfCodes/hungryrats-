import React from 'react'
import "./Contact.scss"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from "../../assets/contact.png"
import { toast } from 'react-toastify';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a41d4e3e-0741-46f1-8b9b-c45c46f7458b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success('your response has been recorded')
    }else{
      toast.error('there might be any problem pls try again later')
    }
  };


  return (
    <div className='contact'>
        <div className="container-fluid">
           <div className="row">
           <div className="col-12 col-sm-3">
            <img src={contactImage} alt="contact image"  />
           </div>
            <div className=" col-12 col-9 right ">
            <form  onSubmit={onSubmit} className='rounded bg-white shadow p-5'>
                        <h3 className='text-dark fw-bolder fs-4 text-center mb-2'>Contact us</h3>
                        <div class="form-floating mb-3 mt-5">
                       
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='from_name'/>
       <label for="floatingInput" className='email'>Email address</label>
   </div>
    <div class="form-floating">
    <input type="input" class="form-control" id="floatingPassword" placeholder="Password" name='from_email'/>
    <label for="floatingPassword">name</label>
    </div>
    <div class="form-floating">
  <textarea class="form-control mt-4"  placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'150px'}}></textarea>
  <label for="floatingTextarea2">Comments</label>
 
</div>
<button type='submit' className='btn-primary w-100 my-4 h-4'  value="Send">Send message</button>
     </form>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Contact

