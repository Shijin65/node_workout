const http = require("http");
const { stringify } = require("querystring");
// require("dotenv").config();

const PORT = process.env.PORT || 5000;


const server = http.createServer((req,res) => {
    res.statusCode = 404;
    
    res.end();
});
server.listen(PORT ,()=>{
    console.log(`the server is started in port:${PORT}`)
})