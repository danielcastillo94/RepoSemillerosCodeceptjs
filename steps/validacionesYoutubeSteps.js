const { I } = inject();
const busquedaVideo = require('../pages/busquedaVideo.js');

Given("Estoy en la página principal de YouTube", () => {
    //YoutubeHomePage.home
    I.amOnPage("/"),
    I.wait(2);
});

When("Escribo Falling In Reverse y presiono Enter en la barra de búsqueda", () => {
    busquedaVideo.fillBar();
    pause();
});

Then("Verifico que al menos un resultado contenga Falling In Reverse", () => {
    print("Hola mundo")
});

// Then("Verifico que el primer resultado muestre una miniatura visible", () =>{

// });

// Then("Verifico que el primer resultado muestre un título visible", () => {

// });

// Then("Verifico que el primer resultado contenga una duración en formato mm:ss", () => {

// });