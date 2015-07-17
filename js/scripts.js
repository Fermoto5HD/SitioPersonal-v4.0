    // Calcula la altura del bloque del resumen
    var seccion1_inicio = $(".seccion#inicio-resumen").outerHeight();

    // obtenemos el height + padding de la sección 2
    // y le sumamos el de la sección 1
    var seccion2_inicio = seccion1_inicio + 350;
    var seccion3_inicio = seccion2_inicio + 350;
    //var altoSeccion2 = $("#seccion2").outerHeight() + altoSeccion1;
    console.log(height + " | Sec 1: " + seccion1_inicio + " | Sec 2: " + seccion2_inicio + " | Sec 3: " + seccion3_inicio);


// Levantar cover
    $(document).ready(function() {
        //$(".cuerpo-landing").addClass("proximamente").fadeIn();
        console.log("¡Bienvenido a mi sitio! Acá podrás ver todas las acciónes registradas durante la navegación en el sitio.");
    });

//
function Inicio(){
    console.log("Cambió el contenido a la página inicial.");
    $(".contenido#home").show();
    $(".contenido#contacto").hide();
    HaciaArriba();
}
function Contacto(){
    console.log("Cambió el contenido a la página de contacto.");
    $(".contenido#home").hide();
    $(".contenido#contacto").show();
    HaciaArriba();
}
function HaciaArriba(){
    console.log("Desplazando el sitio hacia arriba.");
}


    // Correrá este código cada vez que el usuario use el scroll
    $(window).scroll(function(event) {
        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();

        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // par cambiar su color de fondo
        if (height < 350) {
            $(".seccion#inicio-resumen .cuerpo-item").css("opacity", "0");
            $(".seccion#inicio-portfolio .cuerpo-item").css("opacity", "0");
        }
        else if (height > 350 && height < seccion1_inicio) {
            $(".seccion#inicio-resumen .cuerpo-item").css("opacity", "1");
            $(".seccion#inicio-portfolio .cuerpo-item").css("opacity", "0.5");
            $("#nota-desplazar").remove();
        }
        else if (height > seccion1_inicio && height < seccion2_inicio) {
            $(".seccion#inicio-resumen .cuerpo-item").css("opacity", "0.5");
            $(".seccion#inicio-portfolio .cuerpo-item").css("opacity", "1");
            $("#nota-desplazar").remove();
            console.log("corre 3");
        } 
        //else if (height > altoSeccion1 && height < altoSeccion2) {
            //header.addClass("verde").removeClass("plata zapallo");
        //} else if (height > altoSeccion2) {
            //header.addClass("zapallo").removeClass("verde");
        //}
        else {
            $(".seccion#inicio-resumen .cuerpo-item").css("opacity", "0.5");
            $(".seccion#inicio-portfolio .cuerpo-item").css("opacity", "0.5");
        }
   });