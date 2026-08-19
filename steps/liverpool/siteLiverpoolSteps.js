const { siteLiverpoolPage } = inject();

//Background
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Given(/^el usuario hace clic en el botón de "Categorias"$/, () => {
  siteLiverpoolPage.clickOnCategoriesMenu();
});

Given(/^el usuario busca el producto "tenis"$/, () => {
  siteLiverpoolPage.searchTenis();
});

Given(/^se muestran resultados relacionados con la búsqueda "tenis"$/, () => {
  siteLiverpoolPage.verifySearchResultTenis();
});

Given(/^el usuario hace clic en un producto para ver su detalle$/, () => {
  siteLiverpoolPage.clickFirstProduct();
});

Given(/^el usuario hace clic en el botón "Iniciar sesión"$/, () => {
  siteLiverpoolPage.clickLoginButton();
});

Given(/^se muestra el formulario de login$/, () => {
  siteLiverpoolPage.verifyLoginHeading();
});

//@busqueda

//TC-001

When(/^Busca el producto "zapatillas"$/, () => {
  siteLiverpoolPage.searchZapatillas();
});

Then(/^Se muestran resultados relacionados con la búsqueda$/, () => {
  siteLiverpoolPage.verifyUrlZapatillas();
});

//TC-002

When(/^Busca el producto "iphone30"$/, () => {
  siteLiverpoolPage.searchFailed();
});

Then(/^No se muestran productos para "iphone30"$/, () => {
  siteLiverpoolPage.verifyUrlFailed();
});

//TC-003

Then(/^Se muestran los resultados esperados$/, () => {
  siteLiverpoolPage.verifySearchResult();
});

//@navegacion

//TC-004

When(/^el usuario hace clic en la categoría "Hombres"$/, () => {
  siteLiverpoolPage.clickOnManCategory();
});

Then(/^el usuario entra a la categoría "Hombres"$/, () => {
  siteLiverpoolPage.waitUrlManCategory();
});

//TC-005

When(/^el usuario hace clic en la subcategoría "Ropa"$/, () => {
  siteLiverpoolPage.clickOnClothingCategory();
});

Then(/^se muestra la página de la subcategoría "Ropa"$/, () => {
  siteLiverpoolPage.waitForClothingPage();
});

//TC-006

Then(
  /^se muestran los productos correspondientes a la categoría "Hombres"$/,
  () => {
    siteLiverpoolPage.waitUrlManCategory();
    siteLiverpoolPage.scrollToBottom();
  },
);

//@filtros

//TC-007

When(
  /^el usuario aplica el filtro de precio de "Menor precio" en los filtros de "ordenar por"$/,
  () => {
    siteLiverpoolPage.sortByLowestPrice();
  },
);

Then(/^los productos se muestran de menor a mayor precio$/, () => {
  siteLiverpoolPage.verifyFilterSoftPrice();
});

//TC-008
When(/^el usuario aplica el filtro de precio "Rango"$/, () => {
  siteLiverpoolPage.scrollToPriceFilter();
});

Then(/^los productos se muestran dentro del rango de \$500 a \$2000$/, () => {
  siteLiverpoolPage.filterByPriceRange();
});

//TC-009
Then(
  /^el usuario valida que los productos se muestran dentro del rango$/,
  () => {
    siteLiverpoolPage.filterByPriceRange();
    siteLiverpoolPage.verifyAppliedPriceRangeTag();
  },
);

//TC-010
When(/^el usuario aplica el filtro de marca "Nike"$/, () => {
  siteLiverpoolPage.scrollToPriceFilter();
  siteLiverpoolPage.searchAndSelectNike();
});

Then(/^los productos se muestran solo de la marca "Nike"$/, () => {
  siteLiverpoolPage.verifyNikeFilterTag();
});

//TC-011
When(/^el usuario aplica los filtros de marca "Nike" y "Adidas"$/, () => {
  siteLiverpoolPage.searchAndSelectNike();
  siteLiverpoolPage.searchAndSelectAdidas();
});

Then(/^los productos se muestran de las marcas "Nike" y "Adidas"$/, () => {
  siteLiverpoolPage.verifyNikeFilterTag();
  siteLiverpoolPage.verifyAdidasFilterTag();
});

//TC-012
When(/^el usuario deselecciona el filtro de marca "Nike"$/, () => {
  siteLiverpoolPage.removeNikeFilter();
});

Then(/^los productos se muestran sin la marca "Nike"$/, () => {
  siteLiverpoolPage.verifyTenisTitle();
});

//TC-013
When(/^el usuario aplica el filtro de talla "10 cm"$/, () => {
  siteLiverpoolPage.scrollToPriceFilter();
  siteLiverpoolPage.selectSize10cm();
});

Then(/^los productos se muestran solo en la talla "10 cm"$/, () => {
  siteLiverpoolPage.verifySize10cm();
});

//TC-014
When(/^el usuario aplica el filtro de color$/, () => {
  siteLiverpoolPage.scrollToPriceFilter();
  siteLiverpoolPage.selectBlackColor();
});

Then(/^los productos se muestran solo en el color seleccionado$/, () => {
  siteLiverpoolPage.verifyBlackColor();
});

//TC-015
When(/^el usuario aplica los filtros de talla "10 cm" y color "Negro"$/, () => {
  siteLiverpoolPage.scrollToPriceFilter();
  siteLiverpoolPage.selectSize10cm();
  siteLiverpoolPage.selectBlackColor();
});

Then(
  /^los productos se muestran solo en la talla "10 cm" y color "Negro"$/,
  () => {
    siteLiverpoolPage.verifySize10cm();
    siteLiverpoolPage.verifyBlackColor();
  },
);

