
var player = 1;

var turnNames = ["O", "X"];

var nextPlayer = 2;

var board = [];

var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


function creategame() {


    //UI for the game. Setting up the grid and divs for the different elements

    var container = document.createElement("div");
    container.id = "container100";
    container.className = "container d-flex flex-column mt-1 align-self-center";

    var titlerow = document.createElement("div");
    titlerow.setAttribute('class', 'row mt-5 mb-3 display-3 justify-content-center');
    titlerow.innerHTML = "TIC-TAC-TOE";

    var boardrow = document.createElement("div");
    boardrow.setAttribute('class', 'row d-flex flex-grow-1 justify-content-center');


    //loop creating the 9 column divs for the board
    var i = 0
    while (i < 9) {
        var tile = document.createElement("div");
        tile.addEventListener('click', playerstate);
        tile.setAttribute('class', 'col-4 border display-4 justify-content-center mx-0');
        tile.id = i;
        board.push(0);
        boardrow.appendChild(tile);


        console.log(board);
        i++;
    }

    var infocontainer = document.createElement("div");
    infocontainer.id = "infocontainer";
    infocontainer.className = "container-fluid d-flex flex-column mt-1 align-self-center";

    var inforow = document.createElement("div");
    inforow.className = "row d-flex flex-grow-1";

    var infocol1 = document.createElement("div");
    infocol1.className = "col h1 align-text-bottom";
    infocol1.innerHTML = "Player " + "<span id='turntxt'></span> " + "'s turn"

    var infocol2 = document.createElement("div");
    infocol2.className = "col flex-grow-1";

    var infocol3 = document.createElement("div");
    infocol3.className = "col flex-grow-1";

    var resetbtn = document.createElement("button");
    resetbtn.className = "btn btn-primary btn-lg btn-block mt-3";
    resetbtn.id = 'resetappear';
    resetbtn.innerHTML = "RESET";
    resetbtn.addEventListener('click', resetstate,);



    //appending up the chain, then up to the html
    container.appendChild(titlerow);
    container.appendChild(boardrow);
    infocol2.appendChild(resetbtn);
    inforow.appendChild(infocol1);
    inforow.appendChild(infocol2);
    inforow.appendChild(infocol3);
    infocontainer.appendChild(inforow);

    document.getElementById('app').appendChild(container);
    document.getElementById('app').appendChild(infocontainer);



}

function playerstate() {

    if (player === 1) {
        player = 2;
        nextPlayer = 1;
        board[`${this.id}`] = 1;
        console.log(board);
    } else {
        player = 1;
        nextPlayer = 2;
        board[`${this.id}`] = 2;
        // board['tile'] = 2;   
        console.log(board);
    }
    this.innerHTML = turnNames[player - 1];
    document.getElementById('turntxt').innerHTML = turnNames[nextPlayer - 1];
    this.removeEventListener('click', playerstate);
    // board['tile'] = player;
     resetDisplay();
    winner_tie();

}

function resetstate() {

    document.getElementById('app').innerHTML = " ";

    player = 1;

    nextPlayer = 2;
    creategame();

    // document.getElementById('app').reset();

}

function checkValues(a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        return 0;
    }
    var sum = a + b + c;
    if (sum == 6) {
        return 1;
    }
    if (sum == 3) {
        return 2;
    }
    return 0;
}

function winner_tie() {

    console.log(board[0] + board[1] + board[2]);


    // loop thru wins
    for (var i = 0; i < wins.length; i++) {
        var a = checkValues(board[wins[i][0]], board[wins[i][1]], board[wins[i][2]]);
        if (a == 1) {
            alert("Player O won!");
            endgame();


        }
        else if (a == 2) {
            alert("Player X won!")
            endgame();
        }

        else if (board[0] + board[1] + board[2] + board[3] + board[4] +board[5] +board[6] +board[7] +board[8] == 13 ) {
            alert("It's a Tie!");
            endgame();

        }
      

        }
    }



    function resetDisplay ( ) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        var sum = board.reduce(reducer);
        if (sum > 11){

            document.getElementById("resetappear").style.display = "block";

        }
       

    }



function endgame() {
    document.getElementById('app').innerHTML = " ";

    player = 1;

    nextPlayer = 2;

    board = [];

    resetstate();

    creategame();


}












    












