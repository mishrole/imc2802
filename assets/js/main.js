awfunction calculoIMC(estatura, peso){

	var peso = document.getElementById("peso");
	var estatura = document.getElementById("estatura");

	if((peso.value.length == 0) || (estatura.value.length == 0)){
		return alert("Rellene todos los campos");
	}

	return alert((peso.value / (estatura.value * estatura.value)).toFixed(2))
}