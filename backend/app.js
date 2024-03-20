
const express=require('express');
const app=express();

const PORT=4000;

const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const multer=require('multer');
const cors=require('cors');
const path=require('path');
const dbconnect = require('./dbconnect');
const { request } = require('https');
let _dirname=path.dirname("");
const buildpath=path.join(_dirname,"../frontend/dist")
app.use(express.static(buildpath));
app.use(express.json());
app.use(cors());




// image storage

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage});


// show img
app.use("/images",express.static('./upload/images'));

// api to upload images
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})










//productSchema

const Product=mongoose.model('product',{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    messname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    avaialble:{
        type:Boolean,
        default:true
    },
    desc:{
        type:String,
        required:true
    }
})







// upload product into database

app.post('/addproduct',async(req,res)=>{

   let products= await Product.find({});
   let id;

   if(products.length>0){
     let lastproductarray=products.slice(-1);
     let lastproduct=lastproductarray[0];
     id=lastproduct.id+1;
   }
   else{
    id=1;
   }

    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        messname:req.body.messname,
        desc:req.body.desc
    })


     console.log(product);  

    await product.save();

    res.json({
        success:'true',
        name:req.body.name
    })
})

// remove product from database

app.post("/removeproduct",async(req,res)=>{


await Product.findOneAndDelete({id:req.body.id});

console.log("deleted product");
res.json({
    success:true
})


})

// craeting api to getting all the products  and display to frontend

app.get('/allproducts',async(req,res)=>{
    const products=await Product.find({});
    if(products.length>0){
        // console.log('data fetched');
        res.send(products);
    }
    else{
        console.log('error while fetching')
    }
})



const User=mongoose.model('users',{
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
    }
})


app.post('/signup',async(req,res)=>{
    
 const checkemail=await User.findOne({email:req.body.email});

 if(checkemail){
    res.json({
        success:'false',
        errors:'email id is already existing'
    })
 }else{

  let cart={};
  for (let index = 0; index < 5; index++) {
     cart[index]=0;
    
  }

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data={
         user:{
           id:user.id
        }
    }

    const token =jwt.sign(data,'e-commerce');
    res.json({
        success:'true',
        token
    })
 }

})

app.post('/login',async(req,res)=>{
    
    const { email, password } = req.body;

    if (!email) {
        // return res.status(400).send("All fields are required");
        return  res.json({
            success:'false',
            errors:'Email are required'
        })
    }
    if(!password){
       return res.json({
            success:'false',
            errors:'please enter a password'
        })
    }
    
    const validuser=await User.findOne({email:email});

    if(validuser){



        const validpassword = validuser.password===req.body.password;
        if(validpassword){

            const data={
                validuser:{
                    id:validuser.id
                }
            }

            const token=jwt.sign(data,'e-coomerse');
            res.json({
                success:'true',
                token,
                validuser
            })
        }
        else{
            res.json({
                success:'false',
                errors:'password is incorrect'
            })
        }

    }else{
               res.json({
                success:'false',
                errors:'please enter valid email'
               })
    }

})

const fetchuser = async (req,res,next) =>{
    const token=req.header('auth-token');
     if(!token){
         res.status(401).send({errors:'please authenticate'})
     }else{
         try {
             const data =jwt.verify(token,'e-coomerse');
            //  console.log('data',data.validuser);
             req.validuser=data.validuser;
             next()
         } catch (error) {
             res.status(401).send({errors:'valid toen is incorrect'})
         }
     }
    } 

app.post('/addtocart',fetchuser,async(req,res)=>{
    let userData= await User.findOne({_id:req.validuser.id})
    userData.cartData[req.body.itemId] +=1;
    await User.findOneAndUpdate({_id:req.validuser.id},{cartData:userData.cartData})
    res.send('added')
})

app.post('/removefromcart',fetchuser,async(req,res)=>{
    let userData= await User.findOne({_id:req.validuser.id})
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await User.findOneAndUpdate({_id:req.validuser.id},{cartData:userData.cartData})
    
})

app.post('/getcart',fetchuser,async(req,res)=>{
    let userData=await User.findOne({_id:req.validuser.id})
    res.json(userData.cartData)
})







dbconnect();

app.listen(PORT,()=>{
    console.log('server is listening');
})