# Amigo Secreto - Sorteo en JavaScript

Este proyecto fue desarrollado como parte del reto de **Oracle Next Education (ONE) - Alura LATAM**.  
El objetivo es implementar una aplicación web que permita ingresar nombres de amigos, mostrarlos en pantalla y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

---

## Descripción del Proyecto
La aplicación es interactiva y permite:
- Agregar nombres de participantes.
- Visualizar la lista actualizada en pantalla.
- Realizar un sorteo aleatorio de un participante.
- Reiniciar el juego para comenzar de nuevo.

Se han agregado validaciones para:
- Evitar agregar nombres vacíos.
- Evitar el sorteo si no hay participantes.
- Evitar el sorteo si solo hay un participante.

---

## Tecnologías Utilizadas
- **HTML5** para la estructura del documento.
- **CSS** para el diseño y estilos.
- **JavaScript** para la lógica y la interacción.

---

## Estructura del Proyecto
/proyecto-amigo-secreto

│── index.html        # Estructura principal de la página

│── style.css         # Estilos de la interfaz

│── script.js         # Lógica y funciones del juego

│── README.md         # Documentación del proyecto

---

## Lógica del Código

El núcleo de la aplicación se basa en un arreglo que almacena los nombres de los amigos y una serie de funciones que permiten agregar, mostrar, sortear y reiniciar los datos.

### Variable Principal
```javascript
let amigosSecretos = [];
Este arreglo guarda los nombres de todos los participantes ingresados.

---

Funciones y su Lógica

agregarAmigo()
	1.	Obtiene el valor ingresado en el campo de texto con el ID "amigo".
	2.	Valida que no esté vacío.
	3.	Si es válido, lo agrega al arreglo amigosSecretos.
	4.	Limpia el campo de entrada.
	5.	Actualiza la lista visible en pantalla llamando a listaPantalla().

asignarTexto(parte, texto)
	•	Recibe dos parámetros:
	•	parte: el ID de un elemento HTML.
	•	texto: el contenido que se quiere mostrar.
	•	Cambia el contenido de ese elemento en el documento HTML.
	•	Sirve como función auxiliar para actualizar el DOM.

listaPantalla()
	1.	Recorre el arreglo amigosSecretos.
	2.	Genera una cadena de texto con elementos <li> para cada nombre.
	3.	Usa asignarTexto() para mostrar la lista en el elemento con ID "listaAmigos".

seleccionarAmigo()
	1.	Calcula un número aleatorio entre 0 y amigosSecretos.length - 1.
	2.	Retorna el nombre correspondiente a ese índice.

sortearAmigo()
	1.	Valida que haya al menos 2 participantes.
	2.	Si la validación es correcta, llama a seleccionarAmigo() para obtener un nombre aleatorio.
	3.	Muestra el resultado en pantalla usando asignarTexto().
	4.	Cambia el texto del botón principal a "Reintentar".

reiniciar()
	1.	Vacía el arreglo amigosSecretos.
	2.	Limpia el contenido de la lista y el resultado en pantalla.
	3.	Restaura el texto del botón a "Sortear amigo".

estadoBoton()
	1.	Obtiene el texto actual del botón.
	2.	Si el texto es "Sortear amigo", ejecuta sortearAmigo().
	3.	Si el texto es "Reintentar", ejecuta reiniciar().

---

Flujo de Uso
	1.	Abrir index.html en el navegador.
	2.	Escribir un nombre y presionar el botón Agregar.
	3.	Repetir el paso anterior para añadir más participantes.
	4.	Presionar Sortear amigo para obtener un nombre aleatorio.
	5.	Ver el resultado en pantalla.
	6.	Presionar Reintentar para vaciar la lista y comenzar de nuevo.

---

Ejemplo de Interacción
	•	Entrada: Ana, Pedro, Luis
	•	Sorteo: El sistema selecciona aleatoriamente uno (por ejemplo: “Luis”).
	•	Salida en pantalla: “Tu amigo secreto es Luis”.[README.md](https://github.com/user-attachments/files/21767638/README.md)
egan nombres de amigos, y al final se sortea
