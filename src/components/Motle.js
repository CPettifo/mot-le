let deAccented = "";
let accented = "";
let guessCounter = 0;

drawBoard();
getWord();

function getWord() {
    // Choose a random number between 0 and 9456, this is the index number of the word chosen
    let wordNum = Math.floor(Math.random() * 9456);
    // This opens and sends the contents of un_accented.txt to memory
    let deAccentedRequest = new XMLHttpRequest();
    deAccentedRequest.open('GET', 'utilities/un_accented.txt', false);
    deAccentedRequest.send();
    //Then it reads through and assigns the variable deAccenated 
    //with the corresponding string from the un_accented.txt file
    let deAccentedContent = deAccentedRequest.responseText;
    let lines = deAccentedContent.split('\n');
    deAccented = lines[wordNum];

    //The same below for the accenated file fivers.txt
    let accentedRequest = new XMLHttpRequest();
    accentedRequest.open('get', 'utilities/fivers.txt', false);
    accentedRequest.overrideMimeType('text/plain; charset=utf-8');
    accentedRequest.send();

    let accentedContent = accentedRequest.responseText;
    lines = accentedContent.split('\n');
    accented = lines[wordNum];
    console.log(wordNum);
    console.log(accented, deAccented);
}

function drawBoard() {
    //Select the board div from the HTML
    const board = document.querySelector("#board");
    word = "motle"
    
    if (board){
        //Loops through to create the 6 rows
        for (let i = 0; i < 6; i++) {
            //Create the row div
            const row = document.createElement("tr");
            row.classList.add("row");
            board.appendChild(row);
            // now to create the 5 boxes per row
            for (let j = 0; j < 5; j++) {
                //create the letterBox div
                const letterBox = document.createElement("td");
                letterBox.classList.add("letterBox");
                row.appendChild(letterBox);
                if(i == 0){
                    letterBox.textContent = word[j];
                }
            }
        }
    } else {
        console.error("Board element not found");
    }
}