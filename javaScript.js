const nombre = document.querySelector('h1');
nombre.addEventListener('click', escribirNombre);

function escribirNombre(){
    let = name = prompt("Ingresar un nuevo nombre ");
    nombre.textContent = 'Nombre : ' + name;
}