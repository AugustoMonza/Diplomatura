// var nombre = prompt ('Cuál es tu nombre?');
// alert (`Bienvenido a mi sitio web ${nombre}`);
// var diseno = prompt ('viste los diseños que realizo?');
// var tatoo = prompt ('Qué estilo te gusta?');
// var size = prompt ('De qué medida te lo querés hacer?');
// var contact = prompt ('si querés, me podés dejar una forma de contactarte');

// button up

buttonUp = document.getElementById("up_fig");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 400){

        buttonUp.style.transform = "scale(1)";
    }
    else if(scroll < 400){

        buttonUp.style.transform = "scale(0)";
    }
}