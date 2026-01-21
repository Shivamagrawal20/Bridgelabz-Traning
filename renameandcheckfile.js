let fs = require("fs");
function readFileStream(){
    let fileStream = fs.createReadStream("log.txt");
    fileStream.on("data",(chunk)=>{
        console.log(chunk.toString());

    })
    fileStream.on("end",()=>{
        console.log("file.end");
    })
}
function checkFile(){
    fs.access("log.txt",(err)=>{
        if(err) throw err
    })
    console.log("file exit");
}



function renameFile(){
    fs.access("log.txt",(err)=>{
        if(err) throw err
        fs.rename("log.txt","ab.txt",(err)=>{
            if(err) throw err
            console.log("file change ");
        })
    })
}
readFileStream();
checkFile();
renameFile();