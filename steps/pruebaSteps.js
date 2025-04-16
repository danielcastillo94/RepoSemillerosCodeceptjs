const { I } = inject();

Given("Estoy en telcel", () => {
  I.amOnPage("/");
  I.wait(2);
});

When(/^Buscar "([^"]*)"$/, (producto) => {
  I.fillField("#buscador-menu-input", producto);
  I.pressKey("Enter");
  I.wait(2);
});

Then("ver los resultados de la busqueda", () => {
  I.waitForElement('//span[text()="iphone"]', 5);
});
