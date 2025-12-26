class TC09Page {
  constructor(I) {
    this.I = I;

    // Elementos
    this.iconoUbicacion = 'img[alt="icono de ubicacion"]'; // icono del selector
    this.listaRegiones = '.dropdown-menu a'; // todos los estados/regiones disponibles
    this.regionSeleccionada = 'a[data-nombreboton]'; // enlace que muestra la región actual

  }

  // Abrir selector de región
  async abrirSelector() {
    const I = this.I;
    I.waitForElement(this.iconoUbicacion, 10);
    I.click(this.iconoUbicacion);
  }

  // Seleccionar una región
  async seleccionarRegion(nombreRegion) {
    const I = this.I;
    I.waitForElement(this.listaRegiones, 10);
    I.click(`a[data-nombreboton="${nombreRegion}"]`);
    I.wait(2); // esperar que se actualice la región
  }

  // Validar que la región se actualizó
  async verificarRegionActual(nombreRegion) {
    const I = this.I;
    I.waitForElement(this.regionSeleccionada, 10);
    I.see(nombreRegion, this.regionSeleccionada);
  }
}

module.exports = TC09Page;
