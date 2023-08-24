const http = require("http");
const { stringify } = require("querystring");
// require("dotenv").config();

const PORT = process.env.PORT || 5001;


const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "application/json");
    res.write(JSON.stringify({name : "SHIJIN", age:20,skills:["html","css","javascript","node"]}));
    res.end();
});
server.listen(PORT ,()=>{
    console.log(`the server is started in port:${PORT}`)
})