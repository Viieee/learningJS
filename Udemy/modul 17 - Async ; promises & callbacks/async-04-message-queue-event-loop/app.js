const button = document.querySelector('button');
const output = document.querySelector('p');

function getPos(opts){
  const posPromise = new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(success=>{
      resolve(success); 
    },
    error=>{
      reject(error);
    }, opts);
    // argument inside resolve/reject function will be passed into the then/catch method 
  });
  return posPromise;
}


function setTimer(duration){
  // function inside the Promise class argument will be executed right away when the promise object is created 
  const promise = new Promise((resolve, reject)=>{ // resolve and reject is a function
    setTimeout(()=>{
      resolve('Done!'); // executed by browser
    },duration);
  });
  return promise;
}

function trackUserHandler() {
  // without promise
  // navigator.geolocation.getCurrentPosition(
  //   posData => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 2000);
  //     setTimer(2000).then(data=>{
  //       console.log(data, posData); // data is the text passed on to our promised above
  //     })
  //   },
  //   error => {
  //     console.log(error);
  //   }
  // );
  // with promise
  let positionData;
  getPos()
  .then(posData => {
    // this code will run if getPos() method is resolved
    positionData = posData;
    // posData passed into this method from the resolved function in the promise function
    // we use position data (a varaible inside this trackuserHandler function) to pass around data into 
    // chained 'then' method
    return setTimer(2000);
    // if we do this (returning a promise)
    // the setTimer promise function will execute once the code in this 'then' method is done
    // if we passing something other than a promise (e.g string)
    // the data in the then chained after this will reflect the string we returned
  }//, error =>{
    //console.log(error);}
    // is the same as using .catch()
  ).then(data=>{
    // this will be executed once the setTimer function is done
    // this behaviour is caused by us returning a promise in previous then method
    console.log(data, positionData);
  }).catch(error=>{
    console.log(error);
    // this catch method will run if any promise prior to this catch is rejected
    // in this case if i block location permission on browser,
    // the then method after getPos() and before this catch method won't run and skipped to this catch method
    
    // return setTimer(1000);
    // if you returning something here
    // the then after this catch method will be executed based on the returned object
  });

  // setTimeout(() => {
  //   console.log('Timer done!');
  // }, 0);
  setTimer(1000).then(()=>{
    console.log('Timer Done!')
  })
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
