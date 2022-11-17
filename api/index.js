require('dotenv').config() 

const app = require('./app.js'); 
app.listen(process.env.API_PORT); 
console.log("API is now listening at http://localhost:" + process.env.API_PORT)