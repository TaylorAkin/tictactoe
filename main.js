
function creategame() {


//creating UI tags to HTML, outlining the board with divs

    var container = document.createElement("div");
    container.id = "container100";
    container.className = "container d-flex flex-column mt-1 align-self-center";

    var titlerow = document.createElement("div");
    titlerow.setAttribute('class','row d-flex flex-grow-1');

    var row = document.createElement("div");
    row.setAttribute('class','row d-flex flex-grow-1');
    
    
    //loop creating the 9 column divs
    var i= 0
    while (i < 9) {
        var tile = document.createElement("div");
        tile.setAttribute('class','col-4 flex-grow-1 border');
        tile.innerHTML= 'hello';
        row.appendChild(tile);
        
        
        console.log(i);
        i++;
    }
    
    container.appendChild(titlerow);
    container.appendChild(row);
    document.body.appendChild(container);
    document.body.appendChild(title);

}