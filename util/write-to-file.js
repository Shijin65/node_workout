const fs =require ('fs');
const path = require ('path')


module.exports = (data) => {
    // console.log("the data to add to json file:",data)
    // console.log(__dirname,"..")
    try {
        fs.writeFileSync(path.join(__dirname,"..","data","MovieData.json"),JSON.stringify(data),"utf-8");
    } catch (error) {
        
    }
   
}