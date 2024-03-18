const mongoose=require('mongoose');


module.exports=async()=>{

    
    const MobgoUrl=`mongodb+srv://kundan:oE1T95QXWawWmVLX@cluster0.k4tndq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        
        const connect=await mongoose.connect(MobgoUrl);
        console.log('database connection successfully');
        
        
    } catch (error) {
        console.log('database errors',error);
    }
}

