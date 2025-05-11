// const fs = require("fs");
const fs = require("fs/promises")

console.log("Starting");

fs.writeFile("Sid.txt", "Sid is best2",()=>{
    console.log(`done`)
    fs.readFile("Sid.txt", (error, data)=>{
            console.log(error, data.toString())
    })
})

fs.appendFile(`Sid.txt`, `roborobo`, (e, d)=>{
    console.log(e, d)
    console.log(`done`)
})

console.log(`ended`);

