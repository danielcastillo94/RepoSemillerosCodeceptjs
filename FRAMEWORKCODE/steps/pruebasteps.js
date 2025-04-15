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
    I.waitForElement('(//a[@class="center-block"])[2]', 5);
    I.click('(//a[@class="center-block"])[2]');
    I.wait(3); 
});


When("Escribo el número de teléfono", () => {
    I.waitForEnabled('//input[@name="mdn"]', 5);
    I.click('//input[@name="mdn"]')
    I.fillField('//input[@name="mdn"]', '5522502546');
});

When("Escribo el número adicional", () => {
    I.click('//input[@name="confirmMdn"]')
    I.fillField('//input[@name="confirmMdn"]', '5522502546');
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

When("Presiono el boton para entrar a la tienda en linea", async () => {
    I.click("//img[contains(@title, 'Tienda en Línea')]");
    I.wait(2)
});

When("Presiono el boton de telefonos", async () => {
    I.click('(//img[@class="responsive desktop ng-star-inserted"])[1]')
    I.wait(2)
});

When("presiono el boton de Lo quiero para el primer resultado", async () => {
    I.click('(//button[@class="btn btn-primary btn-block btn-lo-quiero"])[1]')
    I.wait(2)
});

When("presiono el boton de agregar al carrito", async () => {
    I.click('//button[@class="btn btn-secondary addtominicart"]')
    I.wait(2)
});

Then("presiono el boton de ir al carrito para ver si se agrego", async () => {
    I.click('//a[@class="btn btn-primary cart"]')
    I.wait(2)
});

When("Presiono el boton comparar del segundo dispositivo", async => {
    I.click('(//a[(@class="btn btn--link")])[2]')
    I.wait(2)
});

When("Selecciono una marca", async => {
    I.click('(//span[@class="ng-arrow-wrapper"])[3]')
    I.click('(//span[@class="ng-option-label ng-star-inserted"])[6]')
    I.wait(2)
});

Then("Selecciono un modelo", async => {
    I.click('(//span[@class="ng-arrow-wrapper"])[4]')
    I.click('(//span[@class="ng-option-label ng-star-inserted"])[85]')
});


