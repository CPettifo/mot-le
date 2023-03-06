const board = document.querySelector("#board");
let deAccented = "";
let accented = "";
getWord();
drawBoard();
let turnCounter = 0;

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

}