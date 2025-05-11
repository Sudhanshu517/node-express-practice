import fs from "fs/promises"
//here it is a module so we need not be in async function to use await

let a = await fs.readFile(`Sid.txt`)

let b = fs.appendFile(`Sid.txt`, "\n\n\n\n\n\this is amazing promise")

console.log(a.toString())