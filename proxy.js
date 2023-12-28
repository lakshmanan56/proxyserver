const express = require("express"); 
const morgan = require("morgan"); 
const { createProxyMiddleware } = require("http-proxy-middleware"); 
require("dotenv").config(); 
  
// Create Express Server 
const app = express(); 
    
// Configuration 
const PORT = 3000; 
const HOST = "localhost"; 
  
// Logging the requests 
app.use(morgan("dev")); 
  
// Proxy Logic :  Proxy endpoints 
app.use( 
    "/api/users/all", 
    createProxyMiddleware({ 
      //  target: 'https://jsonplaceholder.typicode.com/users' , 
        target: 'https://www.google.co.in/',
        changeOrigin: true, 
        pathRewrite: { 
            [`^/api/users/all`]: "", 
        }, 
    }) 
); 
  
// Starting our Proxy server 
app.listen(PORT, HOST, () => { 
    console.log(`Starting Proxy at ${HOST}:${PORT}`); 
});