document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
  
    function mostrarConsola() {
      const usuario = document.getElementById("floatingInput").value;
      const contraseña = document.getElementById("floatingPassword").value;
  
      console.log(`El usuario que ingresó es: ${usuario}`);
      console.log(`La contraseña que ingresó es: ${contraseña}`);
    }
  
    loginBtn.addEventListener("click", mostrarConsola);
  });