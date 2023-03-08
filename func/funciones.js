//Menu
let mnu_hide = false;
let mnu = document.getElementById("nav");
function miMenu(){
    if(mnu_hide==false){
        mnu.style.display = "block";
        mnu_hide = true;
    }
    else{
        mnu.style.display = "none";
        mnu_hide = false;
    }
}

// ---------------------------------------
// ocultar el menu al seleccionar opcion
let matches = document.querySelectorAll('nav a');
// recorremos el arreglo con los elementos del mnu
// y le asignamos una funcion al clickear.
matches.forEach(function(dato){
    dato.onclick=function(){
        mnu.style.display = "none";
        mnu_hide = false;
    }
});