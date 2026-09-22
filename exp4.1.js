const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end( 'Home page'); 
    }
    else if(req.url === '/about'){
        res.end('About page');
    }
    else if(req.url === '/student'){
        res.end('Student page');
    }

});
server.listen(4000, () => {
    console.log('Server is running on port 4000'); 
});

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.getMethod() === 'GET' && req.getUrl() === '/'){
//         res.end('Home page');
//     }
// });