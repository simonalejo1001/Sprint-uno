let botonCantidad = document.getElementById('btnCompra');
botonCantidad.addEventListener('click', calculoValor);


function calculoValor() {
    let cantIngreso = Number(document.querySelector('#cantComp').value);
    const valorComputador = 820000;
    let total = valorComputador * cantIngreso;

    console.log(total)

    document.getElementById('resultado').value = total;

    let totalDescuento = 0;
    let descuento = 0;

    const descuento_15 = 0.15;
    const descuento_25 = 0.25;
    const descuento_35 = 0.35;


    if (total >= 1640000 && total <= 3280000) {

        descuento = total * descuento_15;
        document.getElementById('valorDesc').value = descuento;

        totalDescuento = total - descuento;
        console.log(totalDescuento)

        document.getElementById('totalDesc').value = totalDescuento;
        document.getElementById('porcentaje').value = "15%";

    } else {
        if (total > 3280000 && total <= 6560000) {


            descuento = total * descuento_25;
            document.getElementById('valorDesc').value = descuento;

            totalDescuento = total - (total * descuento_25);
            console.log(totalDescuento)

            document.getElementById('totalDesc').value = totalDescuento;
            document.getElementById('porcentaje').value = "25%";

        } else {
            if (total > 6560000 && total <= 9840000) {

                descuento = total * descuento_35;
                document.getElementById('valorDesc').value = descuento;


                totalDescuento = total - (total * descuento_35);
                console.log(totalDescuento)

                document.getElementById('totalDesc').value = totalDescuento;
                document.getElementById('porcentaje').value = "35%";

            } else {
                if (total >= 9840000) {
                    alert('No hay descuento para ti')
                }

            }
        }
    }
}

let form = document.getElementById('formCant');