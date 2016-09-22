window.addEventListener("load", function() {
    var button = document.getElementById("box");
    button.addEventListener("click", function(e) { 
       e.preventDefault();
	function myFunction() {
        var texto = document.getElementById("texto").value;
        var newItem = document.createElement("div");
        newItem.appendChild(textnode);
        var resultado = document.getElementById("resultado");
        resultado.insertBefore(newItem,resultado.childNodes[0]);
        }
        myFunction();
	});
});
