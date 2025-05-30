const {I} = inject();

Given('abro la página de demoQA de carga de archivos', async () => {
    I.amOnPage('/upload-download');
});
Then("selecciono un archivo para subir", async () => {
    I.waitForElement('#uploadFile', 1000);
    I.attachFile('#uploadFile', './input/IMG_4474.PNG');
});
Then("el archivo debe mostrarse como cargado correctamente", async () => {
    I.waitForText("C:\\fakepath\\IMG_4474.PNG", 10);
    I.say("Archivo cargado correctamente");
}); 

Then("hago clic en el botón de descarga", async () => {
    I.waitForElement("#downloadButton", 10);
    I.handleDownloads();
    I.click("#downloadButton");

});

Then("el archivo debe descargarse correctamente", async () => {
    I.amInPath("output/downloads");
    I.waitForFile("sampleFile.jpeg", 10);
});