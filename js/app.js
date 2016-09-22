window.addEventListener("load", function() {
    var button = document.getElementById("calcular");
    button.addEventListener("click", function(e) { 
       e.preventDefault();
	function myFunction() {
        var texto = document.getElementById("texto").value;
        var newItem = document.createElement("p");
        newItem.appendChild(textnode);
        var resultado = document.getElementById("resultado");
        resultado.insertBefore(newItem,resultado.childNodes[0]);
        }
        myFunction();
	}); 
    texto.addEventListener("keyup",function(e) {
        button.disabled = false;
        var maximo = 140;
        var tamaño = document.getElementById("texto").value.length;
        var conteo = document.getElementById("contador");
        conteo.innerText = maximo - tamaño;
            if (tamaño == 0 ) {
                button.disabled = true;
            } else if(tamaño > maximo) {
                button.disabled = true;
        }
    });
});