class TC008Page {
  constructor(I) {
    this.I = I;

    // Elementos del buscador y resultados
    this.buscador = '#buscador-menu-input';
    this.resultadoCentroAyuda = 'p.tc_card-basic-img--title'; // primer resultado real

    // Categorias reales
    this.categorias = 'a[data-toggle="collapse"][data-parent="#accordion"]';

    // Enlaces informativos (opciones desplegables)
    this.enlacesInformativos = this.categorias; // en tu caso son los mismos <a> para expandir
  }

  /**
   * Buscar y abrir el Centro de ayuda
   */
  async abrirCentroAyuda() {
    const I = this.I;
    I.fillField(this.buscador, 'Centro de ayuda Telcel');
    I.pressKey('Enter');

    I.waitForElement(this.resultadoCentroAyuda, 30); // más estable
    I.click(this.resultadoCentroAyuda);
    I.wait(2); // espera a que cargue el módulo
  }

  /**
   * Verificar que las categorias estén visibles
   */
  async verificarCategoriasVisibles() {
    const I = this.I;
    I.waitForElement(this.categorias, 10);
    I.seeElement(this.categorias);
  }

  /**
   * Verificar enlaces informativos y su contenido desplegable
   */
  async verificarEnlacesVisibles() {
    const I = this.I;
    I.waitForElement(this.enlacesInformativos, 10);
    I.seeElement(this.enlacesInformativos);

    // Expandir primer contenido para validar desplegable
    I.click(this.enlacesInformativos);
    I.wait(1);
  }
}

// Exportar la clase, no la instancia
module.exports = TC008Page;
