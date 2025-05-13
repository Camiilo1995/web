const input =document.getElementById('telefono');
    //evento cuando el usuario hace click o entra al input
input.addEventListener('focus',()=>{
    // si aun no empieza con +1 lo agrega automaticamente
    if(!input.value.startsWith('+1 ')){
        input.value ='+1 ';
        setCursorToEnd();//coloca el cursor al final del texto
    }
});

input.addEventListener("input", () => {
    // Eliminar prefijo si ya existe y quedarse solo con los números
    let raw = input.value.replace(/[^0-9]/g, "");
    if (raw.startsWith("1")) {
      raw = raw.substring(1); // evitar doble "1"
    }

    // Máximo 10 dígitos después del +1
    raw = raw.substring(0, 10);

    // Agregar espacio cada 3 dígitos
    let formatted = "";
    for (let i = 0; i < raw.length; i++) {
      if (i > 0 && i % 3 === 0 && i !== 9) {
        formatted += " ";
      }
      formatted += raw[i];
    }

    // Prefijo fijo
    input.value = "+1 " + formatted;
    setCursorToEnd();
  });

  function setCursorToEnd() {
    const len = input.value.length;
    input.setSelectionRange(len, len);
  }