//TC-016
When(
  /^el usuario aplica el filtro de ordenamiento "Mejor calificados"$/,
  () => {
    siteLiverpoolPage.openSortBestRated();
  },
);

Then(/^los productos se muestran por calificación$/, () => {
  siteLiverpoolPage.verifyRatedFilter();
});

//TC-017

When(/^el usuario aplica el filtro de ordenamiento "Mayor precio"$/, () => {
  siteLiverpoolPage.openSortHighestPrice();
});

Then(/^los productos se muestran por precio de mayor a menor$/, () => {
  siteLiverpoolPage.verifyRatedFilter();
});

//TC-018
When(/^el usuario aplica el filtro de ordenamiento "Novedades"$/, () => {
  siteLiverpoolPage.openSortNewest();
});

Then(
  /^los productos se muestran por fecha de publicación, mostrando los más recientes primero$/,
  () => {
    siteLiverpoolPage.verifyRatedFilter();
  },
);

//@detalles

//TC-019
Then(/^se muestra la página de detalle del producto seleccionado$/, () => {
  siteLiverpoolPage.ProductDetailsAndFeatures();
});

//TC-020
Then(
  /^se valida que el nombre, precio y descripción del producto son correctos$/,
  () => {
    siteLiverpoolPage.verifyProductElements();
  },
);

//TC-021
Then(
  /^se valida que la galería de imágenes del producto se muestra correctamente$/,
  () => {
    siteLiverpoolPage.clickProductGallery();
  },
);

//TC-022
Then(
  /^se valida que se muestran las tiendas cercanas con stock del producto$/,
  () => {
    siteLiverpoolPage.selectSizeAndCheckStore();
  },
);

//TC-023
Then(/^el usuario visualiza el código del producto$/, () => {
  siteLiverpoolPage.verifyProductCode();
});

//TC-024
Then(/^se valida que se muestra la seccion de reseñas del producto$/, () => {
  siteLiverpoolPage.scrollToSectionTitle();
});

//@carrito

//TC-025
When(/^el usuario agrega un producto al carrito$/, () => {
  siteLiverpoolPage.addToBag();
});

When(/^el usuario entra al carrito y valida el registro del producto$/, () => {
  siteLiverpoolPage.openCheckout();
});

When(/^el usuario selecciona una dirección de envío$/, () => {
  siteLiverpoolPage.confirmAddress();
});

When(/^el usuario selecciona una opción de pago$/, () => {
  siteLiverpoolPage.selectPayment();
});

When(/^el usuario revisa el resumen de compra$/, () => {
  siteLiverpoolPage.verifyOrderSummary();
});

Then(
  /^se valida que el proceso de compra se ha completado correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-026
When(/^el usuario entra al carrito$/, () => {
  siteLiverpoolPage.openBag();
});

When(/^el usuario aumenta la cantidad de un producto en el carrito$/, () => {
  siteLiverpoolPage.clickAddButton();
});

Then(/^se valida que la cantidad se ha actualizado correctamente$/, () => {
  siteLiverpoolPage.verifyProductQuantity();
});

//TC-027
When(/^el usuario disminuye la cantidad de un producto en el carrito$/, () => {
  siteLiverpoolPage.clickRemoveButton();
});

//TC-028
When(/^el usuario remueve un producto del carrito$/, () => {
  siteLiverpoolPage.clickDeleteButton();
});

Then(
  /^se valida que el producto se ha removido correctamente del carrito$/,
  () => {
    siteLiverpoolPage.verifyProductQuantity();
  },
);

//@login

//TC-029
When(/^el usuario hace clic en "Crear cuenta"$/, () => {
  siteLiverpoolPage.clickCreateAccountLink();
});

When(/^ingresa un correo y contraseña validos$/, () => {
  siteLiverpoolPage.fillRegistrationForm();
});

When(/^hace clic en "Crear cuenta"$/, () => {
  siteLiverpoolPage.clickSubmitCreateAccount();
});

When(/^completa el formulario de registro con datos válidos$/, () => {
  siteLiverpoolPage.fillPersonalDataForm();
});

When(/^hace clic en "Crear cuenta" dentro del formulario de datos$/, () => {
  siteLiverpoolPage.clickSubmitRegistration();
});

When(
  /^se redirigirá al formulario para ingresar su número de telefono$/,
  () => {
    siteLiverpoolPage.verifyPhoneVerificationHeading();
  },
);

When(
  /^el usuario ingresará su número telefonico y hace click en "Continuar"$/,
  () => {
    siteLiverpoolPage.fillPhoneAndContinue();
  },
);

Then(/^se muestra un mensaje de confirmación de registro exitoso$/, () => {
  siteLiverpoolPage.navigateToLoginDirect();
});

//TC-030
When(/^el usuario ingresa su correo electrónico y contraseña válidos$/, () => {
  siteLiverpoolPage.fillLoginForm();
});

When(/^hace clic en "Iniciar sesión"$/, () => {
  siteLiverpoolPage.clickLoginSubmitButton();
});

Then(
  /^el usuario ingresa el código de verificación manualmente y confirma la sesión$/,
  async () => {
    await siteLiverpoolPage.waitForManualOtpAndProceed(60);
  },
);

Then(/^se redirige al usuario a la página principal$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-031
When(/^se redirige al usuario a la página principal$/, () => {
  siteLiverpoolPage.mainPageValidation();
});
When(/^navega a la sección "Mi perfil"$/, () => {
  siteLiverpoolPage.openUserMenu();
});

Then(/^se muestran los detalles del perfil del usuario$/, () => {
  siteLiverpoolPage.clickPersonalData();
});

Then(/^se muestran las direcciones guardadas$/, () => {
  siteLiverpoolPage.clickMyAddresses();
});
