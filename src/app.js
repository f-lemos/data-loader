const http = require('node:https')
const fs = require('node:fs');

console.log("requesting data from page");  

const writeFile = (content) => {
    fs.writeFile('./test.txt', content, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
    });
}

http.get('https://cookpad.com/uy/buscar/para%20cenas', (res, body)=>{
    
let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
        writeFile(data);
    });
    }).on('error', (err) => {
    console.error('Error:', err.message);
});