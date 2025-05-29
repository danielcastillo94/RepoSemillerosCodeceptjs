const { I } = inject();

Given("estoy en demoqa", async () => {
  await I.amOnPage("https://demoqa.com/upload-download");
});

When("Cargo un archivo", async () => {
  I.attachFile("#uploadFile", "data/123.txt");
});

Then("Valido el archivo cargados", async () => {
  I.see("C:\\fakepath\\123.txt", "#uploadedFilePath");
});

When("Descargo un archivo", async () => {
  const { browserContext } = await codeceptjs.container.helpers.Playwright;
  const page = await browserContext.page;

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#downloadButton"),
  ]);

  const filePath = await download.path();
});

Then("Valido el archivo descargado", async () => {
  I.wait(100);
});
