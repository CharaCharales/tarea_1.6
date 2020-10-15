var divhtml = document.getElementById("generador");
var valorR = document.getElementById("valor");

var boton = document.getElementById("generar_resultado");

boton.addEventListener("click", resultado);

function resultado()
{
	generador.innerHTML = "Resultado: ";
	var R = parseInt(valorR.value);
	var pi = 3.14159;
	var V = (4/3.0) * pi * R * R * R;
	generador1.innerHTML = Number.parseFloat(V).toFixed(3);
}