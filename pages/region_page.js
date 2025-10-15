const { I } = inject();

class region_page {
  fields = {
    estado: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
    Guerrero:'[data-nombreboton="Guerrero"]',
  };

  login() {
    //Pagina de inicio de Telcel
    I.amOnPage("https://www.telcel.com/");

  }


  SeleccionarRegion () {
    //selecciona el estado de Guerrero
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
    

    
    
  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement('[data-nombreboton="Guerrero"]', 10);
    I.seeElement('[class="estado-Gluo text-option"]' );
  }
}

module.exports = new region_page ();