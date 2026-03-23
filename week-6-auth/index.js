const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "FunnyBees456@"
const app = express();

app.use(express.json());

const Users = [];


app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    Users.push({
        username,
        password
    })

    res.json({
        message : "User has been signed up!"
    })
})

app.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    foundUser = Users.find((u)=>{
        return u.username == username && u.password == password
    })

    if(!foundUser){
        res.json({
            message : "Invalid Credentials"
        })
    }

    else{
        const token = jwt.sign({Username : foundUser.username}, JWT_SECRET, {expiresIn:'1m'})
        
        res.json({
            token : token
        })
    }
})

app.post('/decode', (req, res)=>{
    const token = req.body.token;
    decodedInfo = jwt.decode(token);
    res.json({
        decodedToken : decodedInfo
    })
})

app.listen(3000, ()=>{
    console.log('Server is listening on PORT 3000');
})