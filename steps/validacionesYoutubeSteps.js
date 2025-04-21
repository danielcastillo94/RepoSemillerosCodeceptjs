const { I } = inject();
const busquedaVideo = require('../pages/busquedaVideo.js');
const verificarResultado = require('../pages/verificarResultado.js')
Given("Estoy en la página principal de YouTube", () => {
    //YoutubeHomePage.home
    I.amOnPage("/"),
    I.wait(2);
});

When("Escribo Falling In Reverse y presiono Enter en la barra de búsqueda", () => {
    busquedaVideo.fillBar();
});

Then("Verifico que al menos un resultado contenga Falling In Reverse", () => {
    verificarResultado.verificarVideoConTexto('Falling In Reverse');
});

Then("Verifico que el primer resultado muestre una miniatura visible", () =>{
    verificarResultado.verificarMiniatura();
});

Then("Verifico que el primer resultado muestre un título visible", () => {
    verificarResultado.verificarTitulo();
});

Then("Verifico que el primer resultado contenga una duración en formato mm:ss", () => {
    verificarResultado.verificarDuracion();
    pause();
});