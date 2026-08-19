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
    carrito: "https://www.liverpool.com.mx/tienda/cart",
  };
  indicators = {
    searchTitle: "//h1[normalize-space()='Tenis']",
    menuButton:
      "//button[@data-testid='blt26617d4f2e17657d-header-button-category']",
    searchInput: "//input[contains(@data-testid, 'header-search-input')]",
    noResultsMessage:
      "//h2[contains(., 'Lo sentimos, no encontramos nada para')]",
    totalArticles: "//p[@class='font-semibold text-body-base']",
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
    sizeSpan: "//span[normalize-space()='Talla']",
    size10cmCheckbox: "//input[@value='10 cm']",
    size10cmAppliedFilterTag:
      "//button[contains(@class, 'bg-carbon-50')]//span[contains(text(),'10 cm')]",
    colorSpan: "//span[normalize-space()='Color']",
    blackColorCheckbox: "//input[@value='Negro~~#000000']",
    blackColorAppliedFilterTag:
      "//button[contains(@class, 'bg-carbon-50')]//span[normalize-space()='Negro']",
    sortDropdownBtn: "//button[@id='sorting-button']",
    bestRatedOption: "//li[normalize-space()='Mejor calificados']",
    ratingSpan: "//span[@class='body-sm-regular ml-1 whitespace-nowrap']",
    highestPriceOption: "//li[normalize-space()='Mayor precio']",
    newestOption: "//li[normalize-space()='Novedades']",
    firstProductCard: "(//div[@class='flex-1 gap-2 flex flex-col'])[1]",
    primarySection: "//div[contains(@class, 'bg-primary')]",
    detailsHeading:
      "//h2[contains(@class, 'font-semibold') and contains(@class, 'text-base')]",
    featuresTab: "//h3[normalize-space()='Características']",
    productTitle:
      "//h1[normalize-space()='Tenis Aspyre 3 Stripes para hombre']",
    productPriceContainer:
      "//div[contains(@class, 'flex-col') and contains(@class, 'gap-y-2')]//div[contains(@class, 'flex-row') and contains(@class, 'items-center')]",
    productGalleryImage:
      "//div[contains(@class, 'relative')]//img[@alt='Tenis Aspyre 3 Stripes para hombre 1']",
    sizeDropdownBtn:
      "//button[contains(@class, 'bg-carbon-25')]//div[contains(@class, 'flex gap-1 items-center')]",
    storeAvailabilityBtn:
      "//span[normalize-space()='Ver disponibilidad en tienda']",
    productCodeText: "p[class='text-body-sm text-low-emphasis']",
    sectionTitleText:
      "//span[contains(@class, 'text-body-xl') and contains(@class, 'font-semibold') and contains(@class, 'text-high-emphasis')]",
    specificSizeLabel: "//p[normalize-space()='Tamaño:']",
    addToCartBtn: "//span[normalize-space()='Agregar a mi bolsa']",
    cartIcon:
      "//div[@class='flex h-full items-center relative gap-5 justify-between flex-1']//span[@class='24px material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeMedium css-fd29xp'][normalize-space()='shopping_bag']",
    proceedToCheckoutBtn: "//span[text()='Comprar']",
    usernameInput: "//input[@id='username']",
    passwordInput: "//input[@id='password']",
    loginActionBtn: "//button[@name='action']",
    checkoutAddressContainer:
      "//div[contains(@class, 'bg-carbon-white')]//div[contains(@class, 'flex justify-between')]",
    cashAndTransferOption:
      "//span[normalize-space()='Efectivo y Transferencias']",
    orderSummaryContainer:
      "//div[contains(@class, 'p-4') and contains(@class, 'flex-col') and contains(@class, 'gap-4')]",
    addBtn: "//span[normalize-space()='add']",
    quantityText: "//div[@class='w-40 text-center mr-2']",
    removeBtn: "//span[normalize-space()='remove']",
    deleteBtn:
      "//button[contains(@data-testid, 'delete-button') and .//span[normalize-space()='Eliminar']]",
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
    I.fillField(this.indicators.emailInput, process.env.TEST_EMAIL);

    I.waitForElement(this.indicators.passwordInput, 10);
    I.fillField(this.indicators.passwordInput, process.env.TEST_PASSWORD);
  }
  fillLoginForm() {
    I.waitForElement(this.indicators.usernameInput, 10);
    I.fillField(this.indicators.usernameInput, process.env.TEST_EMAIL);

    I.waitForElement(this.indicators.passwordInput, 10);
    I.fillField(this.indicators.passwordInput, process.env.TEST_PASSWORD);
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
  selectSize10cm() {
    I.waitForElement(this.indicators.sizeSpan, 10);
    I.waitForElement(this.indicators.size10cmCheckbox, 10);
    I.click(this.indicators.size10cmCheckbox);
  }

  verifySize10cm() {
    I.waitForElement(this.indicators.size10cmAppliedFilterTag, 10);
    I.seeElement(this.indicators.size10cmAppliedFilterTag);
  }
  selectBlackColor() {
    I.waitForElement(this.indicators.colorSpan, 10);
    I.waitForElement(this.indicators.blackColorCheckbox, 10);
    I.click(this.indicators.blackColorCheckbox);
  }

  verifyBlackColor() {
    I.waitForElement(this.indicators.blackColorAppliedFilterTag, 10);
    I.seeElement(this.indicators.blackColorAppliedFilterTag);
  }
  openSortBestRated() {
    I.waitForElement(this.indicators.sortDropdownBtn, 10);
    I.click(this.indicators.sortDropdownBtn);

    I.waitForElement(this.indicators.bestRatedOption, 10);
    I.click(this.indicators.bestRatedOption);
  }

  verifyRatedFilter() {
    I.waitForElement(this.indicators.ratingSpan, 10);
    I.seeElement(this.indicators.ratingSpan);
  }
  openSortHighestPrice() {
    I.waitForElement(this.indicators.sortDropdownBtn, 10);
    I.seeElement(this.indicators.sortDropdownBtn, 10);
    I.wait(2);
    I.click(this.indicators.sortDropdownBtn);

    I.waitForElement(this.indicators.highestPriceOption, 10);
    I.click(this.indicators.highestPriceOption);
  }
  openSortNewest() {
    I.waitForElement(this.indicators.sortDropdownBtn, 10);
    I.wait(2);
    I.click(this.indicators.sortDropdownBtn);

    I.waitForElement(this.indicators.newestOption, 10);
    I.click(this.indicators.newestOption);
  }
  clickFirstProduct() {
    I.waitForElement(this.indicators.firstProductCard, 10);
    I.click(this.indicators.firstProductCard);
  }
  ProductDetailsAndFeatures() {
    I.waitForElement(this.indicators.primarySection, 10);
    I.scrollTo(this.indicators.detailsHeading);
    I.waitForElement(this.indicators.featuresTab, 10);
    I.click(this.indicators.featuresTab);
  }
  verifyProductElements() {
    I.waitForElement(this.indicators.productTitle, 10);
    I.seeElement(this.indicators.productTitle);

    I.waitForElement(this.indicators.productPriceContainer, 10);
    I.seeElement(this.indicators.productPriceContainer);
  }
  clickProductGallery() {
    I.waitForElement(this.indicators.productGalleryImage, 10);
    I.click(this.indicators.productGalleryImage);
  }
  selectSizeAndCheckStore() {
    I.waitForElement(this.indicators.sizeDropdownBtn, 10);
    I.click(this.indicators.sizeDropdownBtn);
    I.pressKey("Tab");
    I.pressKey("Enter");

    I.waitForElement(this.indicators.storeAvailabilityBtn, 10);
    I.click(this.indicators.storeAvailabilityBtn);
  }
  verifyProductCode() {
    I.waitForElement(this.indicators.productCodeText, 10);
    I.seeElement(this.indicators.productCodeText);
  }
  scrollToSectionTitle() {
    I.waitForElement(this.indicators.sectionTitleText, 10);
    I.scrollTo(this.indicators.sectionTitleText);
    I.seeElement(this.indicators.sectionTitleText);
  }
  addToBag() {
    I.waitForElement(this.indicators.specificSizeLabel, 10);
    I.wait(2);
    I.waitForElement(this.indicators.addToCartBtn, 10);
    I.click(this.indicators.addToCartBtn);
  }

  openCheckout() {
    I.waitForElement(this.indicators.cartIcon, 10);
    I.click(this.indicators.cartIcon);

    I.seeInCurrentUrl(this.urls.carrito);

    I.waitForElement(this.indicators.proceedToCheckoutBtn, 10);
    I.click(this.indicators.proceedToCheckoutBtn);
  }
  confirmAddress() {
    I.waitForElement(this.indicators.usernameInput, 10);
    I.fillField(this.indicators.usernameInput, "los.pachis16@gmail.com");
    //process.env.TEST_EMAIL
    I.waitForElement(this.indicators.passwordInput, 10);
    I.fillField(this.indicators.passwordInput, "Subaru16");
    //process.env.TEST_PASSWORD
    I.waitForElement(this.indicators.loginActionBtn, 10);
    I.click(this.indicators.loginActionBtn);
    //wait para esperar el codigo de verificación
    I.wait(20);
    I.waitForElement(this.indicators.checkoutAddressContainer, 10);
    I.seeElement(this.indicators.checkoutAddressContainer);
  }
  selectPayment() {
    I.waitForElement(this.indicators.cashAndTransferOption, 10);
    I.click(this.indicators.cashAndTransferOption);
  }

  verifyOrderSummary() {
    I.waitForElement(this.indicators.orderSummaryContainer, 10);
    I.seeElement(this.indicators.orderSummaryContainer);
  }
  openBag() {
    I.waitForElement(this.indicators.cartIcon, 10);
    I.click(this.indicators.cartIcon);

    I.seeInCurrentUrl(this.urls.carrito);
  }
  clickAddButton() {
    I.waitForElement(this.indicators.addBtn, 10);
    I.click(this.indicators.addBtn);
  }
  verifyProductQuantity() {
    I.waitForElement(this.indicators.quantityText, 10);
    I.seeElement(this.indicators.quantityText);
  }
  clickRemoveButton() {
    I.wait(2);
    I.waitForElement(this.indicators.removeBtn, 10);
    I.click(this.indicators.removeBtn);
  }
  clickDeleteButton() {
    I.waitForElement(this.indicators.deleteBtn, 10);
    I.click(this.indicators.deleteBtn);
  }
}
module.exports = new Liverpool();
