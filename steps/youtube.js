const { I } = inject();

Given('estoy en la página principal de YouTube', async () => {
  I.amOnPage('https://www.youtube.com');
  I.waitForElement('button[aria-label="Guía"]', 10);
  I.click('button[aria-label="Guía"]');
  I.wait(2);
});

When('hago clic en el botón {string} en la barra de navegación', async (boton) => {
  const explorarXpath = '//*[@id="guide-section-title"][contains(text(), "Explorar")]';
  I.waitForElement(explorarXpath, 15);
  I.click(explorarXpath);
  I.wait(3);
});

Then('algunos íconos en la sección Explorar deben tener atributos data-title', async () => {
  // Selector mejorado para los íconos
  const sectionXpath = '//*[@id="guide-section-title"][contains(text(), "Explorar")]/ancestor::ytd-guide-section-renderer';
  const iconLocator = `${sectionXpath}//ytd-guide-entry-renderer`;
  
  try {
    I.waitForElement(sectionXpath, 10);
    I.waitForElement(iconLocator, 10);
    
    const iconsCount = await I.grabNumberOfVisibleElements(iconLocator);
    
    if (iconsCount === 0) {
      throw new Error('No se encontraron íconos en la sección Explorar');
    }

    // Verificamos varios atributos alternativos
    const attributesToCheck = ['aria-label', 'title', 'id', 'class'];
    let foundValidAttributes = false;
    
    // Verificar los primeros 3 íconos
    const iconsToCheck = Math.min(3, iconsCount);
    
    for (let i = 1; i <= iconsToCheck; i++) {
      const currentLocator = `(${iconLocator})[${i}]`;
      
      for (const attr of attributesToCheck) {
        try {
          const attrValue = await I.grabAttributeFrom(currentLocator, attr);
          
          if (attrValue && attrValue.trim() !== '') {
            I.say(`Ícono ${i} tiene ${attr}: "${attrValue}"`);
            foundValidAttributes = true;
          }
        } catch (e) {
          // Continuar con el siguiente atributo si este falla
        }
      }
    }
    
    if (!foundValidAttributes) {
      throw new Error('No se encontraron atributos accesibles en los íconos verificados');
    }
    
  } catch (error) {
    I.saveScreenshot('icon_attributes_not_found.png');
    throw new Error('Error al validar íconos: ' + error.message);
  }
});

Then('los íconos deben ser accesibles mediante algún atributo identificable', async () => {
  const sectionXpath = '//*[@id="guide-section-title"][contains(text(), "Explorar")]/ancestor::ytd-guide-section-renderer';
  const iconLocator = `${sectionXpath}//ytd-guide-entry-renderer:first-child`;
  
  I.waitForElement(iconLocator, 10);
  
  // Verificamos varios atributos posibles
  const possibleAttributes = ['aria-label', 'title', 'href', 'id'];
  let attributeFound = false;
  
  for (const attr of possibleAttributes) {
    try {
      const value = await I.grabAttributeFrom(iconLocator, attr);
      if (value && value.trim() !== '') {
        I.say(`Atributo encontrado: ${attr} = "${value}"`);
        attributeFound = true;
        break;
      }
    } catch (e) {
      // Continuar con el siguiente atributo
    }
  }
  
  if (!attributeFound) {
    I.saveScreenshot('no_accessible_attributes.png');
    throw new Error('No se encontró ningún atributo identificable en el ícono');
  }
})