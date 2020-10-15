var divhtml = document.getElementById("generador");
var valorX = document.getElementById("valor1");
var valorY = document.getElementById("valor2");

var boton = document.getElementById("generar_resultado");

boton.addEventListener("click", resultado);

function resultado()
{
	generador.innerHTML = "Cuadrante: ";
	var x = parseInt(valorX.value);
	var y = parseInt(valorY.value);

	if (x > 0.0 && y > 0.0)
	{
		generador1.innerHTML = "Q1";
	}
	else if (x < 0.0 && y > 0.0)
	{
		generador1.innerHTML = "Q2";
	}
	else if (x < 0.0 && y < 0.0)
	{
		generador1.innerHTML = "Q3";
	}
	else if (x > 0.0 && y < 0.0)
	{
		generador1.innerHTML = "Q4";
	}
	else if (x == 0.0 && y == 0.0)
	{
		generador1.innerHTML = "Origem";
	}
	else if (x == 0.0 && y != 0.0)
	{
		generador1.innerHTML = "Eixo Y";
	}
	else if (x != 0.0 && y == 0.0)
	{
		generador1.innerHTML = "Eixo X";
	}
}