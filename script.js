(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

document.getElementById('add-user').addEventListener('click', function() {
    document.getElementById('personal-info').classList.toggle('hidden');
});

const buttons = document.querySelectorAll('#save-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Se elimino con exito", "", "success");
      }
    });
  });
});



