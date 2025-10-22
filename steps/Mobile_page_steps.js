const {mobile_page} = inject();
const {home_page} = inject();

Given ("El usuario se encuentra en la pagina principal de Telcel en modo vista movil", ()=>{
    home_page.goToPage();
});

When (/^El usuario hace click en "Menu"$/, ()=>{
    mobile_page.movilView();
})