//***
// jak damy tu jeden kozde dziecko bedzie mialo tez po jednym
process.env.UV_THREADPOOL_SIZE =1;
const cluster = require('cluster');
// Is the file being executed in master mode?
// wyklad 26
if (cluster.isMaster) {
    //Cause index.js to be executed *again* but
    //in child mode;
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // Im a child , Im going to act like a server
    // and do nothing else

    const express = require('express');
    const app = express();
    const crypto = require('crypto');

// blokuje nam event loop przez okreslony czas
//     function doWork(duration) {
//         const start = Date.now();
//         while (Date.now() - start < duration) {
//         }
//     }

    app.get('/', (req, res) => {
       // doWork(5000);
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    });

    app.get('/fast', (req, res) => {
        res.send('this was fast');
    });


    app.listen(3000, () => console.log('listen on 3000'));
}