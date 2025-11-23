const express = require('express')
const app = express()

app.get('/home', (req, res)=>{
    res.send(`<html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to Homepage!</h1>
                <p>This is a simple HTML response.</p>
            </body>
        </html>`)
})

app.get('/office', (req, res)=>{
    res.json({
        message : 'This is office page'
    })
})

app.use((req,res)=>{
    res.status(404).json({
        message : "please check your url"
    })
})

app.listen(9000, '0.0.0.0', ()=>{
    console.log('Server is running on port 9000')
})