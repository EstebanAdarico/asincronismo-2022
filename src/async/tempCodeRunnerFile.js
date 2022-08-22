import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

//ir por los datos y luego esperar por ellos transformados para retornar a nuestros usuarios 
async function fetchData(urlApi){
 const response = await fetch(urlApi);
 const data = await response.json();
 return data;
}
const anotherFunction =async (urlApi)=>{
 try{
  //el primer llamado a todos los productos 
  const products = await fetchData(`${urlApi}/products`);
  //creando la estructura necesaria para que muestre el primer elemento y su id
  const product = await fetchData(`${urlApi}/products/${products[0].id}`);
  //obteniendo el id de la categoria de este producto
  const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
  
  console.log(products)
  console.log(product.title);
  console.log(category.name);
 }catch(error){
  console.error(error);


 }
}
anotherFunction(API);
//mostrara primero una lista de todos los elementos 