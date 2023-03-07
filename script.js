function calcularCalificacionFinal() {
	// Obtener las calificaciones ingresadas por el usuario
	let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
	let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
	let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
	let calificacionExamenFinal = parseFloat(document.getElementById("calificacionExamenFinal").value);
	let calificacionTrabajoFinal = parseFloat(document.getElementById("calificacionTrabajoFinal").value);

	// Calcular la calificación final
	let promedioParciales = (calificacion1 + calificacion2 + calificacion3) / 3;
	let calificacionFinal = promedioParciales * 0.55 + calificacionExamenFinal * 0.3 + calificacionTrabajoFinal * 0.15;

	// Mostrar la calificación final al usuario
	document.getElementById("resultado").innerHTML = `Tu calificación final en la materia de Algoritmos es: ${calificacionFinal.toFixed(2)}`;
}
