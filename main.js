
function creategame() {


//creating UI tags to HTML, outlining the board with divs

    var container = document.createElement("div");
    container.id = "container100";
    container.className = "container d-flex flex-column mt-1 align-self-center";

    var titlerow = document.createElement("div");
    titlerow.setAttribute('class','row mt-5 ml-5 mb-3 display-3');
    titlerow.innerHTML = "TIC-TAC-TOE";

    var boardrow = document.createElement("div");
    boardrow.setAttribute('class','row d-flex flex-grow-1');
    
    
    //loop creating the 9 column divs
    var i= 0
    while (i < 9) {
        var tile = document.createElement("div");
        tile.setAttribute('class','col-4 flex-grow-1 border');
        tile.innerHTML= 'hello';
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