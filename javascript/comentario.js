function nComentario() {
    let li = document.createElement("li");
    let valoringresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valoringresado);
  
    li.appendChild(text);
  
    if (valoringresado === '') {
      alert("Ingrese un comentario!");
    } else {
      document.getElementById("comentarios").appendChild(li);
    }
  
    document.getElementById("nuevoComentario").value = "";
  
    li.className = "comentario";
  
    let borrar = document.createElement("button"); // Cambiar de <p> a <button>
    borrar.innerHTML = "X"; // Cambiar el contenido del botón si lo deseas
    borrar.className = "close close-btn"; // Agregar clase "close-btn"
    li.appendChild(borrar);
  
    let closeBtns = document.getElementsByClassName("close-btn");
    for (let i = 0; i < closeBtns.length; i++) {
      closeBtns[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  