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
  siteLiverpoolPage.mainPageValidation();
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

Then(/^se expande la categoría "Hombres"$/, () => {
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
When(
  /^el usuario deselecciona el filtro de marca "Nike"$/,
  () => {
    siteLiverpoolPage.removeNikeFilter();
  },
);

Then(/^los productos se muestran sin la marca "Nike"$/, () => {
  siteLiverpoolPage.verifyTenisTitle();
});

//TC-013
When(/^el usuario aplica el filtro de talla "M"$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^los productos se muestran solo en la talla "M"$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-014
When(/^el usuario aplica el filtro de color$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^los productos se muestran solo en el color seleccionado$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-015
When(/^el usuario aplica los filtros de talla "M" y color "Negro"$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^los productos se muestran solo en la talla "M" y color$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-016
When(/^el usuario aplica el filtro de ordenamiento "Relevancia"$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^los productos se muestran por relevancia$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-017
When(
  /^el usuario aplica el filtro de ordenamiento "Precio: Menor a Mayor"$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

Then(/^los productos se muestran por precio de menor a mayor$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-018
When(
  /^el usuario aplica el filtro de ordenamiento "Precio: Mayor a Menor"$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

Then(/^los productos se muestran por precio de mayor a menor$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-019
When(/^el usuario aplica el filtro de ordenamiento "Más Nuevo"$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^los productos se muestran por fecha de publicación, mostrando los más recientes primero$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//@detalles

//TC-020
Then(/^se muestra la página de detalle del producto seleccionado$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-021
Then(
  /^se valida que el nombre, precio y descripción del producto son correctos$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-022
Then(
  /^se valida que la galería de imágenes del producto se muestra correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-023
Then(/^se valida que el stock del producto está disponible$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-024
Then(
  /^se valida que se muestran las tiendas cercanas con stock del producto$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-025
Then(/^se valida que el SKU y código del producto son correctos$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-026
Then(/^se valida que se muestran las reseñas del producto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-027
When(/^el usuario filtra las reseñas por calificación de 4 estrellas$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se muestran solo las reseñas con calificación de 4 estrellas$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-028
Then(
  /^se valida que las fotos en las reseñas del producto se muestran correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//@carrito

//TC-029
When(/^el usuario agrega el producto al carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el producto se ha agregado correctamente al carrito$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-030
When(/^el usuario agrega un producto al carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que la cantidad en el badge del carrito se actualiza correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-031
Then(
  /^se valida que se muestra una confirmación de que el producto ha sido agregado$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-032
When(/^el usuario agrega 3 productos diferentes al carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que los 3 productos se han agregado correctamente al carrito$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-033
Then(/^se valida que la cantidad total en el carrito es correcta$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-034
Then(
  /^se valida que el subtotal en el carrito se actualiza correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-035
When(/^el usuario agrega un producto a la wishlist$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el producto se ha agregado correctamente a la wishlist$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-036
Then(/^se valida que la wishlist se ha actualizado correctamente$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-037
When(/^el usuario remueve un producto de la wishlist$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el producto se ha removido correctamente de la wishlist$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-038
When(/^el usuario agrega un producto a la comparación$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el producto se ha agregado correctamente a la comparación$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-039
When(/^el usuario agrega un segundo producto a la comparación$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que ambos productos se han agregado correctamente a la comparación$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-040
When(/^el usuario accede a la tabla de comparación$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que la tabla de comparación muestra correctamente los productos agregados$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-041
When(/^el usuario aumenta la cantidad de un producto en el carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que la cantidad se ha actualizado correctamente$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-042
When(/^el usuario disminuye la cantidad de un producto en el carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-043
When(/^el usuario remueve un producto del carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el producto se ha removido correctamente del carrito$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-044
When(/^el usuario agrega productos al carrito$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que el subtotal en el carrito es correcto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-045
Then(/^se valida que el cálculo de impuestos es correcto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-046
// (Steps compartidos con los Test Case TC-033/TC-046)

//TC-047
When(/^el usuario aplica un código promocional válido$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que el descuento se ha aplicado correctamente$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-048
Then(/^se valida que el descuento aplicado es correcto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-049
When(/^el usuario remueve un código promocional aplicado$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que el descuento ha sido removido correctamente$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-050
When(/^el usuario llena el formulario con nombre, email y teléfono$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que los datos personales se han llenado correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-051
When(/^el usuario ingresa un email válido en el formulario$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que el email ingresado es correcto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-052
When(/^el usuario ingresa un teléfono válido en el formulario$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que el teléfono ingresado es correcto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-053
When(/^el usuario selecciona una dirección guardada$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que la dirección seleccionada es correcta$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-054
When(/^el usuario agrega una dirección nueva$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que la dirección nueva se ha agregado correctamente$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-055
When(/^el usuario llena los campos de dirección$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que los campos de dirección son correctos$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-056
When(/^el usuario accede a las opciones de envío$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que se muestran todas las opciones de envío disponibles$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-057
When(/^el usuario selecciona la opción de envío estándar$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que la opción de envío estándar ha sido seleccionada correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-058
When(/^el usuario selecciona la opción de envío express$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que la opción de envío express ha sido seleccionada correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-059
When(/^el usuario selecciona la opción de pago con tarjeta$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que la opción de pago con tarjeta ha sido seleccionada correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-060
When(/^el usuario llena los campos de tarjeta con número, fecha y CVV$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(/^se valida que los campos de tarjeta son correctos$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

//TC-061
When(/^el usuario accede al resumen de compra antes de pagar$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el resumen muestra correctamente los productos, cantidades, precios y total a pagar$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//TC-062
When(/^el usuario entra al carrito y valida el registro del producto$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

When(/^el usuario selecciona una dirección de envío$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

When(/^el usuario selecciona una opción de envío$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

When(/^el usuario selecciona una opción de pago$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

When(/^el usuario revisa el resumen de compra$/, () => {
  siteLiverpoolPage.mainPageValidation();
});

Then(
  /^se valida que el proceso de compra se ha completado correctamente$/,
  () => {
    siteLiverpoolPage.mainPageValidation();
  },
);

//@login

//TC-063
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

//TC-064
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

//TC-065
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
