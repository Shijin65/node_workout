const requestBodyParser = require("../util/body-parser");
const crypto = require ("crypto");
const writeToFile = require ("../util/write-to-file");


module.exports =async (req,res) => {
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyParser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);

            // console.log(body)
            res.writeHead(201,{"content-type":"applocation/json"})
            res.end();
        } catch (error) {
            console.log(error)
            res.writeHead(400,{"content-type":"applocation/json"})
            res.end(JSON.stringify({title:"NOT FOUND",message:"Request body not found"}));
        }
    }else {
        res.statusCode=404;
        res.setHeader("content-type","applocation/json");
        res.write(JSON.stringify({title:"NOT FOUND",message:"ROUTE NOT FOUND"}))
        res.end();

    }
}