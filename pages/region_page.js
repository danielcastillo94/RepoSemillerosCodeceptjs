const { I } = inject();

class region_page {
  fields = {
    estado: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
    Guerrero:'//*[@id="lista-subopciones-menu"]/ul/li[2]/ul/div[2]/li[13]/a',
  };

  login() {
    //Pagina de inicio de Telcel
    I.amOnPage("https://www.telcel.com/");

  }


  SeleccionarRegion () {
    //selecciona el estado 
    I.click(this.fields.estado);
    I.click(this.fields.Guerrero);
    

    
    
  }

  Cambioderegion() {
    //texto o valores actualizados correctamente 
    I.waitForElement('//*[@id="lista-subopciones-menu"]/ul/li[2]/a', 10);
    I.seeElement('//*[@id="lista-subopciones-menu"]/ul/li[2]/a');
  }
}

module.exports = new region_page ();