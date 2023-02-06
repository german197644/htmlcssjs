/**
 * 
 * Desarrollado por: Pogliani, Germán D.
 * Febrero - 2023
 * 
 */

/**
 * 
 * Seccion cabecera
 * 
 */
// foto
document.getElementById("foto").innerHTML = "<img src='"+localStorage.user_foto+"' width='250' height='250' alt='No se puede visualizar la imagen en tu navegador.' />";
// nombre 
document.getElementById("nombre").innerHTML = localStorage.getItem("user_name");
// profesion actual
document.getElementById("user_prof").innerHTML = localStorage.user_desempenio;
// direccion actual
document.getElementById("direccion").innerHTML = localStorage.user_dire;
// telefono
document.getElementById("telefono").innerHTML = localStorage.getItem("user_tel");
// e-mail
document.getElementById("correo").innerHTML = "<a href='mailto:"+localStorage.user_mail+"'>"+localStorage.user_mail+"</a>"
// si tiene pagina web
document.getElementById("url").innerHTML = "<a href='http://"+localStorage.user_web+"' target='_blank'>"+localStorage.user_web+"</a>"
// si tiene red social
document.getElementById("twit").innerHTML = "<a href='http://twitter.com/twitter-screen-name' title='Sigueme en twitter' target='_blank'>"+localStorage.user_redsocial+"</a>"

/**
 * 
 * Seccion habilidades.
 * 
*/

// setea las habilidades del usuario en el cv.
document.getElementById("habilidades").innerHTML = localStorage.user_habilidades;

/**
 * 
 * Seccion Experiencias.
 * 
*/

/* Experiencia laboral 1*/

// nombre de la compañia
document.getElementById("expe1_compania").innerHTML = localStorage.expe1_compania;
// desempeño que tuvo
document.getElementById("expe1_desempenio").innerHTML = localStorage.getItem("expe1_desempenio");
// periodo laboral
document.getElementById("expe1_periodo").innerHTML = localStorage.getItem("expe1_periodo");
// tareas realizadas
document.getElementById("user_expe1").innerHTML = localStorage.getItem("user_expe1");

/* Experiencia laboral 2*/

// nombre de la compañia
document.getElementById("expe2_compania").innerHTML = localStorage.expe2_compania;
// desempeño que tuvo
document.getElementById("expe2_desempenio").innerHTML = localStorage.getItem("expe2_desempenio");
// periodo laboral
document.getElementById("expe2_periodo").innerHTML = localStorage.getItem("expe2_periodo");
// tareas realizadas
document.getElementById("user_expe2").innerHTML = localStorage.getItem("user_expe2");

/* Experiencia laboral 3*/

// nombre de la compañia
document.getElementById("expe3_compania").innerHTML = localStorage.expe3_compania;
// desempeño que tuvo
document.getElementById("expe3_desempenio").innerHTML = localStorage.getItem("expe3_desempenio");
// periodo laboral
document.getElementById("expe3_periodo").innerHTML = localStorage.getItem("expe3_periodo");
// tareas realizadas
document.getElementById("user_expe3").innerHTML = localStorage.getItem("user_expe3");

/**
 * 
 * Seccion educacion.
 * 
*/

// nombre de la universidad o inst. edu.
document.getElementById("nom_uni").innerHTML = localStorage.getItem("facu_nombre");
// Direccion de la inst. edu.
document.getElementById("dir_uni").innerHTML = localStorage.getItem("facu_direccion");
// ubicacion de la inst. edu.
document.getElementById("ubi_uni").innerHTML = localStorage.getItem("facu_ubicacion");

// periodo de cursado en el inst. edu.
document.getElementById("periodo_uni").innerHTML = localStorage.getItem("facu_periodo");

// web del inst. edu.
let dirweb = localStorage.facu_web;
document.getElementById("web_uni").innerHTML = "<a href=http://"+dirweb+" target='_blank'>"+localStorage.getItem("facu_web")+"</a>";

