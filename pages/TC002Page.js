const { I } = inject();

class TC002Page {
    // Selectores
    get menuPlanes() {
        return $(' a[id="telcel-menu-principal-boton"]');
    }

    get subMenu() {
        return $$('a[href="/planes-renta"]');
    }
    
    // Método para navegar al menú de planes
    async navigateToPlanes() {
        await this.menuPlanes.moveTo(); // Colocar mouse sobre el submenú
    }

    // Método para verificar visibilidad de submenús
    async validateSubMenus() {
        const isVisible = await this.subMenu.every(elem => elem.isDisplayed());
        return isVisible;
    }
}

module.exports = new TC002Page();