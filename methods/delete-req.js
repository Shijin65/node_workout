const writeToFile = require("../util/write-to-file");

module.exports=(req,res)=>{
    let baseUrl = req.url.substring(0 , req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];

    if (baseUrl === "/api/movies/" && id) {
        
        res.setHeader("content-type","application/json");
        let index = req.movies.findIndex((movie) =>{
            return movie.id === id;
        });
        if (index === -1) {
            res.statusCode=404;
            res.setHeader=("content-type","applocation/json");
            res.write(JSON.stringify({title:"MOVIE NOT FOUND",message:"Check wheather the movie ID is correct"}))
            res.end();
        }else{
            req.movies.splice(index , 1);
            writeToFile(req.movies);
            res.writeHead(204,{"content-type":"applocation/json"});
            res.end(console.log('the movie was deleted'));
        }

        }
    
    }