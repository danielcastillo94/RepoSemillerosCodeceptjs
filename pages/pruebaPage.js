const { I } = inject();

class PruebaPage{
    constructor() {
        this.fields = {
            searchBar: '#buscador-menu-input',
        }
    }

home(){
    I.amOnPage("/");
    I.wait(2);
}

searchProduct(producto){
    I.fillField(this.fields.searchBar, producto);
    I.pressKey("Enter");
    I.wait(2);
}

waitForResults(producto){
    I.waitForElement(`//span[text()="${producto}"]`, 5);
}


}

module.exports = new PruebaPage();