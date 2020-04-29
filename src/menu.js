class Menu {
    constructor(game) {
        this.game = game;
        this.menu = document.getElementById('menu');
        this.controlsMenu = document.getElementById('controls-menu');
        this.startButton = document.getElementById('start-btn');
        this.controlsButton = document.getElementById('controls-menu-btn');
        this.closeButton = document.getElementById('close-btn');
        this.initializeMenuButtons();

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu(id) {
        id === 'menu' ? this.menu.className = 'open' : this.controlsMenu.className = 'open';
    }

    closeMenu(id) {
        id === 'menu' ? this.menu.className = 'closed' : this.controlsMenu.className = 'closed';
    }

    startGame() {
        this.closeMenu('menu');
        this.game.start();
    }

    initializeMenuButtons() {
        this.startButton.addEventListener('click', this.startGame.bind(this));
        this.controlsButton.addEventListener('click', () => this.openMenu('controls'));
        this.closeButton.addEventListener('click', () => this.closeMenu('controls'))
    }
}

export default Menu;