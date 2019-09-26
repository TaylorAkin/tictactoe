
var player = 0;





function creategame() {


    //UI for the game. Setting up the grid and divs for the different elements

    var container = document.createElement("div");
    container.id = "container100";
    container.className = "container d-flex flex-column mt-1 align-self-center";

    var titlerow = document.createElement("div");
    titlerow.setAttribute('class', 'row mt-5 ml-5 mb-3 display-3');
    titlerow.innerHTML = "TIC-TAC-TOE";

    var boardrow = document.createElement("div");
    boardrow.setAttribute('class', 'row d-flex flex-grow-1');


    //loop creating the 9 column divs for the board
    var i = 0
    while (i < 9) {
        var tile = document.createElement("div");
        tile.addEventListener('click', playerstate);
        tile.setAttribute('class', 'col-4 flex-grow-1 border');
        boardrow.appendChild(tile);


        console.log(i);
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
    resetbtn.innerHTML = "RESET";

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
    if (player === 0) {
        player = 1;
        this.innerHTML = 'X';
        document.getElementById('turntxt').innerHTML = 'O';
    } else {
        player = 0;
        this.innerHTML = 'O';
        document.getElementById('turntxt').innerHTML = 'X';
    }

}
