import Game from './game';
import "./styles/divekicker.scss";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const background = document.getElementById('bg-canvas');
    const backgroundCtx = background.getContext('2d');

    const newGame = new Game(canvas, ctx, backgroundCtx);
    newGame.animate();
})