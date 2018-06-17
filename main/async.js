//tu testujemy pending os tasks pendingOsTasks
const https = require('https');

const start = Date.now();

function doRequest(){
    https.request('https://www.google.com',res=>{
        res.on('data',()=>{});
        res.on('end',()=>{
            console.log(Date.now()-start);
        });
    }).end();
}
// tu mozemy w pendingOsTask wykonac o wiele wiec zadan tu jest 7 naraz
// tu jest inaczej poniewaz libuv deleguje zadania requesta do systemu operacyjnego
//
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
