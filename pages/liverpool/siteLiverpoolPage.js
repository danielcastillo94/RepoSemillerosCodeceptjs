const { I } = inject();

class Liverpool {
  urls = {
    zapatillas: "https://www.liverpool.com.mx/tienda?s=zapatillas",
    tenis: "https://www.liverpool.com.mx/tienda?s=tenis",
    failedSearch: "https://www.liverpool.com.mx/tienda?s=iphone30",
    manCategoryUrl: "https://www.liverpool.com.mx/tienda/hombre/cat5020003",
    clothingCategoryUrl: "https://www.liverpool.com.mx/tienda/ropa/cat610037",
    filterSortPrice: "sort=sortPrice",
    loginDirectUrl:
      "https://login.liverpool.com.mx/u/login?state=hKFo2SB5S0MyUjBFS1J5ZHhDY0NJZE5VdmJsYjdka1Y2RXNpOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEpUcnhoWThadFBoSEJXQW5TNUNfY216aEg3c0J1TjFao2NpZNkgSjFXOVJPZ1RZaWltbkM5UGl0ZDJKd3Y3RXpqV05VQWo",
  };
  indicators = {
    searchTitle: "//h1[normalize-space()='Tenis']",
    menuButton:
      "//button[@data-testid='blt26617d4f2e17657d-header-button-category']",
    searchInput: "//input[contains(@data-testid, 'header-search-input')]",
    noResultsMessage:
      "//h2[contains(., 'Lo sentimos, no encontramos nada para')]",
    totalArticles: "//p[normalize-space()='18629 artículos']",
    manCategoryButton:
      "(//a[@data-testid='blt26617d4f2e17657d-header-menu-categories-menu-category-item-'])[2]",
    clothingCategoryButton:
      "(//a[@data-testid='blta93ac1ba276ec9cf-filter-level-nav-slot' and text()='Ropa'])[1]",
    sortingButton:
      "(//div[@data-testid='plp-page-dropdown-sorting']//button)[1]",
    lowestPriceOption: "//li[@role='option' and contains(., 'Menor precio')]",
    priceFilterDropdown:
      "//html[1]/body[1]/div[1]/main[1]/section[1]/div[3]/section[1]",
    priceRangeTag: "//span[normalize-space()='$500.0 -$2000.0']",
    minPriceInput:
      "//html[1]/body[1]/div[1]/main[1]/section[1]/div[3]/section[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/input[1]",
    maxPriceInput: "//input[@data-testid='at-text-max-input']",
    applyPriceBtn: "//button[@data-testid='chevron-right-icon-btn']",
    loginBtn:
      "button[class='flex items-center gap-1 disabled:cursor-default transition-colors py-2 px-2 font-semibold text-header-primary bg-transparent hover:bg-header-secondary rounded-lg font-regular gap-2 text-body-sm text-left w-full']",
    createAccountLink: "//a[normalize-space()='Crear cuenta']",
    createAccountHeading: "//h1[normalize-space()='Crear cuenta']",
    emailInput: "//input[@id='email']",
    usernameInput: "//input[@id='username']",
    passwordInput: "//input[@id='password']",
    submitCreateAccountBtn: "//button[normalize-space()='Crear cuenta']",
    loginHeading: "//h1[normalize-space()='Inicia sesión']",
    personalDataHeading:
      "//h2[normalize-space()='Ingresa los siguientes datos']",
    firstNameInput: "//input[@id=':r0:' or contains(@name, 'name')]",
    lastNameInput: "//input[@id=':r1:' or contains(@name, 'firstLastName')]",
    secondLastNameInput:
      "//input[@id=':r2:' or contains(@name, 'secondLastName')]",
    dayDropdown:
      "//html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]",
    dayOption09: "//li[normalize-space()='09']",
    monthDropdown:
      "//html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]",
    monthOptionJunio:
      "//li[normalize-space()='Junio' or contains(text(),'Jun')]",
    yearDropdown:
      "//html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]",
    yearOption2004: "//li[normalize-space()='2004']",
    menuPaperScroll: "//div[contains(@class, 'MuiMenu-paper')]",
    genderMaleRadio: "//input[@value='M']",
    submitRegistrationBtn: "//button[@type='submit']",
    phoneVerificationHeading:
      "//h1[normalize-space()='Verificación de celular']",
    phoneInput: "//input[@id='phone']",
    continuePhoneBtn: "//button[normalize-space()='Continuar']",
    loginSubmitBtn: "//button[normalize-space()='Iniciar sesión']",
    otpHeading: "//h1[normalize-space()='Código de verificación']",
    headerUserMenu:
      "//html[1]/body[1]/div[1]/div[1]/header[1]/div[2]/nav[1]/div[3]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/button[1]/div[1]/div[1]/span[2]",
    myAccountSpan:
      "//span[@class='flex-grow min-w-0 truncate transition-colors duration-300 ease-in-out'][normalize-space()='Mi Cuenta']",
    dataAndPreferencesSpan:
      "//span[@class='flex-grow min-w-0 truncate transition-colors duration-300 ease-in-out'][normalize-space()='Datos y preferencias']",
    personalDataHeading: "//h2[normalize-space()='Datos personales']",
    addressesSpan: "//span[normalize-space()='Direcciones']",
    myAddressesSpan: "//span[normalize-space()='Mis direcciones']",
    brandSearchInput:
      "//input[@data-testid='at-text-input' and @placeholder='Buscar marca']",
    nikeCheckbox: "//input[@value='NIKE']",
    nikeAppliedFilterTag:
      "//button[contains(@class, 'bg-carbon-50')]//span[contains(text(),'NIKE')]",
    adidasCheckbox: "//input[@value='ADIDAS']",
    adidasAppliedFilterTag:
      "//button[contains(@class, 'bg-carbon-50')]//span[contains(text(),'ADIDAS')]",
    nikeAppliedFilterTag:
      "//button[contains(@class, 'bg-carbon-50')]//span[contains(text(),'NIKE')]",
  };

