//tu mieszamy nasze 2 taski

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => {
        });
        res.on('end', () => {
            console.log('REQ:', Date.now() - start);
        });
    }).end();
}

function doHash() {
    const start = Date.now();
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);

    });
}

doRequest(); //do google

fs.readFile('./main/multitask.js', 'utf8', (some) => {
    console.log('FS:', Date.now() - start);
    console.log(some);
});

doHash();
doHash();
doHash();
doHash();

// doHash i readFile idzie do naszego watku threadpull ,
// doRequest kierowany jest do systemu operacyjnego i powinien byc
// teoretycznie pierwszy. W filmie dlougo zajmuje dostep do pliku poniewaz
// node robi 2 podejscia do pliku. Pierwsze patrzy na statystki pliku. Pozniej pauze
// i dopiero po tym robi cos z tym plikiem.