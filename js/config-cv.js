/**
 * 
 * Desarrollado por: Pogliani, Germán
 * Febrero - 2023
 * 
 */
// definicion del entorno.
// solo si la variable de entorno no existe la creo.
if (localStorage.getItem("user_name") === null){
    localStorage.setItem("user_name", "Ivan Neal");
}

if (localStorage.getItem("user_desempenio") === null){
    localStorage.setItem("user_desempenio", "Desarrollador Web");
}

if (localStorage.getItem("user_dire") === null){
    localStorage.setItem("user_dire","San Martin 2345, Santa Fe, Argentina");
}

if (localStorage.getItem("user_tel") === null){
    localStorage.setItem("user_tel","(11) 789285942");
}

if (localStorage.getItem("user_mail") === null){
    localStorage.setItem("user_mail","ivan.neal@gmail.com");
}

if (localStorage.getItem("user_web") === null){
    localStorage.setItem("user_web","www.ivan.neal.design.com");
}

if (localStorage.getItem("user_redsocial") === null){
    localStorage.setItem("user_redsocial","@ivan_neal_design");
}

// habilidades ..........................

if (localStorage.getItem("user_habilidades") === null){
    localStorage.setItem("user_habilidades", "Altualmente cuento con conocimientos en HTML, HTML5, PHP, JavaScript, Visual Foxpro, Css, Mysql y Python.");
}



/* Experiencia laboral 1*/
if (localStorage.getItem("expe1_compania") === null){
    localStorage.setItem("expe1_compania", "Nombre de empresa 1");
}

if (localStorage.getItem("expe1_desempenio") === null){
    localStorage.setItem("expe1_desempenio", "Desarrollador Web / Programador");
}

if (localStorage.getItem("expe1_periodo") === null){
    localStorage.setItem("expe1_periodo", "Febrero/2015 - Presente");
}

if (localStorage.getItem("user_expe1") === null){
    localStorage.setItem("user_expe1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");
}

/* Experiencia laboral 2*/
if (localStorage.getItem("expe2_compania") === null){
    localStorage.setItem("expe2_compania", "Nombre de empresa 2");
}

if (localStorage.getItem("expe2_desempenio") === null){
    localStorage.setItem("expe2_desempenio", "Desarrollador Web / Programador");
}

if (localStorage.getItem("expe2_periodo") === null){
    localStorage.setItem("expe2_periodo", "Noviembre 2007 - Febrero 2009");
}

if (localStorage.getItem("user_expe2") === null){
    localStorage.setItem("user_expe2","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");
}


/* Experiencia laboral 3*/
if (localStorage.getItem("expe3_compania") === null){
    localStorage.setItem("expe3_compania", "Nombre de empresa 3");
}

if (localStorage.getItem("expe3_desempenio") === null){
    localStorage.setItem("expe3_desempenio", "Desarrollador Web / Programador");
}

if (localStorage.getItem("expe3_periodo") === null){
    localStorage.setItem("expe3_periodo", "Marzo 2006 - Noviember 2007");
}

if (localStorage.getItem("user_expe3") === null){
    localStorage.setItem("user_expe3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.");
}


/* Educacion */
if (localStorage.getItem("facu_nombre") === null){
    localStorage.setItem("facu_nombre","Universidad de Buenos Aires");
}

if (localStorage.getItem("facu_direccion") === null){
    localStorage.setItem("facu_direccion","Calle Balcarse 3456");
}

if (localStorage.getItem("facu_ubicacion") === null){
    localStorage.setItem("facu_ubicacion","Bs.As. - Argentina");
}

if (localStorage.getItem("facu_periodo") === null){
    localStorage.setItem("facu_periodo","2021 - 2023");
}

if (localStorage.getItem("facu_web") === null){
    localStorage.setItem("facu_web","www.123.com.ar");
}


// volcamos los valores al formulario.
//Datos del titular del CV
document.getElementById("user_name").value = localStorage.getItem("user_name");
document.getElementById("user_desempenio").value = localStorage.getItem("user_desempenio");
document.getElementById("user_dire").value = localStorage.getItem("user_dire");
document.getElementById("user_tel").value = localStorage.getItem("user_tel");
document.getElementById("user_mail").value = localStorage.getItem("user_mail");
document.getElementById("user_web").value = localStorage.getItem("user_web");
document.getElementById("user_redsocial").value = localStorage.getItem("user_redsocial");

// habilidades
document.getElementById("user_habilidades").value = localStorage.getItem("user_habilidades");

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

/** 
 * Modifica el nombre de usuario 
*/
document.getElementById("user_name").onchange = function(){
    localStorage.setItem("user_name", document.getElementById("user_name").value);
}

/** 
 * Modifica la profesion del usuario.
*/
document.getElementById("user_desempenio").onchange = function(){
    localStorage.setItem("user_desempenio", document.getElementById("user_desempenio").value);
}

