const {I} = inject();

class PoliticasYCodigosPage {
  constructor() {
    this.fields = {
      seleccionarEstado:
        '//span[@class="telcel-controles-titulo-select-simulado" and text()="Selecciona tu estado"]',
      seleccionarModalidad:
        '//span[@class="telcel-controles-titulo-select-simulado" and text()="Selecciona tu modalidad"]',
      buscarButton: "#telcel-boton-buscar",
      divResultados: "//div[@class='telcel-soporte-telefono-regiones']",
    };
  }

  seleccionarAcceso(acceso) {
    const selector = `//p[@class="telcel-accesos-rapidos--tarjeta-titulo" and text()="${acceso}"]`;
    I.scrollTo(selector);
    I.waitForVisible(selector, 5);
    I.click(selector);
    I.wait(2);
    console.log(`Acceso rápido seleccionado: ${acceso}`);
  }

  seleccionarOpcion(opcion, tipo) {
    const selector = `a[data-etiqueta="${opcion}"]`;
    let field = ""
    if (tipo === "state") { field = this.fields.seleccionarEstado; }
    else if (tipo === "modality") { field = this.fields.seleccionarModalidad; }
    else { throw new Error("Tipo no válido"); }

    I.waitForVisible(field, 10);
    I.click(field);
    I.wait(2);

    I.scrollTo(selector);
    I.waitForVisible(selector, 10);
    I.click(selector);

    I.wait(2);
    }

    clickBuscar() {
        I.waitForVisible(this.fields.buscarButton, 10);
        I.click(this.fields.buscarButton);
        I.wait(2);
        console.log("Realizando busqueda");
    }

    waitForResults() {
        I.waitForElement(this.fields.divResultados, 10);
        console.log("Resultados de búsqueda visibles");
    }
}

module.exports = new PoliticasYCodigosPage();