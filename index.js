const http = require("http")

const server = http.createServer((req, res)=>{
    const data = JSON.stringify({
        "model": "meta-llama/Meta-Llama-3-70B-Instruct",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "How to cheer up a sad person"}
        ]
    });
    const url = new URL(`http://API_ENDPOINT/v1/chat/completions`);
    const options = {
        hostname: url.hostname,
        port: url.port || 80,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
    };
    const apiReq = http.request(options, (apiRes) => {
        let llamaRes = '';

        apiRes.on('data', (chunk) => {
            llamaRes += chunk;
        });

        apiRes.on('end', () => {
          console.log('Response from API:', llamaRes);
          res.end();
        });
    });

    apiReq.on('error', (e) => {
        console.error('Problem with request:', e.message);
        res.statusCode = 500;
        res.end();
    });

    apiReq.write(data);
    apiReq.end();
});


server.listen(4300, ()=>{
    console.log("Server running on port 4300");
});
