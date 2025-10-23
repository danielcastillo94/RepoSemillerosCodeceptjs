const { I } = inject();
const TC002Page = require('../pages/TC002Page');


Given (/^que el usuario está en la página de inicio$/, () => {
    TC002Page.menuPlanes();
});

When (/^el usuario posiciona el cursor sobre "Móvil"$/, () =>{
    TC002Page.subMenu();
});

Then (/^debe ver los submenús disponibles$/, () =>{
    TC002Page.validateSubMenus();
});
