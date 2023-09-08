const http = require("http");
const { stringify } = require("querystring");
const getReq = require("./methods/get-req");
const postReq = require("./methods/post-req");
const putReq = require("./methods/put-req");
const deleteReq = require("./methods/delete-req");
const { write } = require("fs");
let movies = require("./data/MovieData.json");


const PORT = 5000;


const server = http.createServer((req,res) => {
    req.movie = movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
            case "POST":
            postReq(req,res);
            break;
            case "PUT":
            putReq(req,res);
            break;
            case "DELETE":
            deleteReq(req,res);
            break;

            default:

            res.writeHeader(404,{"content-type":"applocation/json"});
          
            res.end(JSON.stringify({title:"NOT FOUND",message:"ROUTE NOT FOUND"}));
    }
    
});
server.listen(PORT ,()=>{
    console.log(`the server is started in port:${PORT}`)
})