const divContenedorProductos = document.querySelector("#contenedor-productos");
const selectCantProductosMostrar = document.querySelector("#opc-cant");
const pInfoConfProd = document.querySelector("#info-opc-prod p");

const vectImg =  [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1i5GvdBmgjO2YbXu0MxfQPdFj6-qld-QVPw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZr2SY7PZeid9OGupfBGn5ggk1EfLYqxR7A&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_g7k_ZR4Cvjd9ieu-zUxluV2Y0ezsvk5WJg&usqp=CAU"
 
];

function reiniciarProdMostrar(){
   let cantProdMostrar = parseInt(selectCantProductosMostrar.value);
   htmlGenerarProductos(cantProdMostrar);
   mostrarInfoConfProd(cantProdMostrar);
} 