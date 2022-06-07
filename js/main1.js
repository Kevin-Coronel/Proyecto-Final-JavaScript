const elementos = document.querySelectorAll(".btn");
elementos.forEach(agregarCarrito => {
    agregarCarrito.addEventListener("click", agregarCarritoClick);
});

const carritoContainer = document.querySelector(".carritoContainter");

function agregarCarritoClick(event) {
    const button = event.target;
    const tarjeta = button.closest(".divTarj");

    const tarjTit = tarjeta.querySelector(".liTit").textContent;
    const tarjPrec = tarjeta.querySelector(".precio").textContent;
    const tarjImg = tarjeta.querySelector(".carrImg").src;

    agregarItemCarrito(tarjTit, tarjPrec, tarjImg);
}

function agregarItemCarrito(tarjTit, tarjPrec, tarjImg) {

    const titulo = carritoContainer.getElementsByClassName("titulo");
    for (let i = 0; i < titulo.length; i++){
        if (titulo[i].innerText === tarjTit) {
            let cantidadElementos= titulo[i].parentElement.parentElement.parentElement.querySelector(".cantidadItems");
            cantidadElementos.value++;
            totalCarrito()
            return;
        };    
    }

    const filaCarrito = document.createElement("div");
    const itemsCarrito = `
    <div class="row contenidoCarrito">
        <div class="col-6">
            <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img style="max-width:100px; margin-right: 20px;" src=${tarjImg}>
                <p class="titulo prodTit ml-3 mb-0" style="margin-right: 240px;">${tarjTit}</p>
            </div>
        </div>
        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="mb-0  prodTit precioItems">${tarjPrec}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="cantidadItems" style="max-width: 45px; margin-left: 10px;" type="number"
                    value="1">
                <button class="btn btn-danger delete" type="button">X</button>
            </div>
        </div>
    </div>`;
    filaCarrito.innerHTML = itemsCarrito;
    carritoContainer.append(filaCarrito);

    filaCarrito.querySelector(".delete").addEventListener("click", eliminarItemCarrito);
    
    totalCarrito();

    filaCarrito.querySelector(".cantidadItems").addEventListener("change", variarCantidad);
}

function totalCarrito(){
    let total = 0;
    let impresionTotal = document.querySelector(".impresionTotal");
    const itemsSelecCarrito = document.querySelectorAll (".contenidoCarrito");

    itemsSelecCarrito.forEach(contenidoCarrito => {
        const precioItems = contenidoCarrito.querySelector(".precioItems");
        const precioItemsText = Number(precioItems.textContent.replace("$",""));
        
        const cantidadItems = contenidoCarrito.querySelector(".cantidadItems");
        const valorItems = Number(cantidadItems.value);
        console.log(valorItems)

        total = total + precioItemsText * valorItems;
    });

    impresionTotal.innerHTML = `$${total.toFixed(3)}`;

}

function eliminarItemCarrito (event){
    const botonClick = event.target;
    botonClick.closest(".contenidoCarrito").remove();
    totalCarrito();
}

function variarCantidad(event){
    const cambio = event.target;
    cambio.value <= 0 ? (cambio.value = 1) : null;
    totalCarrito();
}



/*-------------------------FORMULARIO-------------------------*/

let submitD = document.getElementById("submitD");
submitD.addEventListener("click", comprar);

function comprar() {
    let nombreCompra = document.getElementById("nombreCompra").value;
    let mailCompra = document.getElementById("mailCompra").value;
    let direccionCompra = document.getElementById("direccion").value;
    
    direccionCompra == "" ? Swal.fire({
        icon: 'error',
        title: 'Por favor complete el campo con la dirección que desea recibir su pedido.',
        background: 'rgb(212, 208, 180)',
    }) : null;

    (mailCompra.indexOf("@") > -1 && mailCompra.indexOf(".") > -1) ? true : Swal.fire({
        icon: 'error',
        title: 'Por favor complete el campo con su direccion de correo electrónico.',
        background: 'rgb(212, 208, 180)',
    });

    nombreCompra == "" ? Swal.fire({
        icon: 'error',
        title: 'Por favor complete el campo con nombre y apellido.',
        background: 'rgb(212, 208, 180)',
    }) : null;

    if ((nombreCompra != "") && (mailCompra.indexOf("@") > -1 && mailCompra.indexOf(".") > -1) && (direccionCompra != "")) {
        Swal.fire({
            icon: 'success',
            title: 'Tu compra ha sido realizada. Muchas gracias',
            background:'white', 
          })
    }
}
