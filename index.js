function encriptar() {
    const texto = document.querySelector(".texto").value;
    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("párrafo");
    const muneco = document.getElementById("muneco");
  
    if (texto.trim() === "") {
      alert("Error: Por favor ingresa un texto para encriptar.");
      return;
    }
  
    if (validarTexto(texto)) {
      const textoEncriptado = encriptarTexto(texto);
      mensajeEncriptado.style.display = "block";
      tituloMensaje.textContent = "Mensaje encriptado:";
      parrafo.textContent = textoEncriptado;
      muneco.style.display = "none";
      
    }
  }
  
  function Desencriptar() {
    const texto = document.querySelector(".texto").value;
    const mensajeEncriptado = document.getElementById("mensaje-encriptado");
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("párrafo");
    const muneco = document.getElementById("muneco");
  
    if (texto.trim() === "") {
      alert("Error: Por favor ingresa un texto para desencriptar.");
      return;
    }
  
    if (validarTexto(texto)) {
      const textoDesencriptado = desencriptarTexto(texto);
      mensajeEncriptado.style.display = "block";
      tituloMensaje.textContent = "Mensaje desencriptado:";
      parrafo.textContent = textoDesencriptado;
      muneco.style.display = "none";
    }
  }
  
  function validarTexto(texto) {
    if (!texto.match(/^[a-z]*$/)) {
      alert("Error: Solo se permiten letras minúsculas y sin acentos.");
      return false;
    }
    return true;
  }
  
  function encriptarTexto(texto) {
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"]
    ];
    let textoEncriptado = texto.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (textoEncriptado.includes(matrizCodigo[i][0])) {
        textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }
  
    return textoEncriptado;
  }
  
  function desencriptarTexto(texto) {
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"]
    ];
    let textoDesencriptado = texto.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (textoDesencriptado.includes(matrizCodigo[i][1])) {
        textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
  
    return textoDesencriptado;
  }
  
