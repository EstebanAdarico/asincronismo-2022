//funcion suma la cual recibe dos valores 
function sum(num1 , num2 ){
 return num1 + num2
}
function calc(num1,num2,callback){
 return callback(num1 , num2);
}
//pasando la funcion para que sea estandar de la segunda funcion 
//con su tercer parametro
console.log(calc(2,2,sum))

//setTimeout
//ejecutar codigo en un tiempo determinado , el que 
setTimeout(function(){
 console.log('hola mundo')
},2000)

//dandole un valor dentro de la funcion 
//no es necesario un return 
function saludar(name){
 console.log(`hola ${name}, cómo estás`)
}

//parámetros de funcion , tiempo , argumentos
setTimeout(saludar,2000,"esteban")