document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const cancelBtn = document.getElementById("cancelBtn");
    const registerBtn = document.getElementById("registerBtn");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
      mostrarDatos();
    });
  
    cancelBtn.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  
    function mostrarDatos() {
      const nombre = document.getElementById("nombre").value;
      const apellidos = document.getElementById("apellidos").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const estrato = document.getElementById("estrato").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
      const grupoSanguineo = document.getElementById("grupoSanguineo").value;
      const genero = document.getElementById("genero").value;
      const actividades = Array.from(document.getElementById("actividades").selectedOptions).map(option => option.value);
  
      const datos = `Nombre: ${nombre}
  Apellidos: ${apellidos}
  Email: ${email}
  Teléfono: ${telefono}
  Estrato: ${estrato}
  Fecha de Nacimiento: ${fechaNacimiento}
  Grupo Sanguíneo: ${grupoSanguineo}
  Género: ${genero}
  Actividades Favoritas: ${actividades.join(", ")}`;
  
      alert(datos);
    }
  });