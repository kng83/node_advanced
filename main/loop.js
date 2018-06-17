

// node myFile.js

const pendingTimers = [];
const pendingOSTask =[];
const pendingOperations = []; // to sa watki z treads pool


// New timers ,tasks ,operations are recorded from myFile running
myFile.runContents();

//tu sprawdza node czy ma kontynuowac event loop 3 warunki
// jezeli ma kontynuowac robi nastepnego ticka
function shouldContinued(){
    // Check one : Any pending setTimeout,setInterval,setImmediate?
    // Check two : Any pending Os tasks? (Like server listening port)
    // Check tree: Any pending long running operations? (Like fs module)

    return pendingTimers.length || pendingOSTask.length ||
        pendingOperations.length
}


//Entire body executes in one 'tick'
//to emituje nam event loop

while (shouldContinued()){
    // 1)Node looks at pendingTimers and sees if any function
    //are ready to be called.Chodzi o setTimeout i setInterval

    // 2) Node looks at pendingOsTasks and pendingOperations
    // and calls relevant callback (relevant -istotne)
    // tu sa nasze watki z thread pool

    // 3) Pause execution , Continue when..
    // w tym momencie node czaka az cos sie wykona np http request
    // - a new pendingOsTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pending Timers. Call any setImmediate (nie setTimeout)

    // 5) Handle any 'close' events np readStream.on('close',()=>{})

}

//exit back to terminal