// const { createServer } = require('node:http');
// const fs = require("fs")


// import http from "http";

// import {a, d, b} from "./ecmascript_code.js"  // by using ecmascript
// console.log(a, d, b); 

// import Sid from "./ecmascript_code.js"  // by using ecmascript
// console.log(Sid);

//we're using require, __dirname, __filename, module, export in commonjs.
//From where they are coming:
//nodejs wraps our code in this function mentioned below:
//so you get all these: require, __dirname, __filename, module, export in commonjs.

// (function(exports, require, module, __dirname, __filename){
//     //Module code actually lives here.
// })

const a = require("./commonjs_code.js")   //by using commonjs
console.log(a, __dirname, __filename)