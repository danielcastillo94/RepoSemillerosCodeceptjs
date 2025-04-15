const { I } = inject();

class TelcelHomePage {
    home() {
        I.amOnPage("/");
        I.wait(2);
    }
}

module.exports = new TelcelHomePage();