/** 
 * Modifica la direccion del usuario.
*/
document.getElementById("user_dire").onchange = function(){
    localStorage.setItem("user_dire", document.getElementById("user_dire").value);
}

/** 
 * Modifica el telefono del usuario.
*/
document.getElementById("user_tel").onchange = function(){
    localStorage.setItem("user_tel", document.getElementById("user_tel").value);
}

/** 
 * Modifica el telefono del usuario.
*/
document.getElementById("user_mail").onchange = function(){
    localStorage.setItem("user_mail", document.getElementById("user_mail").value);
}

/** 
 * Modifica la web del usuario.
*/
document.getElementById("user_web").onchange = function(){
    localStorage.setItem("user_web", document.getElementById("user_web").value);
}

/** 
 * Modifica el red social del usuario.
*/
document.getElementById("user_redsocial").onchange = function(){
    localStorage.setItem("user_redsocial", document.getElementById("user_redsocial").value);
}

// Habilidades ---------------------

/** 
 * Modifica las habilidades del usuario.
*/
document.getElementById("user_habilidades").onchange = function(){
    localStorage.setItem("user_habilidades", document.getElementById("user_habilidades").value);
}



//Modifica el exp. laboral 1 del usuario ---------------------

/** 
 * Modifica el compañia del usuario.
*/
document.getElementById("expe1_compania").onchange = function(){
    localStorage.setItem("expe1_compania", document.getElementById("expe1_compania").value);
}


/** 
 * Modifica el desempeño del usuario.
*/
document.getElementById("expe1_desempenio").onchange = function(){
    localStorage.setItem("expe1_desempenio", document.getElementById("expe1_desempenio").value);
}


/** 
 * Modifica el periodo laboral del usuario.
*/
document.getElementById("expe1_periodo").onchange = function(){
    localStorage.setItem("expe1_periodo", document.getElementById("expe1_periodo").value);
}

/** 
 * Modifica el experiencia laboral obtenida del usuario.
*/
document.getElementById("user_expe1").onchange = function(){
    localStorage.setItem("user_expe1", document.getElementById("user_expe1").value);
}



//Modifica el exp. laboral 2 del usuario ---------------------

/** 
 * Modifica el compañia del usuario.
*/
document.getElementById("expe2_compania").onchange = function(){
    localStorage.setItem("expe2_compania", document.getElementById("expe2_compania").value);
}


/** 
 * Modifica el desempeño del usuario.
*/
document.getElementById("expe2_desempenio").onchange = function(){
    localStorage.setItem("expe2_desempenio", document.getElementById("expe2_desempenio").value);
}


/** 
 * Modifica el periodo laboral del usuario.
*/
document.getElementById("expe2_periodo").onchange = function(){
    localStorage.setItem("expe2_periodo", document.getElementById("expe2_periodo").value);
}

/** 
 * Modifica el experiencia laboral obtenida del usuario.
*/
document.getElementById("user_expe2").onchange = function(){
    localStorage.setItem("user_expe2", document.getElementById("user_expe2").value);
}



//Modifica el exp. laboral 3 del usuario ---------------------

/** 
 * Modifica el compañia del usuario.
*/
document.getElementById("expe3_compania").onchange = function(){
    localStorage.setItem("expe3_compania", document.getElementById("expe3_compania").value);
}


/** 
 * Modifica el desempeño del usuario.
*/
document.getElementById("expe3_desempenio").onchange = function(){
    localStorage.setItem("expe3_desempenio", document.getElementById("expe3_desempenio").value);
}


/** 
 * Modifica el periodo laboral del usuario.
*/
document.getElementById("expe3_periodo").onchange = function(){
    localStorage.setItem("expe3_periodo", document.getElementById("expe3_periodo").value);
}

/** 
 * Modifica el experiencia laboral obtenida del usuario.
*/
document.getElementById("user_expe3").onchange = function(){
    localStorage.setItem("user_expe3", document.getElementById("user_expe3").value);
}

// Educacion del usuario

/** 
 * Modifica la facultad donde estudio el usuario.
*/
document.getElementById("facu_nombre").onchange = function(){
    localStorage.setItem("facu_nombre", document.getElementById("facu_nombre").value);
}

/** 
 * Modifica la dire de la facultad.
*/
document.getElementById("facu_direccion").onchange = function(){
    localStorage.setItem("facu_direccion", document.getElementById("facu_direccion").value);
}

/** 
 * Modifica la ubicacion de la facultad.
*/
document.getElementById("facu_ubicacion").onchange = function(){
    localStorage.setItem("facu_ubicacion", document.getElementById("facu_ubicacion").value);
}

/** 
 * Modifica el periodo de la facultad.
*/
document.getElementById("facu_periodo").onchange = function(){
    localStorage.setItem("facu_periodo", document.getElementById("facu_periodo").value);
}

/** 
 * Modifica la web de la facultad.
*/
document.getElementById("facu_web").onchange = function(){
    localStorage.setItem("facu_web", document.getElementById("facu_web").value);
}
