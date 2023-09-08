module.exports=(req,res)=>{
   let baseUrl = req.url.substring(0 , req.url.lastIndexOf("/") + 1);
 
   let id = req.url.split("/")[3];
   console.log(id);
    if (req.url === "/api/movies") {
        
        res.statuscode = 200;
        res.setHeader("content-type","application/json");
        res.write(JSON.stringify(req.movies));
        res.end();

    } else if (baseUrl === "/api/movies/" && id) {
        
        res.setHeader("content-type","application/json");
        let filteredMovie = req.movies.filter((movie) =>{
            return movie.id == id;
        });
        if (filteredMovie.length > 0) {
             res.statuscode = 200;
             res.write(JSON.stringify(filteredMovie));
             res.end();
        }else{
            res.statusCode=404;
        res.setHeader=("content-type","applocation/json");
        res.write(JSON.stringify({title:"MOVIE NOT FOUND",message:"Check wheather the movie ID is correct"}))
        res.end();
        }
    }

    else {
        res.statusCode=404;
        res.setHeader("content-type","applocation/json");
        res.write(JSON.stringify({title:"NOT FOUND",message:"ROUTE NOT FOUND"}))
        res.end();

    }
}