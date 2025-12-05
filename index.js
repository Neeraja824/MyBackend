import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({name:"John"}));
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, This is backend project!!!!\n');
    }
});
server.listen(7007,()=>{
    console.log(`Server is listening on port ${7007}`);
})