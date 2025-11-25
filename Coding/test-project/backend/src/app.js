import express from 'express'

const app = express();

app.get('/home', (req, res)=>{
    res.send("This is home ")
})

export default app