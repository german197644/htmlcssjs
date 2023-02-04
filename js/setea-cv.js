/**
 * 
 * Seccion cabecera
 * 
 */

document.getElementById("nombre").innerHTML = localStorage.getItem("user_name");
document.getElementById("user_prof").innerHTML = localStorage.user_desempenio;
document.getElementById("direccion").innerHTML = localStorage.user_dire;
document.getElementById("telefono").innerHTML = localStorage.getItem("user_tel");
//<a href="mailto:your-email@gmail.com">german@gmail.com</a>
document.getElementById("correo").innerHTML = "<a href='mailto:"+localStorage.user_mail+"'>"+localStorage.user_mail+"</a>"
document.getElementById("url").innerHTML = "<a href='http://"+localStorage.user_web+"' target='_blank'>"+localStorage.user_web+"</a>"
document.getElementById("twit").innerHTML = "<a href='http://twitter.com/twitter-screen-name' title='Sigueme en twitter' target='_blank'>"+localStorage.user_redsocial+"</a>"


/**
 * CV.html
 * Seccion educacion.
 * 
*/

// nombre de la universidad o inst. edu.
document.getElementById("nom_uni").innerHTML = localStorage.getItem("facu_nombre");
// Direccion de la inst. edu.
document.getElementById("dir_uni").innerHTML = localStorage.getItem("facu_direccion");
// ubicacion de la inst. edu.
document.getElementById("ubi_uni").innerHTML = localStorage.getItem("facu_ubicacion");

// ubicacion de la inst. edu.
document.getElementById("periodo_uni").innerHTML = localStorage.getItem("facu_periodo");

// ubicacion de la inst. edu.
let dirweb = localStorage.facu_web;
document.getElementById("web_uni").innerHTML = "<a href=http://"+dirweb+" target='_blank'>"+localStorage.getItem("facu_web")+"</a>";

