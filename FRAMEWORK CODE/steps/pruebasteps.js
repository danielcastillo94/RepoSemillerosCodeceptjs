const { I } = inject();

Given("Estoy en telcel", () => {
    I.amOnPage("/");
    I.wait(2);
});

When(/^Buscar "([^"]*)"$/, (producto) => {
    global.productoBuscado = producto;
    I.fillField("#buscador-menu-input", producto);
    I.pressKey("Enter");
    I.wait(2);
});

Then("ver los resultados en la busqueda", async () => {
    const xpath = `//span[contains(text(),"${global.productoBuscado}")]`;
    I.waitForElement(xpath, 5);
});

When("Presiono el boton de paga tu factura", () => {
    I.waitForElement('//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[2]/span[2]/div/div/div[3]', 5);
    I.click('//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[2]/span[2]/div/div/div[3]');
});

When("Escribo el número de teléfono", () => {
    I.waitForElement('//*[@id="root"]/div/div/form/div[1]/div[1]/div/div/input', 5);
    I.click('//*[@id="root"]/div/div/form/div[1]/div[1]/div/div/input');
    I.type('5522502546');
});

When("Escribo el número adicional", () => {
    I.waitForElement('//*[@id="root"]/div/div/form/div[1]/div[2]/div/div/input', 5);
    I.click('//*[@id="root"]/div/div/form/div[1]/div[2]/div/div/input');
    I.type('5522502547');
});

When("Presiono el botón de continuar si está habilitado", async () => {
    const isDisabled = await I.grabAttributeFrom('//*[@id="root"]/div/div/form/div[2]/div/button', 'disabled');

    if (!isDisabled) {
        I.click('//*[@id="root"]/div/div/form/div[2]/div/button');
        console.log("Botón habilitado. Se presionó correctamente.");
    } else {
        console.log("Botón deshabilitado. No se pudo presionar.");
    }
});

Then("verifico si el botón de continuar estaba habilitado", async () => {
    const isDisabled = await I.grabAttributeFrom('//*[@id="root"]/div/div/form/div[2]/div/button', 'disabled');

    if (isDisabled) {
        console.log("No se puede continuar. El número ingresado no es válido.");
    } else {
        console.log("Se puede continuar. El número es válido.");
    }
});


