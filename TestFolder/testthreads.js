// const arr = [1,12,'w',4,'l', 'm', 9, 'p', 2];

// function test(x){
//     console.log(x);    
//     return function test2(y){
//         console.log(y);        
//         return function test3(z){
//             console.log(x+y+z)
//         }
//     }
// }


// test(9)(4)(2)




// console.log(process.argv)


// const {readFile} = require('node:fs')

// readFile("../Coding/test.txt", "utf-8", (error, text)=>{
//     if(error) throw error;
//     else
//         console.log("File contains:", text)
// })



const {createServer} = require('node:http')

let server = createServer((req, res)=>{
    res.writeHead(406,{"content-type":"text/html"})
    res.write(`
      <p>You asked for <code>${req.url}</code></p>`)
    res.end();
})

server.listen(3030);
console.log('Server is listening at port 3030')