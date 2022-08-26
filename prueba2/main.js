var mybutton = document.getElementById("mi_boton");
var mynumber = document.getElementById("mi_numero");
var count = 0;

mybutton.onclick = function(){
    count ++;
    mynumber.innerHTML = count;
}
