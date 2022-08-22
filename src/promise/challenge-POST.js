import fetch from "node-fetch";
const API = "http://api.escuelajs.co/api/v1";

//funcion que se va a encargar de utilizar fetch y y transformarloa el llamado del metodo post con las configuraciones minimas que podemos agregar   
function postData(urlApi , data){
 //con llaves para separar 
 const response = fetch(urlApi ,{
  method:'POST',
  mode: 'cors',
  credentials:'same-origin',
  headers:{
   'content-type': 'application/json'
  },
  //para tranformarlo a texto o string
  body: JSON.stringify(data)

 })
 return response;
}
const data = {
"title": "esteban estuvo aqui ",
 "price": 9999,
 "description": "A description",
 "categoryId": 1,
 "images": ["https://placeimg.com/640/480/any"]
}
//uso de la function 
postData(`${API}/products`,data)
 .then(response => response.json())
 .then(data => console.log(data))
 .catch((error) => console.log(error))
 .finally(()=>console.log('finaly'));