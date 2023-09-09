const writeToFile = require ("../util/write-to-file");
const requestBodyParser = require("../util/body-parser");

module.exports= async(req,res)=>{
    let baseUrl = req.url.substring(0 , req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3];

    if (baseUrl === "/api/movies/" && id) {
        
        // res.setHeader("content-type","application/json");
        try {
                    let body = await requestBodyParser(req)
                const index = req.movies.findIndex((movie) =>{
                    return movie.id === id;
                });
                if (index === -1) {
                    res.statusCode=404;
                    res.write(JSON.stringify({title:"MOVIE NOT FOUND",message:"Check wheather the movie ID is correct"}))
                    res.end();
                }else{
                    req.movies[index]={id,...body};
                    writeToFile(req.movies);
                    res.writeHead(200,{"content-type":"applocation/json"});
                    res.end(JSON.stringify(req.movie[index]));
                }


        } catch (error) {
            console.log(error);
            // res.writeHead(400,{"content-type":"applocation/json"});
            res.end(console.log('the movie not found'));
        }

        }else {
            res.statusCode=404;
            res.setHeader("content-type","applocation/json");
            res.write(JSON.stringify({title:"NOT FOUND",message:"ROUTE NOT FOUND"}))
            res.end();
    
        }
}