  mainPageValidation() {
    I.amOnPage("/");
  }

  searchZapatillas() {
    I.waitForElement(this.indicators.searchInput, 5);
    I.clearField(this.indicators.searchInput);
    I.fillField(this.indicators.searchInput, "zapatillas");
    I.pressKey("Enter");
  }

  verifyUrlZapatillas() {
    I.waitInUrl(this.urls.zapatillas, 5);
  }

  searchFailed() {
    I.waitForElement(this.indicators.searchInput, 5);
    I.clearField(this.indicators.searchInput);
    I.fillField(this.indicators.searchInput, "iphone30");
    I.pressKey("Enter");
  }

  verifyUrlFailed() {
    I.waitInUrl(this.urls.failedSearch, 5);
    I.waitForElement(this.indicators.noResultsMessage);
  }

  verifySearchResult() {
    I.waitInUrl(this.urls.zapatillas, 5);
    I.waitForElement(this.indicators.totalArticles, 5);
  }

  clickOnCategoriesMenu() {
    I.waitForElement(this.indicators.menuButton, 5);
    I.click(this.indicators.menuButton);
  }

  clickOnManCategory() {
    I.waitForElement(this.indicators.manCategoryButton, 10);
    I.click(this.indicators.manCategoryButton);
  }
  waitUrlManCategory() {
    I.waitInUrl(this.urls.manCategoryUrl, 10);
  }
  clickOnClothingCategory() {
    I.waitInUrl(this.urls.manCategoryUrl, 10);
    I.waitForElement(this.indicators.clothingCategoryButton, 10);
    I.click(this.indicators.clothingCategoryButton);
  }
  waitForClothingPage() {
    I.waitInUrl(this.urls.clothingCategoryUrl, 10);
  }
  scrollToBottom() {
    I.scrollTo("//footer");
  }
  searchTenis() {
    I.waitForElement(this.indicators.searchInput, 5);
    I.clearField(this.indicators.searchInput);
    I.fillField(this.indicators.searchInput, "tenis");
    I.pressKey("Enter");
  }
  verifySearchResultTenis() {
    I.waitInUrl(this.urls.tenis, 10);
  }
  sortByLowestPrice() {
    I.waitForElement(this.indicators.sortingButton, 10);
    I.wait(2);
    I.focus(this.indicators.sortingButton);
    I.wait(2);
    I.pressKey("Enter");
    I.waitForElement(this.indicators.lowestPriceOption, 10);
    I.click(this.indicators.lowestPriceOption);
  }
  verifyFilterSoftPrice() {
    I.waitInUrl(this.urls.filterSortPrice, 10);
  }
  scrollToPriceFilter() {
    I.waitForElement(this.indicators.searchTitle, 10);
    I.waitForElement(this.indicators.priceFilterDropdown, 10);
    I.scrollTo(this.indicators.priceFilterDropdown);
  }

