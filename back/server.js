import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv' 

const app = express()

const port = process.env.PORT

app.listen(port , ()=>{
    console.log(`app is listening to ${port}` );
    
})