/* Validaciones de rutina*/
function bloquear_letras(event) {
    return validar_numero(event);
}
function bloquear_numeros(event) {
    return validarletra(event);
}
$("#codigo").keypress(bloquear_letras);
$("#precio").keypress(bloquear_letras);
$("#existencia").keypress(bloquear_letras);
$("#nombre").keypress(bloquear_numeros);

$("#codigo").on('paste', function (e) {
    e.preventDefault();
    alert("Esta acción está prohibida por la República Bolivariana de Venezuela");
})
$("#precio").on('paste', function (e) {
    e.preventDefault();
    alert("Esta acción está prohibida por la República Bolivariana de Venezuela");
})
$("#existencia").on('paste', function (e) {
    e.preventDefault();
    alert("Esta acción está prohibida por la República Bolivariana de Venezuela");
})
$("#nombre").on('paste', function (e) {
    e.preventDefault();
    alert("Esta acción está prohibida por la República Bolivariana de Venezuela");
})
/* Validaciones de rutina*/

var productos = [];

function Producto(codigo, nombre, precio, existencia,categoria) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.existencia = existencia;
    this.categoria=categoria;

}

$("#oculto").hide();
$('#oculto').click(function () {
    $("div.mensaje2").html("");
    $("#formu").show();
    $("#oculto").hide();
    $("#detalles").hide();
})

function validar(titulo) {
    titulo.css("background", "red");
    $("#error-" + titulo.attr("id")).addClass("error");
    $("div.mensaje").html("No se pueden dejar espacios en blanco");
    titulo.blur(function () {
        $("#error-" + titulo.attr("id")).removeClass("error");
        titulo.css("background", "white");
        $("div.mensaje").html("");
    })
}

$('#enviar').click(function () {
    let codigo = $('#codigo');
    let nombre = $("#nombre");
    let precio = $("#precio");
    let categoria = $("#categoria");
    let existencia = $('#existencia');
    if (codigo.val() == "") {
        validar(codigo);
    }
    else {
        if (nombre.val() == "") {
            validar(nombre);
        }
        else {
            if (existencia.val() == "") {
                validar(existencia);
            }
            else {
                if (precio.val() == "") {
                    validar(precio);
                }
                else {
                    if ($('#categoria').val().trim() === '') {
                        validar(categoria);
                    }
                    else {

                        let iva = 0
                        if ($('#check').prop("checked")) {
                            iva = 0;
                        }
                        else {
                            iva = precio.val() * 0.16
                        }
                        let producto = new Producto(codigo.val(), nombre.val(), parseInt(precio.val()),
                         existencia.val(),categoria.val());
                        if (productos.length == 0) {
                            alert('primer Registro');
                            productos.push(producto);
                            $("#formu").trigger('reset');
                            $("#formu").hide();
                            $("div.mensaje2").html("Registro Exitoso");
                            $("#oculto").show();
                            $("#detalles").append("<div> <p> Codigo:" + productos[0].codigo + "</p> " +
                                "<p> Nombre:" + productos[0].nombre + "</p> " +
                                "<p> Precio:" + (productos[0].precio + iva) + "</p> " +
                                "<p> Existencia:" + productos[0].existencia +
                                "<p> Categoría:" + productos[0].categoria + "</p></div>")
                        }
                        else {
                            let i = 0;
                            let a = 0;
                            do {
                                if (codigo.val() == productos[i].codigo) {
                                    a += 1
                                }
                                else {
                                    i++
                                }
                            } while (a == 0 && i < productos.length);

                            if (a == 1) {
                                alert('ya se encuentra')
                            }
                            else {
                                productos.push(producto);
                                $("#formu").trigger('reset');
                                $("#formu").hide();
                                $("div.mensaje2").html("Registro Exitoso");
                                $("#oculto").show();
                                $("#detalles").show();
                                $("#detalles").append("<div> <p> Codigo:" + productos[i].codigo + "</p> " +
                                    "<p> Nombre:" + productos[i].nombre + "</p> " +
                                    "<p> Precio:" + (productos[i].precio + iva) + "</p> " +
                                    "<p> Existencia:" + productos[i].existencia +
                                    "<p> Categoría:" + productos[i].categoria + "</p></div>")
                            }
                        }
                    }
                }
            }
        }
    }
})