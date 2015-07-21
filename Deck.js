/**
 * Created by ntacey on 7/10/2015.
 */


function card (cardName, suit, value, deckValue, color) {
    this.cardName = cardName;
    this.suit = suit;
    this.value = value;
    this.deckValue = deckValue;
    this.color = color;
}

var deck = [];

var allHands = [];
var pHand1 = [];
var pHand2 = [];
var pHand3 = [];
var pHand4 = [];
var pHand5 = [];
var pHand6 = [];
var pHand7 = [];
var pHand8 = [];
var discard = [];

var deckIndex = 0;
for (var i = 1; i <= 52; i++){
    if (i <= 13) {
        deck[deckIndex] = new card("", "spade", i, i, "black");
    }
    else if(i > 13 && i <= 26){
        deck[deckIndex] = new card("", "club", i - 13, i, "black");
    }
    else if(i > 26 && i <= 39){
        deck[deckIndex] = new card("", "heart", i - 26, i, "red");
    }
    else {
        deck[deckIndex] = new card("", "diamond", i - 39, i, "red");
    }
    deckIndex++
}

tempCardNum = 0;

for (card in deck) {
    hCardNum = deck[tempCardNum].value;

    if(hCardNum % 13 === 0){
        deck[tempCardNum].cardName = "kingof" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 12 === 0){
        deck[tempCardNum].cardName = "queenof" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 11 === 0){
        deck[tempCardNum].cardName = "jackof" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 10 === 0){
        deck[tempCardNum].cardName = "10of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 9 === 0){
        deck[tempCardNum].cardName = "9of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 8 === 0){
        deck[tempCardNum].cardName = "8of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 7 === 0){
        deck[tempCardNum].cardName = "7of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 6 === 0){
        deck[tempCardNum].cardName = "6of" + deck[tempCardNum].suit + "s";
}
    else if(hCardNum % 5 === 0){
        deck[tempCardNum].cardName = "5of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 4 === 0){
        deck[tempCardNum].cardName = "4of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 3 === 0){
        deck[tempCardNum].cardName = "3of" + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 2 === 0){
        deck[tempCardNum].cardName = "2of" + deck[tempCardNum].suit + "s";
    }
    else {
        deck[tempCardNum].cardName = "aceof"  + deck[tempCardNum].suit + "s";
    }
    tempCardNum++;
}

//Fisher-Yates shuffle algorithm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var sDeck = shuffle(deck); //sDeck will be our shuffled deck

function drawCard(){
    drawnCard = sDeck[0];
    if(drawnCard != null){
        sDeck.splice(0, 1); //remove drawnCard from deck
        return drawnCard;
    }
    else{
        //TODO create a handler for null drawn card
    }
}

function addToPile(array) {
    array.splice(0, 1, drawCard());
}

