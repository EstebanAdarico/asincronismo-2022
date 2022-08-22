const promise = new Promise(function(resolve, reject){
 //loque requiera el codigo
 resolve('hey!')
})
const cows = 9;
const countCows = new Promise(function(resolve,reject){
 //la logica dentro 
 if(cows > 10){
  resolve(`we have ${cows} cows on the farm`);
 }else{
  reject('there is no cows on the farm');

 }
})
countCows.
then((resolve) =>{console.log(resolve);
}).catch(reject =>{console.log(reject);
}).finally(() =>console.log('finally'))
