function startGame() {
    let nivel = document.querySelector('#nivel');
    let btnStart = document.querySelector('#start');

    btnStart.addEventListener('click', event => {

        if (nivel.value == '') {
            document.querySelector('#modalTitle').innerHTML = 'Selecione um nível de jogo';
            document.querySelector('#modalTitle').className = 'modal-title text-danger';
            document.querySelector('#modalBody').innerHTML = 'Selecione um nível para iniciar o jogo!';
            document.querySelector('#modalBtn').className = 'btn btn-danger';
            document.querySelector('#modalBtn').innerHTML = 'Voltar';
            $('#alertModal').modal('show');
            return false;
        }

        window.location.href = "./views/app.html?" + nivel.value;

    });

}

startGame();