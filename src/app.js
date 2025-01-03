const http = require('node:https')

console.log("requesting data from page");
  

http.get('https://cookpad.com/uy/buscar/para%20cenas', (res, body)=>{
    
let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
    data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
    console.log(data);
    });
    }).on('error', (err) => {
    console.error('Error:', err.message);
});