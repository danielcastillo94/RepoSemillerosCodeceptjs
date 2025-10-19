const {home_page}= inject();

Given( /^El usuario se encuentra en la pagina principal de telcel$/,()=>{
    home_page.goToTelcel();
});

When( /^El usuario debe ver el banner principal$/,()=>{
    home_page.seeElementsBanner();
});

When( /^El usuario debe ver el menu principal$/,()=>{
    home_page.seeElementsMenu();
});

Then( /^El usuario debe ver el logotipo$/,()=>{
    home_page.seeElementsLogo();
});

When("El usuario hace click en el boton {string}",(access)=>{
    home_page.clickElementMenu(access);
});
When("EL usuario puede ver el texto {string}", ()=>{
    home_page.seeElementsMenuMovil();
});

Then("El usuario puede ver el texto {string}", ()=>{
    home_page.seeElementsMenuPPR();
});

When ("El usuario se desplaza hasta el banner de telcel 5g", ()=>{
    home_page.verifyElement5gButton();
});