
// definicion del entorno.
if (localStorage.getItem("user_name") === null){
    localStorage.setItem("user_name", "Ivan Neal");
}

localStorage.setItem("user_desempenio", "Desarrollador Web");
localStorage.setItem("user_dire","San Martin 2345, Santa Fe, Argentina");
localStorage.setItem("user_tel","(11) 789285942");
localStorage.setItem("user_mail","ivan.neal@gmail.com");
localStorage.setItem("user_web","www.ivan.neal.design.com");
localStorage.setItem("user_redsocial","@ivan_neal_design");

/* Experiencia laboral 1*/
localStorage.setItem("expe1_compania", "Nombre de empresa 1");
localStorage.setItem("expe1_desempenio", "Desarrollador Web / Programador");
localStorage.setItem("expe1_periodo", "Febrero/2015 - Presente");
localStorage.setItem("user_expe1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");

/* Experiencia laboral 2*/
localStorage.setItem("expe2_compania", "Nombre de empresa 2");
localStorage.setItem("expe2_desempenio", "Desarrollador Web / Programador");
localStorage.setItem("expe2_periodo", "Noviembre 2007 - Febrero 2009");
localStorage.setItem("user_expe2","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");


/* Experiencia laboral 3*/
localStorage.setItem("expe3_compania", "Nombre de empresa 3");
localStorage.setItem("expe3_desempenio", "Desarrollador Web / Programador");
localStorage.setItem("expe3_periodo", "Marzo 2006 - Noviember 2007");
localStorage.setItem("user_expe3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");


/* Educacion */ 
localStorage.setItem("facu_nombre","Universidad de Buenos Aires");
localStorage.setItem("facu_direccion","Calle Balcarse 3456");
localStorage.setItem("facu_ubicacion","Bs.As. - Argentina");
localStorage.setItem("facu_periodo","2021 - 2023");
localStorage.setItem("facu_web","www.123.com.ar");


// volcamos los valores al formulario.
//Datos del titular del CV
document.getElementById("user_name").value = localStorage.getItem("user_name");
document.getElementById("user_desempenio").value = localStorage.getItem("user_desempenio");
document.getElementById("user_dire").value = localStorage.getItem("user_dire");
document.getElementById("user_tel").value = localStorage.getItem("user_tel");
document.getElementById("user_mail").value = localStorage.getItem("user_mail");
document.getElementById("user_web").value = localStorage.getItem("user_web");
document.getElementById("user_redsocial").value = localStorage.getItem("user_redsocial");

/* Experiencia laboral 1*/
document.getElementById("expe1_compania").value = localStorage.getItem("expe1_compania");
document.getElementById("expe1_desempenio").value = localStorage.getItem("expe1_desempenio");
document.getElementById("expe1_periodo").value = localStorage.getItem("expe1_periodo");
document.getElementById("user_expe1").value = localStorage.getItem("user_expe1");

/* Experiencia laboral 2*/
document.getElementById("expe2_compania").value = localStorage.getItem("expe2_compania");
document.getElementById("expe2_desempenio").value = localStorage.getItem("expe2_desempenio");
document.getElementById("expe2_periodo").value = localStorage.getItem("expe2_periodo");
document.getElementById("user_expe2").value = localStorage.getItem("user_expe2");

/* Experiencia laboral 3*/
document.getElementById("expe3_compania").value = localStorage.getItem("expe3_compania");
document.getElementById("expe3_desempenio").value = localStorage.getItem("expe3_desempenio");
document.getElementById("expe3_periodo").value = localStorage.getItem("expe3_periodo");
document.getElementById("user_expe3").value = localStorage.getItem("user_expe3");

/* Vuelco Educacion */
document.getElementById("facu_nombre").value = localStorage.getItem("facu_nombre");
document.getElementById("facu_direccion").value =localStorage.getItem("facu_direccion");
document.getElementById("facu_ubicacion").value =localStorage.getItem("facu_ubicacion");
document.getElementById("facu_periodo").value =localStorage.getItem("facu_periodo");
document.getElementById("facu_web").value =localStorage.getItem("facu_web");

/**
 * funciones
 */

document.getElementById("user_name").onchange = function(){
    localStorage.setItem("user_name", document.getElementById("user_name").value);
    //alert(localStorage.getItem("user_name"));
}

/*
localStorage.setItem("user_name", "Ivan Neal")
localStorage.setItem("user_desempenio", "Desarrollador Web");
localStorage.setItem("user_dire","San Martin 2345, Santa Fe, Argentina");
localStorage.setItem("user_tel","(11) 789285942");
localStorage.setItem("user_mail","ivan.neal@gmail.com");
localStorage.setItem("user_web","www.ivan.neal.design.com");
localStorage.setItem("user_redsocial","@ivan_neal_design");
*/