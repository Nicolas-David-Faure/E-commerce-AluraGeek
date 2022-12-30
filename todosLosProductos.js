//Logo mail
let logoMail = document.getElementById('logo-mail-toggle');
let closeMail= document.getElementById('close-mail-box');
logoMail.addEventListener('click',function(e){
    document.getElementById('span-mail').classList.add('span-mail-activado')
})
closeMail.addEventListener('click',function(){
    document.getElementById('span-mail').classList.remove('span-mail-activado')
})

const todosLosProductos = [
    {name: 'Darth Vader muñeco', src:'img/starWars/DarthVader.jpg', precio: '$100,00'},
    {name: 'Obi Wan Kenobi muñeco', src:'img/starWars/OBIWAN-KENOBI.jpg', precio: '$100,00'},
    {name: 'Yoda bebé muñeco', src:'img/starWars/yoda-bb.jpg', precio: '$100,00'},
    {name: 'R2 D2 Arturito Robot', src:'img/starWars/R2D2.jpg', precio: '$200,00'},
    {name: 'Taza Darth Vader coleccionable', src:'img/starWars/taza-drath-vader.png', precio: '$50,00'},
    {name: 'Tostadora Darth Vader', src:'img/starWars/tostadora-darth-vader.png', precio: '$250,00'},
    {name: 'PlayStation 2', src:'img/consolas/PLAY2.jpg',precio:'$100,00'},
    {name: 'Joystick', src:'img/consolas/Jostik.jpg',precio:'$20,00'},
    {name: 'PlayStation 5', src:'img/consolas/play5.jpg',precio:'$750,00'},
    {name: 'PlayStation 5', src:'img/consolas/PLAY52.jpg',precio:'$700,00'},
    {name: 'Microsoft Xbox 500 GB Consola Blanca 500GB', src:'img/consolas/XBOX.jpg',precio:'$600,00'},
    {name: 'Microsoft Xbox X 1TB Consola-Negro Series-', src:'img/consolas/XBOXONE.jpg',precio:'$850,00'},
    {name: 'Camisa Faker', src:'img/diversos/camisa-faker.png',precio:'$50,00'},
    {name: 'Joystick X-Box', src:'img/diversos/joystick-x-box.jpg',precio:'$50,00'},
    {name: 'Pikachu', src:'img/diversos/pikachu.jpg',precio:'$150,00'},
    {name: 'Radio Con Reloj Retro', src:'img/diversos/radio.jpg',precio:'$25,00'},
    {name: 'Sonic', src:'img/diversos/sonic.jpg',precio:'$200,00'},
    {name: 'Visor de Realidad Virtual', src:'img/diversos/visor-realidad-v.jpg',precio:'$300,00'}
];

let contenedorTP = document.getElementById('main-TP');
    todosLosProductos.forEach(function(e,i,a){
        contenedorTP.innerHTML += 
        `<div  class="main-tp-productos">
            <img  class="incons trash" src="svg/trash-icon.svg">
            <img  class="incons pencil" src="svg/pencil.svg">
            <img width="160" height="150" src="${e.src}" />
            <div class="main-tp-productos-info">
                <p>${e.name}</p>
                <p class="precio">${e.precio}</p>
                <p>#${i+1}</p>
            </div>
        </div>`
    });



    
