// bierzemy nasza funkcje crypto i bedzie sprawdzac watki

// dodajmy process.env.UV_THREADPOOL_SIZE =2;
// dla windowsa SET UV_THREADPOOL_SIZE=2 && node threads.js
// ustwiajac 2 watki wszystko dziala wolniej
// w naszym poprzednim diagramie to pendingOperations to sa wlasnie treads
process.env.UV_THREADPOOL_SIZE =2;

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:',Date.now()-start);

});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:',Date.now()-start);

});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:',Date.now()-start);

});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:',Date.now()-start);

});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:',Date.now()-start);

});

// z tego wychodzi ze nie jest to jeden watek
// wyjaszniem tego jest libuv ktora jest w node i ona robi takzwany
// threads pool i tam sa 4 dodatkowe watki
// 1: 1078
// 2: 1082

/*Przy 5 iteracjach widzimy ze ostatni watkek jest wolniejszy wynika to
* z tych 4 pool
*
4: 1803
3: 1829
2: 1832
1: 1844
5: 2687
*/