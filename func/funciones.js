//Menu
var mnu_hide = false;
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