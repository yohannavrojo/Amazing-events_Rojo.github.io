const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    // alert("Formulario enviado correctamente");
    Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Gracias por completar el formulario.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
  }
});
