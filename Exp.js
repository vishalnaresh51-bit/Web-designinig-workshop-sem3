// const fs= require("fs");
// fs.writeFile("example.txt","Hello world!", err() =>
//     {
//     if(err) throw err;
//     console.log('File created!');

//     fs.readFile("example.txt","utf8",(err,data) =>{
//         console.log('File content:',data);
//     });
// });




// const fs= require('fs');
// fs.writeFile('example.txt','this is the updated.',(err)=>{
//     if (err) throw err;
//     console.log('File overwritten (updated)!');
// });


// const fs=require('fs');
// fs.appendFile('example.txt','\n this line was added',err()=>{
//     if (err) throw err;
//     console.log('File updated (appended)');
// });

const fs=require('fs');
fs.unlink('example.txt',(err)=>{
    if (err) throw err;
    console.log('File deleted');
}); 

