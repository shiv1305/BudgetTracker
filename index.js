const express = require('express')
const cors = require('cors')
require('dotenv').config()






const server=()=>{
    const PORT = process.env.PORT;
    console.log("server is running on ", PORT);
}
server()
