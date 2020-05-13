class GnatController {
    constructor() {
        this.bodyEl = document.querySelector('body');
        this.stageWidth = 0;
        this.stageHeight = 0;
        this.dificult = 1500;
        this.hearts = 3;
        this.chronometerTime = 30;
        this.stage();

        let nivel = window.location.search;
        nivel = nivel.replace('?', '');

        switch (nivel) {
            case 'normal':
                this.dificult = 1500;
                break;

            case 'hard':
                this.dificult = 1000;
                break;

            case 'expert':
                this.dificult = 750;
                break;
        };

        this.spawnGnat = setInterval(() => {

            this.gnat();

        }, this.dificult);

        this.chronometer = setInterval(() => {

            if (this.chronometerTime < 0) {

                clearInterval(this.chronometer);
                clearInterval(this.spawnGnat);
                window.location = './victory.html';

            } else {

                document.querySelector('#chronometer').innerHTML = this.chronometerTime;
                this.chronometerTime--;

            }

        }, 1000);
    }

    stage() {

        this.bodyEl.setAttribute('onresize', 'gnatController.stage();');

        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;

    }

    gameOver(id) {

        if (document.getElementById(id)) {
            document.getElementById(id).remove();

            if (this.hearts <= 0) {
                
                clearInterval(this.spawnGnat);
                clearInterval(this.chronometer);
                window.location = './gameover.html';

            } else {

                document.querySelector(`#v${this.hearts}`).src = '../public/imagens/coracao_vazio.png';
                this.hearts--;

            }
        }
    }

    gnat() {

        this.gameOver('gnat');

        let positionX = Math.floor(Math.random() * this.stageWidth) - 90;
        let positionY = Math.floor(Math.random() * this.stageHeight) - 90;

        positionX = (positionX < 0) ? 0 : positionX;
        positionY = (positionY < 0) ? 0 : positionY;

        let gnat = document.createElement('img');
        gnat.src = '../public/imagens/mosquito.png';
        gnat.className = `${this.gnatSizeRandom()} ${this.gnatSideRandom()}`;
        gnat.id = 'gnat';
        gnat.style.top = `${positionY}px`;
        gnat.style.left = `${positionX}px`;
        gnat.style.position = 'absolute';
        gnat.onclick = () => {
            document.getElementById('gnat').remove();
        }

        document.body.appendChild(gnat);

    }

    gnatSizeRandom() {

        let style = Math.floor(Math.random() * 3);

        switch (style) {
            case 0:
                return 'gnat0';
                break;
            case 1:
                return 'gnat1';
                break;
            case 2:
                return 'gnat2';
        }
    }

    gnatSideRandom() {

        let style = Math.floor(Math.random() * 2);

        switch (style) {
            case 0:
                return 'sideA';
                break;
            case 1:
                return 'sideB';
                break;
        }
    }

}

let gnatController = new GnatController();