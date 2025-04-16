<<<<<<< HEAD
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
=======
const PruebaPage = require("../pages/pruebaPage");
const { I } = inject();

Given("Estoy en telcel", () => {
PruebaPage.home();
});

When(/^Buscar "([^"]*)"$/, (producto) => {
PruebaPage.searchProduct(producto);
});

Then(/^ver los resultados de la busqueda "([^"]*)"$/, (producto) => {
  PruebaPage.waitForResults(producto);
});

Given("Mockeo la api de rickandmortyapi", () => {
  I.mockRoute("https://rickandmortyapi.com/page-data/sq/d/2138676555.json", (route) => {
    return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
        "data": {
            "site": {
                "siteMetadata": {
                    "title": "HOLA",
                    "shortTitle": "The Rick and Morty API",
                    "description": "The Rick and Morty API is a REST and GraphQL API based on the television show Rick and Morty",
                    "siteUrl": "https://rickandmortyapi.com",
                    "image": "/images/site.jpeg",
                    "userTwitter": "rickandmortyapi",
                    "nav": [
                        {
                            "title": "Docs",
                            "path": "/documentation"
                        },
                        {
                            "title": "About",
                            "path": "/about"
                        }
                    ],
                    "github": {
                        "site": "https://github.com/afuh/rick-and-morty-api-site",
                        "api": "https://github.com/afuh/rick-and-morty-api"
                    },
                    "author": {
                        "name": "Axel Fuhrmann",
                        "site": "https://github.com/afuh"
                    },
                    "status": {
                        "site": "https://status.rickandmortyapi.com"
                    }
                }
            }
        }
    }),
    });
  });
});

Given("Me encuentro en la pagina de rickandmortyapi", () => {
  I.amOnPage("https://rickandmortyapi.com/");
});


Then("veo el titulo de la pagina", () => {
    I.waitForElement('[class="hero__Title-sc-1h2eool-1 jiKqlM"]', 5)
    I.wait(3)
  });


  When("voy a factura", () => {
    I.wait(2)
    I.click('[alt="icon pago de factura"]')
  });
  
  
  Then("ingreso mi celular", () => {
    I.switchTo('.iframePackagesRoaming-SIN_LIMITE')
    I.waitForElement('[name="mdn"]',10)
      I.fillField('[name="mdn"]', '123456789')
      I.wait(5)
    });
  
  
>>>>>>> e2c704f3260179865aa3554f0a3c9e0d2bca3570
