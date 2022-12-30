const starWarsProducts = [
    {name: 'Darth Vader muñeco', src:'img/starWars/DarthVader.jpg', precio: '$100,00'},
    {name: 'Obi Wan Kenobi muñeco', src:'img/starWars/OBIWAN-KENOBI.jpg', precio: '$100,00'},
    {name: 'Yoda bebé muñeco', src:'img/starWars/yoda-bb.jpg', precio: '$100,00'},
    {name: 'R2 D2 Arturito Robot', src:'img/starWars/R2D2.jpg', precio: '$200,00'},
    {name: 'Taza Darth Vader coleccionable', src:'img/starWars/taza-drath-vader.png', precio: '$50,00'},
    {name: 'Tostadora Darth Vader', src:'img/starWars/tostadora-darth-vader.png', precio: '$250,00'}
];

const consolasProducts = [
    {name: 'PlayStation 2', src:'img/consolas/PLAY2.jpg',precio:'$100,00'},
    {name: 'Joystick', src:'img/consolas/Jostik.jpg',precio:'$20,00'},
    {name: 'PlayStation 5', src:'img/consolas/play5.jpg',precio:'$750,00'},
    {name: 'PlayStation 5', src:'img/consolas/PLAY52.jpg',precio:'$700,00'},
    {name: 'Microsoft Xbox 500 GB', src:'img/consolas/XBOX.jpg',precio:'$600,00'},
    {name: 'Microsoft Xbox X 1TB Consola-Negro Series-', src:'img/consolas/XBOXONE.jpg',precio:'$850,00'},
]
const diversosProducts = [
    {name: 'Camisa Faker', src:'img/diversos/camisa-faker.png',precio:'$50,00'},
    {name: 'Joystick X-Box', src:'img/diversos/joystick-x-box.jpg',precio:'$50,00'},
    {name: 'Pikachu', src:'img/diversos/pikachu.jpg',precio:'$150,00'},
    {name: 'Radio Con Reloj Retro', src:'img/diversos/radio.jpg',precio:'$25,00'},
    {name: 'Sonic', src:'img/diversos/sonic.jpg',precio:'$200,00'},
    {name: 'Visor de Realidad Virtual', src:'img/diversos/visor-realidad-v.jpg',precio:'$300,00'}
]
//Productos Star Wars 1

let SW1 = document.getElementById('sw-1');
let SW1p = document.getElementById('sw-1-p');

//Productos Star Wars 2
let SW2 = document.getElementById('sw-2');
let SW2p = document.getElementById('sw-2-p');

//Productos Star Wars 3
let SW3 = document.getElementById('sw-3');
let SW3p = document.getElementById('sw-3-p');

//Productos Star Wars 4
let SW4 = document.getElementById('sw-4');
let SW4p = document.getElementById('sw-4-p');

//Productos Star Wars 5
let SW5 = document.getElementById('sw-5');
let SW5p = document.getElementById('sw-5-p');

//Productos Star Wars 6
let SW6 = document.getElementById('sw-6');
let SW6p = document.getElementById('sw-6-p');

//FIN PRODUCTOS STAR WARS

function sw (obj,id,idP,i,indexTP){
    
    id.innerHTML = `<img width="224" height="224" class="productos-img" alt="${obj[i].name}" src="${obj[i].src}"/ >`
    idP.innerHTML= ` <div class="contenedor-p-name"><p class="p-name" >${obj[i].name}</p></div>
    <div class="contenedor-p-precio"><p class="p-precio" >${obj[i].precio}</p></div>
<a class="link-ver-producto" onclick="obtenerInfo(${indexTP})" >Ver producto</a>`



}
sw(starWarsProducts,SW1,SW1p,0,0);
sw(starWarsProducts,SW2,SW2p,1,1);
sw(starWarsProducts,SW3,SW3p,2,2);
sw(starWarsProducts,SW4,SW4p,3,3);
sw(starWarsProducts,SW5,SW5p,4,4);
sw(starWarsProducts,SW6,SW6p,5,5);

//Consolas Productos
//Producto 1
let con0 = document.getElementById('con-0');
let con0p = document.getElementById('con-0-p');
//producto 2
let con1 = document.getElementById('con-1');
let con1p = document.getElementById('con-1-p');

//producto 3
let con2 = document.getElementById('con-2');
let con2p = document.getElementById('con-2-p');
//producto 4

let con3 = document.getElementById('con-3');
let con3p = document.getElementById('con-3-p');
//producto 5

let con4 = document.getElementById('con-4');
let con4p = document.getElementById('con-4-p');
//producto 6

let con5 = document.getElementById('con-5');
let con5p = document.getElementById('con-5-p');



//consola productos functions

sw(consolasProducts,con0,con0p,0,6);
sw(consolasProducts,con1,con1p,1,7);
sw(consolasProducts,con2,con2p,2,8);
sw(consolasProducts,con3,con3p,3,9);
sw(consolasProducts,con4,con4p,4,10);
sw(consolasProducts,con5,con5p,5,11); 

//Productos diversos
//1
let div0 = document.getElementById('div-0');
let div0p = document.getElementById('div-0-p');
//2
let div1 = document.getElementById('div-1');
let div1p = document.getElementById('div-1-p');
//3
let div2 = document.getElementById('div-2');
let div2p = document.getElementById('div-2-p');
//4
let div3 = document.getElementById('div-3');
let div3p = document.getElementById('div-3-p');
//5
let div4 = document.getElementById('div-4');
let div4p = document.getElementById('div-4-p');
//6
let div5 = document.getElementById('div-5');
let div5p = document.getElementById('div-5-p');

