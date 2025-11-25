import connectDB from './config/database.js'
import app from './app.js'
import dotenv from "dotenv"


dotenv.config({
    path: './.env'
})


const startServer = async()=>{
    
    try {
        // console.log(`MongoDB_URI::${process.env.MONGODB_URI}`);
        await connectDB()

        app.on('error', (error)=>{
        console.log(error) 
        throw error;           
        })

        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Listening on PORT ${process.env.PORT}`);
        
    })
        
    } catch (error) {
        console.log("ERROR", error);
        
    }
}

startServer()