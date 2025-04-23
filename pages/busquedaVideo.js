const { I } = inject();

class busquedaVideo {
    constructor() {
        this.fields = {
            searchBar: '//input[@name="search_query"]'
        };
    }

    fillBar() {
        I.waitForElement(this.fields.searchBar, 5);
        I.fillField(this.fields.searchBar, 'Falling In Reverse');
        I.pressKey('Enter');
    }
}

module.exports = new busquedaVideo();