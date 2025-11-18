// ==========================================
// 1. DOCUMENT READY
// ==========================================
// jQuery se asegura de que el DOM esté completamente cargado
// antes de permitir que manipulemos elementos.

$(() => { // Antes se usaba $(document).ready(function() { ... }) pero está obsoleto

    console.log("jQuery está listo.");

    // ==========================================
    // 2. SELECTORES EN JQUERY
    // ==========================================
    // jQuery usa una sintaxis muy parecida a CSS:
    // $('#id'), $('.clase'), $('div'), $('p.intro'), etc.

    // Ejemplo básico: cambiar color del h1
    $('h1').css('color', 'darkblue');

    // ==========================================
    // 3. EVENTOS
    // ==========================================

    // Mostrar un mensaje en pantalla usando jQuery
    $('#btnMostrar').on("click", () => {
        alert("¡Hola! Esto es un evento click con jQuery.");
    });

    // ==========================================
    // 4. OBTENER Y MODIFICAR CONTENIDO
    // ==========================================

    $('#btnCambiarTexto').on("click", () => {
        // .text() -> obtiene o cambia el texto interno
        const textoActual = $('#intro').text();
        console.log("Texto anterior:", textoActual);

        $('#intro').text("El texto ha sido cambiado mediante jQuery.");
    });

    // ==========================================
    // 5. OBTENER Y CAMBIAR ATRIBUTOS
    // ==========================================

    $('#btnCambiarAttr').on("click", () => {
        // Cambiar atributo src de la imagen
        $('#foto').attr('src', 'https://picsum.photos/200?random=' + Math.floor(Math.random()*1000));

        // Obtener un atributo
        const altText = $('#foto').attr('alt');
        console.log("Texto ALT actual:", altText);
    });

    // ==========================================
    // 6. AÑADIR ELEMENTOS AL DOM
    // ==========================================

    $('#btnAdd').on("click", () => {
        $('#lista').append('<li>Nuevo elemento añadido con jQuery</li>');
    });

    // ==========================================
    // 7. ELIMINAR ELEMENTOS DEL DOM
    // ==========================================

    $('#btnRemove').on("click", () => {
        // Elimina el último <li> de la lista
        $('#lista li:last-child').remove();
    });

    // ==========================================
    // 8. MANIPULAR CLASES CSS
    // ==========================================

    $('#btnClase').on("click", () => {
        // toggleClass -> si la tiene, la quita. Si no, la añade.
        $('#intro').toggleClass('destacado');
    });

}); // fin del document.ready
