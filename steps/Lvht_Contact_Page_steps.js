const {contact_page}= inject();

Given ("El usuario se encuentra en la pagina de contactanos", ()=>{
    contact_page.goToPage();
});

When (/^El usuario hace click en "Centro de Atención"$/, ()=>{
    contact_page.verifyElements();
})

When ("El usuario se posiciona sobre el boton Menú", ()=>{
    contact_page.verifyFormElements();
});