  filterByPriceRange() {
    I.waitForElement(this.indicators.minPriceInput, 10);
    I.fillField(this.indicators.minPriceInput, "500");
    I.fillField(this.indicators.maxPriceInput, "2000");

    I.click(this.indicators.applyPriceBtn);
  }
  clickLoginButton() {
    I.waitForElement(this.indicators.loginBtn, 10);
    I.click(this.indicators.loginBtn);
  }

  verifyLoginHeading() {
    I.waitForElement(this.indicators.loginHeading, 10);
    I.seeElement(this.indicators.loginHeading);
  }

  clickCreateAccountLink() {
    I.waitForElement(this.indicators.createAccountLink, 10);
    I.click(this.indicators.createAccountLink);
    I.waitForElement(this.indicators.createAccountHeading, 10);
    I.seeElement(this.indicators.createAccountHeading);
  }
  fillRegistrationForm() {
    I.waitForElement(this.indicators.emailInput, 10);
    I.fillField(
      this.indicators.emailInput,
      "C.u.e.n.t.a.P.r.u.e.b.a@gmail.com",
    );

    I.waitForElement(this.indicators.passwordInput, 10);
    I.fillField(this.indicators.passwordInput, "CuentaPrueba123");
  }
  fillLoginForm() {
    I.waitForElement(this.indicators.usernameInput, 10);
    I.fillField(
      this.indicators.usernameInput,
      "C.u.e.n.t.a.P.r.u.e.b.a@gmail.com",
    );

    I.waitForElement(this.indicators.passwordInput, 10);
    I.fillField(this.indicators.passwordInput, "CuentaPrueba123");
  }
  clickSubmitCreateAccount() {
    I.waitForElement(this.indicators.submitCreateAccountBtn, 10);
    I.click(this.indicators.submitCreateAccountBtn);
    I.waitForElement(this.indicators.personalDataHeading, 10);
    I.seeElement(this.indicators.personalDataHeading);
  }
  fillPersonalDataForm() {
    I.waitForElement(this.indicators.firstNameInput, 10);
    I.fillField(this.indicators.firstNameInput, "Irving");
    I.fillField(this.indicators.lastNameInput, "Carballo");
    I.fillField(this.indicators.secondLastNameInput, "Hernandez");
    I.click(this.indicators.dayDropdown);
    I.waitForElement(this.indicators.dayOption09, 5);
    I.click(this.indicators.dayOption09);
    I.click(this.indicators.monthDropdown);
    I.waitForElement(this.indicators.monthOptionJunio, 5);
    I.click(this.indicators.monthOptionJunio);
    I.click(this.indicators.yearDropdown);
    I.waitForElement(this.indicators.menuPaperScroll, 5);
    I.scrollTo(this.indicators.yearOption2004);
    I.click(this.indicators.yearOption2004);

    I.click(this.indicators.genderMaleRadio);
  }
  clickSubmitRegistration() {
    I.waitForElement(this.indicators.submitRegistrationBtn, 10);
    I.click(this.indicators.submitRegistrationBtn);
  }
  verifyPhoneVerificationHeading() {
    I.waitForElement(this.indicators.phoneVerificationHeading, 10);
    I.seeElement(this.indicators.phoneVerificationHeading);
  }

