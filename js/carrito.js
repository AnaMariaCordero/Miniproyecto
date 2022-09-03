let vectorDondeSeGuardaElPedido = [];

function IniciarProductosAutomaticamente(){
    guardarDatosDelCarrito('00214','Helado Sunday','22.00','0','images/Sunday.jpg');
    guardarDatosDelCarrito('85416','Rollitos de fruta','15.00','0','images/rollitos.jfif');
    guardarDatosDelCarrito('532015','Helado waffle melocoton','23.00','0','images/Banana.png');
    guardarDatosDelCarrito('210341','Helado de hielo','5.00','0','images/helado de hielo.jfif');
    guardarDatosDelCarrito('965142','Helado waffle','25.00','0','images/helado waffle.jpg');
    guardarDatosDelCarrito('5142031','Cono Mini','7.00','0','images/mini.webp');
    guardarDatosDelCarrito('001362','Choco cono','9.00','0','images/Choco cono.jpg');
    guardarDatosDelCarrito('7631010','Helado de chocolate','12.00','0','images/helado de chocolate.jpg');
    guardarDatosDelCarrito('900740','Helado con mani','10.00','0','images/helado con mani.webp');
    guardarDatosDelCarrito('633140','Helado arcoiris', '6.00', '0','images/Helado arcoiris.jpg');
    guardarDatosDelCarrito('003214','Helado fresa','10.00','0','images/helado fresa.jfif');
    guardarDatosDelCarrito('1130241','Helado con granola','15.00','0','images/Helado con granola.jpg');
    guardarDatosDelCarrito('5541263','Helado de yogurt','15.00','0','images/helado-yogurt.jpg');
    renderizarCarrito();
}

function finalizarPedido(){
    alert('El pedido se ha Enviado y Finalizado');
}

function guardarDatosDelCarrito(codigo, descripcion, precio, cantidad, imagen){
    vectorDondeSeGuardaElPedido.push(
        {
            codigo: codigo,descripcion: descripcion,precio: precio,cantidad: cantidad,imagen: imagen
        }
    );
}

var totalDelPedido=0;
function renderizarCarrito(){
    totalDelPedido=0;
    let salidaFinalDelCarrito = '';
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        salidaFinalDelCarrito +=
        `
        <tr>
        <td>${recorridoDelPedido.codigo}</td>
        <td>${recorridoDelPedido.descripcion}<img src="${recorridoDelPedido.imagen}" width="70"></td>
        <td><button onclick="quitarProductoDelPedido('${recorridoDelPedido.codigo}');"><i class="fa fa-trash-o" style="font-size:24px"></i></button> <button onclick="sumarCantidad('${recorridoDelPedido.codigo}');">+</button> <button onclick="restarCantidad('${recorridoDelPedido.codigo}');">-</button> ${recorridoDelPedido.cantidad}</td>
        <td>${recorridoDelPedido.precio}</td>
        <td>${recorridoDelPedido.cantidad*recorridoDelPedido.precio}</td>
        </tr>
        `
        totalDelPedido+=recorridoDelPedido.cantidad*recorridoDelPedido.precio;
    }
    document.getElementById('detalleDelPedido').innerHTML = salidaFinalDelCarrito;
    document.getElementById('total').innerHTML = totalDelPedido;
}

function quitarProductoDelPedido(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

var vectorUtilizadoTemporalmente=[]

function restarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente-1;
            if(elCarritoTieneLaCantidadSiguiente>1){
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                    }
                );
            }
            if(elCarritoTieneLaCantidadSiguiente<=1){
                alert("No se puede restar la cantidad por que tiene solo uno, utilize la opcion elminar.");
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                    }
                );
            }
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

function sumarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente+1;
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                }
            );
        
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}