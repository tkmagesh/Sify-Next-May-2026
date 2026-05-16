(() => {
  // sync
  function addSync(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [@service] returning result`);
    return result;
  }

  function addSyncClient() {
    console.log(`[@client] triggering the service`);
    const result = addSync(100, 200);
    console.log(`[@client] result = ${result}`);
  }

  window["addSyncClient"] = addSyncClient;

  // Async
  function addAsyncCallback(x, y, callbackFn) {
    console.log(`   [@service] processing ${x} and ${y}`);
    setTimeout(() => {
        const result = x + y;
        console.log(`   [@service] returning result`);
        callbackFn(result);    
    }, 4000);
  }

  function addAsyncCallbackClient() {
    console.log(`[@client] triggering the service`);
    addAsyncCallback(100, 200, function(result){
        console.log(`[@client] result = ${result}`);
    });
  }

  window["addAsyncCallbackClient"] = addAsyncCallbackClient;

  function addAsyncPromise(x, y, callbackFn) {
    console.log(`   [@service] processing ${x} and ${y}`);

    let p = new Promise(function(resolveCb, rejectCb){
        setTimeout(() => {
          const result = x + y;
          console.log(`   [@service] returning result`);
          resolveCb(result);
        }, 4000);
    })
    return p;
  }


   function addSyncClient() {
     console.log(`[@client] triggering the service`);
     const result = addSync(100, 200);
     console.log(`[@client] result = ${result}`);
   }


  /* 
  function addAsyncPromiseClient(){
    console.log(`[@client] triggering the service`);
    let p = addAsyncPromise(100, 200);
    p.then(function (result) {
      console.log(`[@client] result = ${result}`);
    });
  } 
    */
   async function addAsyncPromiseClient() {
     console.log(`[@client] triggering the service`);
     let p = addAsyncPromise(100, 200);
     let result = await p
     console.log(`[@client] result = ${result}`);
   }


  window["addAsyncPromiseClient"] = addAsyncPromiseClient;

})()