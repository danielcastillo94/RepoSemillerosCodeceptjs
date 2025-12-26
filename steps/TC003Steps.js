const { I } = inject();
const TC003Page = require('../pages/TC003Page');
const tc003Page = new TC003Page(I);

Given('que abro la pagina de planes de Telcel', () => {
  I.amOnPage('https://www.telcel.com/planes');
});

When('busco el plan Telcel Plus 5G', async () => {
  await tc003Page.buscarPlan();
});

Then('deberia ver el plan Telcel Plus 5G visible', async () => {
  await tc003Page.verificarPlanVisible();
});
