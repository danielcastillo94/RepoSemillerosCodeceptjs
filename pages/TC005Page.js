class TC005Page {
  constructor() {
    // Selector para los elementos de la página de detalle del equipo
    this.imagenes = 'div[class="card-device--img_cont"]'; // Selector de las imágenes
    this.precio = 'p[class="card-products--acquire_price"]'; // Selector del precio
    this.especificaciones = '//i[@id="tab-characteristic"]'; // Selector de especificaciones
  
}

seleccionequipo(){
        I.click(this.elementos.iphone);
        I.waitForURL(this.urls.equipo);
    }

  // Método para verificar que los elementos están visibles
  async verificarElementosVisibles() {
    await I.seeElement(this.imagenes);
    await I.seeElement(this.precio);
    await I.seeElement(this.especificaciones);
  }
}

module.exports = new TC005Page();