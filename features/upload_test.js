Feature('Carga de archivo');

Scenario('Validar que el archivo se carga correctamente', async ({ I }) => {
 I.amOnPage('https://demoqa.com/upload-download', { timeout: 60000 });

  I.attachFile('#uploadFile', 'archivos/ejemplo.txt');
  I.see('ejemplo.txt');
  
});
