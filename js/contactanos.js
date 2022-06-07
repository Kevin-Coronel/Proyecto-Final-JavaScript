/*----------------------------Eventos----------------------------*/
let submit = document.getElementById("submit");
submit.addEventListener("click", enviar);

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;
    
    mensaje == "" ? Swal.fire({
            icon: 'error',
            title: 'Por favor complete el campo con su consulta.',
            background:'rgb(212, 208, 180)', 
        }) : null;

    

    (mail.indexOf("@") > -1 && mail.indexOf(".") > -1) ? true : Swal.fire({
            icon: 'error',
            title: 'Por favor complete el campo con su direccion de correo electrónico.',
            background: 'rgb(212, 208, 180)',
        });

    nombre == "" ? Swal.fire({
            icon: 'error',
            title: 'Por favor complete el campo con nombre y apellido.',
            background: 'rgb(212, 208, 180)',
        }) : null;

    if ((nombre != "") && (mail.indexOf("@") > -1 && mail.indexOf(".") > -1) && (mensaje != "")) {
        Swal.fire({
            icon: 'success',
            title: 'Muchas gracias por tu consulta, te estaremos respondiendo a la brevedad.',
            background:'white', 
          })
    }

}