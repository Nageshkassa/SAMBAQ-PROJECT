const mongoose = require('mongoose');
const connect=async (app)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo connection successful..");
        await app.listen(process.env.PORT,()=>{
         
                console.log(`server is listening on port ${process.env.PORT}`);

        });
    }
    
    catch (error) {
        console.log("mongo connection failed..");
        console.log(error,);
        process.exit(1);
      }
}
module.exports=connect;