//Diversos productos function
sw(diversosProducts,div0,div0p,0,12);
sw(diversosProducts,div1,div1p,1,13);
sw(diversosProducts,div2,div2p,2,14);
sw(diversosProducts,div3,div3p,3,15);
sw(diversosProducts,div4,div4p,4,16);
sw(diversosProducts,div5,div5p,5,17);  
//Logo mail
let logoMail = document.getElementById('logo-mail-toggle');
let closeMail= document.getElementById('close-mail-box');
logoMail.addEventListener('click',function(e){
    document.getElementById('span-mail').classList.add('span-mail-activado')
})
closeMail.addEventListener('click',function(){
    document.getElementById('span-mail').classList.remove('span-mail-activado')
})



/*Ver Producto dinamico*/
//Objetivo - Cada vez que se apreta en "Ver producto" se abre una ventana mostrando
//una imagen mas grande con su descripción.
// Voy a necesitar crear un elemento span. 
const todosLosProductos = [
    {categoria: 'sw', id: 0,name: 'Darth Vader muñeco', src:'img/starWars/DarthVader.jpg', precio: '$100,00'},
    {categoria: 'sw', id: 1,name: 'Obi Wan Kenobi muñeco', src:'img/starWars/OBIWAN-KENOBI.jpg', precio: '$100,00'},
    {categoria: 'sw', id: 2,name: 'Yoda bebé muñeco', src:'img/starWars/yoda-bb.jpg', precio: '$100,00'},
    {categoria: 'sw', id: 3,name: 'R2 D2 Arturito Robot', src:'img/starWars/R2D2.jpg', precio: '$200,00'},
    {categoria: 'sw', id: 4,name: 'Taza Darth Vader coleccionable', src:'img/starWars/taza-drath-vader.png', precio: '$50,00'},
    {categoria: 'sw', id: 5,name: 'Tostadora Darth Vader', src:'img/starWars/tostadora-darth-vader.png', precio: '$250,00'},
    {categoria: 'consolas', id: 6,name: 'PlayStation 2', src:'img/consolas/PLAY2.jpg',precio:'$100,00'},
    {categoria: 'consolas', id: 7,name: 'Joystick', src:'img/consolas/Jostik.jpg',precio:'$20,00'},
    {categoria: 'consolas', id: 8,name: 'PlayStation 5', src:'img/consolas/play5.jpg',precio:'$750,00'},
    {categoria: 'consolas', id: 9,name: 'PlayStation 5 x', src:'img/consolas/PLAY52.jpg',precio:'$700,00'},
    {categoria: 'consolas', id: 10,name: 'Microsoft Xbox 500GB', src:'img/consolas/XBOX.jpg',precio:'$600,00'},
    {categoria: 'consolas', id: 11,name: 'Microsoft Xbox X 1TB', src:'img/consolas/XBOXONE.jpg',precio:'$850,00'},
    {categoria: 'diversos', id: 12,name: 'Camisa Faker', src:'img/diversos/camisa-faker.png',precio:'$50,00'},
    {categoria: 'diversos', id: 13,name: 'Joystick X-Box', src:'img/diversos/joystick-x-box.jpg',precio:'$50,00'},
    {categoria: 'diversos', id: 14,name: 'Pikachu', src:'img/diversos/pikachu.jpg',precio:'$150,00'},
    {categoria: 'diversos', id: 15,name: 'Radio Con Reloj Retro', src:'img/diversos/radio.jpg',precio:'$25,00'},
    {categoria: 'diversos', id: 16,name: 'Sonic', src:'img/diversos/sonic.jpg',precio:'$200,00'},
    {categoria: 'diversos', id: 17,name: 'Visor de Realidad Virtual', src:'img/diversos/visor-realidad-v.jpg',precio:'$300,00'}
];

let spanVerProducto = document.getElementById('mostrar-productos');
let verProductos = document.querySelectorAll('.link-ver-producto');
let mostrarPRecomendados = document.getElementById('mostrar-p-recomendados');
let spanVerProducto1 = document.getElementById('mostrar-p-A')
function obtenerInfo(indexTP){
    mostrarPRecomendados.innerHTML = '';
   
  spanVerProducto.classList.add('activar-mostrarProductos')
 
  spanVerProducto1.innerHTML = 
    `
        <img onclick="cerrarMostrarMas()" id="cerrar-mostrar-mas" class="cerrar-mostrar-mas" src="svg/X.svg">
        <div class="mostrar-p-A-img">
            <img src="${todosLosProductos[indexTP].src}">
        </div>
        <div class="mostrar-p-A-desc">
            <h2>${todosLosProductos[indexTP].name}</h2>
           
            <p class="p-description" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<p>

            <p class="p-precio">${todosLosProductos[indexTP].precio}</p>
        </div>
     
     
    `
    todosLosProductos.forEach(e =>{
        if(e.categoria == todosLosProductos[indexTP].categoria && e.name != todosLosProductos[indexTP].name){
            
          mostrarPRecomendados.innerHTML += `
          <div class="contenedor-recomendados">
            <img class="imagen-recomendado" src="${e.src}">
            <div class="recomendados-info">
                <h2 class="h2-recomendado">${e.name}</h2>
                <p class="precio-recomendado">${e.precio}</p>
            </div>
          <div>
          `
         
        }
      })
};

 function cerrarMostrarMas(){
    spanVerProducto.classList.remove('activar-mostrarProductos')
    
 }






   
   

