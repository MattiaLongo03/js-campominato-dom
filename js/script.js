const playButton = document.getElementById('play');
const eleSquares = document.querySelector('.box');
playButton.addEventListener('click', function() {
    eleSquares.innerHTML = "";  
    const difficulty = document.getElementById("difficulty").value;
    if (difficulty == 1) {
        howMany = 100;
    }
    else if (difficulty == 2) {
        howMany = 81;
    }
    else if (difficulty == 3) {
        howMany = 49;
    }
    for (let i = 1; i <= howMany; i++) {

        if (difficulty == 1){
            eleSquares.innerHTML += `<div class="sq easy">${i}</div>`;
        }
        else if (difficulty == 2){
            eleSquares.innerHTML += `<div class="sq medium">${i}</div>`;
        }
        else if (difficulty == 3){
            eleSquares.innerHTML += `<div class="sq hard">${i}</div>`;
        }  
    }
    const square = document.querySelectorAll('.sq');

    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                square[i].classList.add('selected');
                console.log("Hai selezionato " + (i+1));
            }
        )
    }
    var mines = [];

    while(mines.length < 16) {
        var numMina = Math.floor(Math.random() * howMany) + 1;
        if(mines.indexOf(numMina) === -1) {
            mines.push(numMina);
        }
    }
    
    console.log("Le mine sono " + mines);
    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                if(mines.includes(i+1)) {
                    square[i].classList.add('esplosa');
                    console.log("Hai perso");
                    eleSquares.innerHTML += `<div class="endgame">Hai perso!</div>`;
                }
            }
        )
    }
    for (let i = 0; i < howMany; i++) {
        square[i].addEventListener('click', 
            function() {
                let victory = document.querySelectorAll('.selected');
                if(victory.length === howMany - 16 && document.querySelectorAll('.esplosa').length === 0){
                    eleSquares.innerHTML += `<div class="endgame">Hai vinto!</div>`;
                }
            }
        )
    }
    const showButton = document.getElementById('show');
    showButton.addEventListener('click', 
        function() {
            for(i=0; i<16; i++) {
                square[mines[i]-1].classList.toggle('mostra-mine');
            }
        }
    )
});