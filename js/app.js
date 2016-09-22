window.addEventListener("load", function() {
    var button = document.getElementById("calcular");
    button.addEventListener("click", function(e) { 
       e.preventDefault();
	function myFunction() {
        var newItem = document.createElement("p");
        var textoo = document.getElementById("texto").value;
        var texto = document.createTextNode(textoo);
        newItem.appendChild(texto);
        var resultado = document.getElementById("resultado");
        resultado.insertBefore(newItem,resultado.childNodes[0]);
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var contenedorHora = document.createElement("span");
        contenedorHora.innerText = hora + ":" + minuto;
        newItem.insertBefore(contenedorHora,newItem.childNodes[0]);
        }
        myFunction();
	}); 
    texto.addEventListener("keyup",function(e) {
        button.disabled = false;
        var key = e.keyCode;
        agrandarBox (key);
        var maximo = 140;
        var tamaño = document.getElementById("texto").value.length;
        var conteo = document.getElementById("contador");
        conteo.innerText = maximo - tamaño;
            if (tamaño == 0 ) {
                button.disabled = true;
            } else if(tamaño > maximo) {
                button.disabled = true;
            } else if(tamaño > 120) {
                conteo.classList.add("crimson");
            } else {
                conteo.classList.remove("crimson");
            } if(tamaño > 130) {
                conteo.classList.add("cyan");
            } else {
                conteo.classList.remove("cyan");
            }
    });
    function agrandarBox(key) {
        var texto = document.getElementById("texto");
        if (key == 13) {     
            texto.rows += 1;     
        } else if(key == 8) {
            texto.rows -= 1; 
        } if(texto.rows < 3) {
            texto.rows == 2;
        }
    }
    function validarBox(texto) {
        var texto = document.getElementById("texto");
        if (texto.value.length > texto.rows * texto.cols) {
            texto.rows += 1; 
        }
    }
});