console.log('1: Start(sync)');

setTimeout(()=>{
    console.log('2: Inside time out(macrotask -runs LAST)');
},0);

Promise.resolve().then(()=>{
    console.log('3: Inside promise.then(microtask-run before setTimeout)');
});
const fs = require("fs");
 fs.readFile(__filename,()=>{
    console.log('4: Inside fs.readfile callback(I/O-runs with macrotasks)');
 });
 console.log('5:End(sync)');