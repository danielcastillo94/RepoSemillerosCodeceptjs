const {LoginPage} = inject();

//Background
Given(/^El usuario se encuentra en la pagina de inicio$/, () => {
    LoginPage.home();
});

//TC066--------------------------------
When(/^El usuario se logea con existo$/, () => {
    LoginPage.iniciarsesion();
});

//TC067--------------------------------
Then(/^El usuario puede ver su perfil y direcciones guardadas$/, () => {
    LoginPage.perfil();
});