  fillPhoneAndContinue() {
    I.waitForElement(this.indicators.phoneInput, 10);
    I.fillField(this.indicators.phoneInput, "5512345678");

    I.waitForElement(this.indicators.continuePhoneBtn, 10);
    I.click(this.indicators.continuePhoneBtn);
  }
  navigateToLoginDirect() {
    I.amOnPage(this.urls.loginDirectUrl);
  }
  clickLoginSubmitButton() {
    I.waitForElement(this.indicators.loginSubmitBtn, 10);
    I.waitForEnabled(this.indicators.loginSubmitBtn, 10);
    I.click(this.indicators.loginSubmitBtn);
    I.wait(30);
  }
  async waitForManualOtpAndProceed(timeoutInSeconds = 60) {
    I.waitForElement(this.indicators.otpHeading, 10);
    I.seeElement(this.indicators.otpHeading);

    I.say(
      `[INTERVENCIÓN MANUAL] Por favor escribe el código de verificación en el navegador (Tiempo máximo: ${timeoutInSeconds}s).`,
    );

    I.waitForElement(this.indicators.headerUserMenu, timeoutInSeconds);
  }
  openUserMenu() {
    I.waitForElement(this.indicators.headerUserMenu, 10);
    I.click(this.indicators.headerUserMenu);

    I.waitForElement(this.indicators.myAccountSpan, 10);
    I.seeElement(this.indicators.myAccountSpan);
  }

  clickPersonalData() {
    I.waitForElement(this.indicators.dataAndPreferencesSpan, 10);
    I.click(this.indicators.dataAndPreferencesSpan);

    I.waitForElement(this.indicators.personalDataHeading, 10);
    I.seeElement(this.indicators.personalDataHeading);
  }

  clickMyAddresses() {
    I.waitForElement(this.indicators.addressesSpan, 10);
    I.click(this.indicators.addressesSpan);

    I.waitForElement(this.indicators.myAddressesSpan, 10);
    I.seeElement(this.indicators.myAddressesSpan);
  }
  verifyAppliedPriceRangeTag() {
    I.waitForElement(this.indicators.priceRangeTag, 10);
  }
  searchAndSelectNike() {
    I.waitForElement(this.indicators.brandSearchInput, 10);
    I.fillField(this.indicators.brandSearchInput, "Nike");
    I.pressKey("Enter");

    I.waitForElement(this.indicators.nikeCheckbox, 10);
    I.click(this.indicators.nikeCheckbox);
  }
  verifyNikeFilterTag() {
    I.waitForElement(this.indicators.nikeAppliedFilterTag, 10);
  }
  searchAndSelectAdidas() {
    I.waitForElement(this.indicators.brandSearchInput, 10);
    I.fillField(this.indicators.brandSearchInput, "Adidas");
    I.pressKey("Enter");

    I.waitForElement(this.indicators.adidasCheckbox, 10);
    I.click(this.indicators.adidasCheckbox);
  }

  verifyAdidasFilterTag() {
    I.waitForElement(this.indicators.adidasAppliedFilterTag, 10);
    I.seeElement(this.indicators.adidasAppliedFilterTag);
  }
  removeNikeFilter() {
    I.waitForElement(this.indicators.nikeAppliedFilterTag, 10);
    I.click(this.indicators.nikeAppliedFilterTag);
  }

  verifyTenisTitle() {
    I.waitForElement(this.indicators.searchTitle, 10);
    I.seeElement(this.indicators.searchTitle);
  }
}
module.exports = new Liverpool();
