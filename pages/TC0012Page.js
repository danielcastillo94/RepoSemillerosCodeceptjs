const { I } = inject();

module.exports = {

  navegarAlEnlaceTerminos() {
    // Abrimos la página principal con tiempo de espera alto
    I.amOnPage("https://www.telcel.com/", { waitUntil: "domcontentloaded", timeout: 120000 });

    // Scroll directo al footer (aproximadamente)
    I.scrollTo('#telcel-footer-copyright');

    // Esperamos que el enlace esté presente en el DOM y visible
    I.waitForVisible('a[data-nombreboton="Términos y condiciones"]', 30);

    // Click seguro usando JavaScript (evita timeout si el elemento está cubierto)
    I.executeScript(() => {
      document.querySelector('a[data-nombreboton="Términos y condiciones"]').click();
    });

    // Esperamos que cargue el título principal de la nueva página
    I.waitForElement('h1', 30);

    // Esperamos que el contenido principal esté visible

    I.waitForVisible("h1", 60); // espera hasta que el título principal sea visible
  }

};
