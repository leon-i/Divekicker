class Menu {
    constructor(game) {
        this.game = game;
        this.menu = document.getElementById('menu');
        this.controlsMenu = document.getElementById('controls-menu');
        this.startButton = document.getElementById('start-btn');
        this.controlsButton = document.getElementById('controls-menu-btn');
        this.controlsButton2 = document.getElementById('controls-menu-btn-2');
        this.closeButton = document.getElementById('close-btn');
        this.initializeSoundFX();
        this.initializeMenuButtons();

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    initializeSoundFX() {
        this.menuButtonSounds = new Audio('./src/assets/soundFX/menu_button_sounds.mp3');
        this.menuButtonSounds.volume = 0.4;
    }

    initializeMenuButtons() {
        this.startButton.addEventListener('click', this.startGame.bind(this));
        this.controlsButton.addEventListener('click', () => this.openMenu('controls'));
        this.controlsButton2.addEventListener('click', () => this.openMenu('controls'));
        this.closeButton.addEventListener('click', () => this.closeMenu('controls'))
    }

    playMenuButtonSound() {
        this.menuButtonSounds.pause();
        this.menuButtonSounds.currentTime = 0;
        this.menuButtonSounds.play();
    }

    openMenu(id) {
        if (id === 'menu') {
            this.menu.className = 'open';
        } else {
            this.playMenuButtonSound();
            this.controlsMenu.className = 'open';
        }
    }

    closeMenu(id) {
        if (id === 'menu') {
            this.menu.className = 'closed';
        } else {
            this.playMenuButtonSound();
            this.controlsMenu.className = 'closed';
        }
    }

    startGame() {
        this.playMenuButtonSound();
        const gameStartTimer = setInterval(() => {
            this.closeMenu('menu');
            this.game.start();
            clearInterval(gameStartTimer);
        }, 500);
    }
}

export default Menu;