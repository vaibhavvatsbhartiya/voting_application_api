const express = require('express');

const app = express();

require('dotenv').config();

PORT = 3000

app.get('/', (req, res)=>{
    const message = `The server is running on port: ${PORT} and this api is created by Vaibhav vats.`
    res.send(message)
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})