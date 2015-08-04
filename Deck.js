/**
 * Created by ntacey on 7/10/2015.
 */


function Card (cardName, cardUIName, suit, value, deckValue, color) {
    this.cardName = cardName; //no space or caps, used for grabbing the graphics
    this.cardUIName = cardUIName; //what the user will see as the card name in the front end
    this.suit = suit;
    this.value = value; //the cards value in relation to its suit
    this.deckValue = deckValue; //the cards value in relation to the deck
    this.color = color; //most likely extraneous in poker, but may be used for future card games
}

var deck = []; //array that will hold all the cards in the deck in order, once we generate them

var allHands = []; //holds all the cards that have been dealt onto the board
var pHand1 = []; //player 1s hand and etc..
var pHand2 = [];
var pHand3 = [];
var pHand4 = [];
var pHand5 = [];
var pHand6 = [];
var pHand7 = [];
var pHand8 = [];
var discard = []; //the discard pile

var deckIndex = 0;

/*
 * Loop through 52 times and create 52 cards, give them a suit, value,
 * deckValue, and color.
 */
for (var i = 1; i <= 52; i++){
    if (i <= 13) {
        deck[deckIndex] = new Card("", "", "spade", i, i, "black");
    }
    else if(i > 13 && i <= 26){
        deck[deckIndex] = new Card("", "", "club", i - 13, i, "black");
    }
    else if(i > 26 && i <= 39){
        deck[deckIndex] = new Card("",  "", "heart", i - 26, i, "red");
    }
    else {
        deck[deckIndex] = new Card("",  "", "diamond", i - 39, i, "red");
    }
    deckIndex++
}

tempCardNum = 0;

/*
 * Here we will set the card name and its UI name
 */
for (Card in deck) {
    hCardNum = deck[tempCardNum].value;
    /*
     * Cases are inverted (descending 13 from 1) because the switch will catch
     * the card values highest denomination first. For example card value 8 would
     * be caught in 2, 4, and 8. This way it stops right once it hits 8
     *
     * 2 of x suit is actually given value 1, because ace needs the highest value,
     * 13, therefore every card number is given a value 1 below it
     */
    if(hCardNum % 13 === 0){
        deck[tempCardNum].cardName = "aceof" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "Ace of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 12 === 0){
        deck[tempCardNum].cardName = "kingof" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "King of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 11 === 0){
        deck[tempCardNum].cardName = "queenof" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "Queen of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 10 === 0){
        deck[tempCardNum].cardName = "jackof" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "Jack of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 9 === 0){
        deck[tempCardNum].cardName = "10of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "10 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 8 === 0){
        deck[tempCardNum].cardName = "9of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "9 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 7 === 0){
        deck[tempCardNum].cardName = "8of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "8 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 6 === 0){
        deck[tempCardNum].cardName = "7of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "7 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 5 === 0){
        deck[tempCardNum].cardName = "6of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "6 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 4 === 0){
        deck[tempCardNum].cardName = "5of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "5 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 3 === 0){
        deck[tempCardNum].cardName = "4of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "4 of " + deck[tempCardNum].suit + "s";
    }
    else if(hCardNum % 2 === 0){
        deck[tempCardNum].cardName = "3of" + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "3 of " + deck[tempCardNum].suit + "s";
    }
    else {
        deck[tempCardNum].cardName = "2of"  + deck[tempCardNum].suit + "s";
        deck[tempCardNum].cardUIName = "2 of " + deck[tempCardNum].suit + "s";
    }
    tempCardNum++;
}

/*
 * Fisher-Yates shuffle algorithm
 */
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
