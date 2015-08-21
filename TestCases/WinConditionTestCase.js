/**
 * Created by ntacey on 7/22/2015.
 */

/*********
 *
 * Fixtures:
 *
 * *******
 */

//cardValueArray.splice(cardValueArray.indexOf(cardValueArray[c]), 1); //remove this card value from card array value

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

//fixed hand one -- should return as three of a kind, with value of 73 (60 + 13)
var fHand1 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("2ofspades", "2 of spades", "spades", 1, 1, "black"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("7ofspades", "7 of spades", "spades", 6, 6, "black"),
    new Card("9ofspades", "9 of spades", "spades", 8, 8, "black")];

//fixed hand two -- should return as straight, value of 85 (80 + 5)
var fHand2 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("2ofspades", "2 of spades", "xx", 1, 1, "black"),
    new Card("3ofspades", "3 of spades", "xx", 2, 2, "black"),
    new Card("4ofspades", "4 of spades", "spades", 3, 3, "black"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("6ofspades", "6 of spades", "spades", 5, 5, "black")];

//fixed hand three -- should return as straight, value of 86 (80 + 6)
var fHand3 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("2ofspades", "2 of spades", "spades", 1, 1, "black"),
    new Card("3ofspades", "3 of spades", "xx", 2, 2, "black"),
    new Card("4ofspades", "4 of spades", "xx", 3, 3, "black"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("6ofspades", "6 of spades", "spades", 5, 5, "black"),
    new Card("7ofspades", "7 of spades", "spades", 6, 6, "black")];

//fixed hand four -- should return as four of a kind, value of 153 (140 + 13)
var fHand4 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("aceofdiamonds", "Ace of diamonds", "spades", 13, 52, "red"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("7ofspades", "7 of spades", "spades", 6, 6, "black"),
    new Card("9ofspades", "9 of spades", "spades", 8, 8, "black")];

//fixed hand five -- should return as straight flush, value of 165 (160 + 5)
var fHand5 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("aceofdiamonds", "Ace of diamonds", "spades", 13, 52, "red"),
    new Card("2ofspades", "2 of spades", "spades", 1, 1, "black"),
    new Card("3ofspades", "3 of spades", "spades", 2, 2, "black"),
    new Card("4ofspades", "4 of spades", "spades", 3, 3, "black"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("6ofspades", "6 of spades", "spades", 5, 5, "black")];

//fixed hand 6 -- should return as full house, value of 133 (120 + 13)
var fHand6 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red"),
    new Card("2ofhearts", "2 of hearts", "hearts", 1, 27, "red"),
    new Card("2ofclubs", "2 of spades", "clubs", 1, 14, "black"),
    new Card("4ofspades", "4 of spades", "spades", 3, 3, "black"),
    new Card("5ofspades", "5 of spades", "spades", 4, 4, "black"),
    new Card("6ofspades", "6 of spades", "spades", 5, 5, "black")];

//fixed hand 7 -- should return as three of a kind, value of 73 (60 + 13)
var fHand7 = [new Card("aceofspades", "Ace of spades", "spades", 13, 13, "black"),
    new Card("aceofclubs", "Ace of clubs", "clubs", 13, 26, "black"),
    new Card("aceofhearts", "Ace of hearts", "hearts", 13, 39, "red")];

//fixed hand 8 -- should return as flush, value of 112
var fHand8 = [new Card("2ofspades", "2 of hearts", "spades", 1, 1, "black"),
    new Card("8ofspades", "2 of spades", "spades", 7, 7, "black"),
    new Card("4ofspades", "4 of spades", "spades", 3, 3, "black"),
    new Card("kingofspades", "King of spades", "spades", 12, 12, "black"),
    new Card("6ofspades", "6 of spades", "spades", 5, 5, "black")];

//fixed hand 9 -- should return as a two pair, value 52
var fHand9 = [new Card("kingofdiamonds", "King of diamonds", "diamonds", 12, 0, "red"),
    new Card("queenofhearts", "Queen of hearts", "hearts", 11, 0, "red"),
    new Card("7ofspades", "7 of spades", "spades", 6, 0, "black"),
    new Card("kingofdiamonds", "King of diamonds", "diamonds", 12, 0, "red"),
    new Card("queenofhearts", "Queen of hearts", "hearts", 11, 0, "red")];

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

/*
 *Drawing cards and dealing out 3 hands..
 */
var drawnCard;
drawnCard = drawCard();
pHand1.push(drawnCard);
allHands.push(drawnCard);

var drawnCard2;
drawnCard2 = drawCard();
pHand1.push(drawnCard2);
allHands.push(drawnCard2);

var drawnCard3;
drawnCard3 = drawCard();
pHand2.push(drawnCard3);
allHands.push(drawnCard3);

var drawnCard4;
drawnCard4 = drawCard();
pHand2.push(drawnCard4);
allHands.push(drawnCard4);

var drawnCard5;
drawnCard5 = drawCard();
pHand3.push(drawnCard5);
allHands.push(drawnCard5);

var drawnCard6;
drawnCard6 = drawCard();
pHand3.push(drawnCard6);
allHands.push(drawnCard6);

/*********************************
 *
 * Test case for getting the
 * high card, tests for
 * highest card of each player
 * hand, as well as highest card
 * of all hands
 *
 * *******************************
 */

function testGetHighCard() {

    function getHighCard(array) {
        var highCard = array[0];

        for (var c = 0; c < array.length; c++) {

            if(array[c].value == 1){
                highCard = array[c];
                break;
            }
            else if(highCard.value == 1){
                break;
            }
            if (array[c].value > highCard.value) {
                highCard = array[c];
            }
        }

        return highCard;
    }

    p1HighCard = getHighCard(pHand1);
    p2HighCard = getHighCard(pHand2);
    p3HighCard = getHighCard(pHand3);
    hcWinner = getHighCard(allHands);

    console.log("Player 1's high card is " + p1HighCard.cardName);
    console.log("Player 2's high card is " + p2HighCard.cardName);
    console.log("Player 3's high card is " + p3HighCard.cardName);
    console.log("Highest Card is " + hcWinner.cardName);
}

function testSeekPair(){
    var highestCardValue = 0;

    var drawnCard5;
    drawnCard5 = drawCard();
    pHand1.push(drawnCard5);
    pHand2.push(drawnCard5);
    pHand3.push(drawnCard5);
    allHands.push(drawnCard5);

    var drawnCard6;
    drawnCard6 = drawCard();
    pHand1.push(drawnCard6);
    pHand2.push(drawnCard6);
    pHand3.push(drawnCard6);
    allHands.push(drawnCard6);

    var drawnCard7;
    drawnCard7 = drawCard();
    pHand1.push(drawnCard7);
    pHand2.push(drawnCard7);
    pHand3.push(drawnCard7);
    allHands.push(drawnCard7);

    function seekPair(array){
        var cardValueArray = [];

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        for (var c = 0; c < array.length; c++) {
            var x = cardValueArray[c];
            cardValueArray.splice(cardValueArray.indexOf(cardValueArray[c]), 1);
            if (cardValueArray.indexOf(x) > -1) {
                highestCardValue = x;
                return true;
            }
        }

        return false;
    }

    console.log(seekPair(pHand1));
    console.log(highestCardValue);
    console.log("Player 1's hand " + pHand1[0].cardUIName + ", " + pHand1[1].cardUIName + ", " + pHand1[2].cardUIName + ", " + pHand1[3].cardUIName + ", " + pHand1[4].cardUIName);
}




function testGetRank() {
    var drawnCard5;
    drawnCard5 = drawCard();
    pHand1.push(drawnCard5);
    pHand2.push(drawnCard5);
    pHand3.push(drawnCard5);
    allHands.push(drawnCard5);

    var drawnCard6;
    drawnCard6 = drawCard();
    pHand1.push(drawnCard6);
    pHand2.push(drawnCard6);
    pHand3.push(drawnCard6);
    allHands.push(drawnCard6);

    var drawnCard7;
    drawnCard7 = drawCard();
    pHand1.push(drawnCard7);
    pHand2.push(drawnCard7);
    pHand3.push(drawnCard7);
    allHands.push(drawnCard7);

    var highestCardValue = 0; //The highest value of the card in the winning set
    //this will be set in the seek functions
    //acts as a multiplier to figure out draws

    /*******************************************************************************
     *
     *   This function will find the highest card given an array
     *
     *      Give it an array such as a players hand, or all players cards to
     *      find which is the highest card
     *
     *      This should be the lowest priority in the algorithm that checks all
     *      win conditions. Meaning this is used to determine the winner shall
     *      all other win criteria not met.
     *
     *      May be a little buggy and may require refactoring down the road, due
     *      to the if-else statement. Will not handle multiple aces because it
     *      breaks from the loop as soon as it finds one.
     *
     *      Update 7.23: Needs to be tested as the algorithm was changed, due to
     *      changing the value of cards
     *
     * *****************************************************************************
     */
    function getHighCard(array) {
        var highCard = array[0];

        for (var c = 0; c < array.length; c++) {

            if (array[c].value > highCard.value) {
                highCard = array[c];
            }
        }

        highestCardValue = highCard.value;
        return highCard;
    }

    function seekPair(array){
        var cardValueArray = [];

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        for (var c = 0; c < array.length; c++) {
            var x = cardValueArray[c];
            cardValueArray.splice(cardValueArray.indexOf(cardValueArray[c]), 1);
            if (cardValueArray.indexOf(x) > -1) {
                highestCardValue = x;
                return true;
            }
        }

        return false;
    }

    function seekTwoPair(array){
        var cardValueArray = [];
        var tempHighestCardValue = 0;
        var iFoundPair = 0;

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        for (var c = 0; c < array.length; c++) {
            var x = cardValueArray[c];
            cardValueArray.splice(cardValueArray.indexOf(cardValueArray[c]), 1);
            if (cardValueArray.indexOf(x) > -1) {
                iFoundPair++;
                if (x > tempHighestCardValue){
                    tempHighestCardValue = x;
                }
            }
        }

        if (iFoundPair >= 2){
            highestCardValue = tempHighestCardValue;
            return true;
        }

        return false;
    }

    function seekThreeOfAKind(array){
        var cardValueArray = [];
        var tempX = 0; //will hold our temporary x value
        var iFoundX = 0;

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        cardValueArray.sort(function(a, b){return b-a}); //should sort card value array by descending order

        for (var c = 0; c < cardValueArray.length; c++) {
            var x = cardValueArray[c];

            if (x === tempX) {
                iFoundX++;
                highestCardValue = x;
                if (iFoundX === 2){
                    return true;
                }
            }
            else{
                iFoundX = 0;
                tempX = x;
            }
        }

        return false;
    }
    /*
     * !!!!!! BUG !!!!!!
     *
     *   works, but if there's a straight of more than 5 cards, will give the highest card value as
     *   the fifth cards value, not the correct highest card value, which would be the value of the
     *   last card in the straight.
     *
     */
    function seekStraight(array){
        var cardValueArray = [];
        var tempX = 0; //will hold our temporary x value
        var iFoundNum = 0;

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        cardValueArray.sort(function(a, b){return a-b}); //sort card value array by ascending order;

        for (var c = 0; c < cardValueArray.length; c++) {
            if(c === 0){
                tempX = cardValueArray[0];
            } else {
                var x = cardValueArray[c];
                if(x === tempX + 1){
                    iFoundNum++;
                    if(iFoundNum >= 4){
                        highestCardValue = x;
                        return true;
                    }
                } else {
                    iFoundNum = 0;
                }

                tempX = x;
            }

        }

        return false;
    }

    function seekFlush(array){
        var tempX = 0; //will hold our temporary x value
        var iFoundX = 0;

        for(Card in array){
            var x = array[Card];

            if (x.suit === tempX) {
                iFoundX++;
                if(x.value > highestCardValue){
                    highestCardValue = x.value;
                }
            }
            else{
                tempX = x.suit;
            }

            if (iFoundX >= 4){
                return true;
            }

        }

        highestCardValue = 0;
        return false;
    }

    function seekFullHouse(array){
        var tempHold = []; //will hold the cards taken out of the hand, to put them back in after it tries to
        //find the two pair

        if(seekThreeOfAKind(array)){ //check to see if hand passes seek three of a kind
            //if it does, loop through all the cards in this hand
            for (Card in array) {
                if (array[Card].value === highestCardValue) { //if the cards value is the highestcardvalue, which
                    //will be set when the function checks for the three of a kind
                    tempHold.push(array[Card]); //then add this card to a temporary array
                }
            }

            // !!!!!This is whats causing the code to break!!!!!
            //loop through these cards again..
            for(Card in tempHold) {
                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card] + );
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }

                for (Card in array) {
                    //and any card that is the same as a card in the temporary array..
                    if (array[Card] === tempHold[Card]) {
                        console.log(array[Card]);
                        array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
                        break;
                    }
                }
            }

            if(seekTwoPair(array)){
                //return cards back into hand from the temporary array..
                for (Card in tempHold){
                    array.push(array[Card]);
                }
                return true;
            }
        }

        //return cards back into hand..
        for (Card in tempHold){
            array.push(array[Card]);
        }
        highestCardValue = 0;
        return false;
    }

    function seekFourOfAKind(array){
        var cardValueArray = [];
        var tempX = 0; //will hold our temporary x value
        var iFoundX = 0;

        for (var c = 0; c < array.length; c++) {
            cardValueArray.push(array[c].value);
        }

        cardValueArray.sort(function(a, b){return b-a}); //sort card value array by descending order

        for (var c = 0; c < cardValueArray.length; c++) {
            var x = cardValueArray[c];

            if (x === tempX) {
                iFoundX++;
                highestCardValue = x;
                if (iFoundX >= 3){
                    return true;
                }
            }
            else{
                iFoundX = 0;
                tempX = x;
            }

        }

        return false;
    }

    function seekStraightFlush(array){
        return (seekStraight(array) && seekFlush(array))
    }

    /*******************************************************************************
     *
     *  This function will return the hands ranking.
     *
     *      Higher ranking numbers are awarded to the higher value hands. For
     *      instance if seekStraightFlush returns true, it will return a higher
     *      rank number than say if seekTwoPair returns true.
     *
     *      Uses the variable highestCardValue as a sort of multiplier, which
     *      will figure out ties (not the kicker)
     *
     *******************************************************************************
     */
    function getRank(array){
        if(seekStraightFlush(array)){
            return (160 + highestCardValue);
        } else if (seekFourOfAKind(array)){
            return (140 + highestCardValue);
        } else if (seekFullHouse(array)) {
            return (120 + highestCardValue);
        } else if (seekFlush(array)) {
            return (100 + highestCardValue);
        } else if (seekStraight(array)) {
            return (80 + highestCardValue);
        } else if (seekThreeOfAKind(array)) {
            return (60 + highestCardValue);
        } else if (seekTwoPair(array)){
            return (40 + highestCardValue);
        } else if (seekPair(array)) {
            return (20 + highestCardValue);
        } else {
            getHighCard(array);
            return highestCardValue;
        }
    }

    /*******************************************************************************
     *
     *  This function finds the hand that one the round for 3 hands
     *
     *      It will then get rank on all the hands individually, and assess who
     *      has the highest ranking
     *
     *      If a tie occurs, it will get rank again on all of the hands, which
     *      should have the removed cards from the previous go.
     *
     *******************************************************************************
     */
    function find3HandWinner(hand1, hand2, hand3){
        var h1Rank = getRank(hand1);
        var h2Rank = getRank(hand2);
        var h3Rank = getRank(hand3);

        console.log(h1Rank + " " + h2Rank + " " + h3Rank);
        if ((h1Rank === h2Rank) && (h1Rank === h3Rank)){
            console.log("Winner between all three hands");
            return true;
        }

        if(h1Rank > h2Rank){
            if(h1Rank > h3Rank) {
                console.log("Hand 1 is the winner");
            } else if(h1Rank === h3Rank) {
                var h1Rank2 = getRank(hand1);
                var h3Rank2 = getRank(hand3);

                if (h1Rank2 > h3Rank2){
                    console.log("Hand 1 is the winner")
                } else if (h1Rank2 === h3Rank2){
                    console.log("Tie between hand 1 and 3");
                } else console.log("Hand 3 is the winner")

            } else console.log("Hand 3 is the winner")
        } else if (h1Rank === h2Rank){
            if(h3Rank > h1Rank) {
                console.log("Hand 3 is the winner")
            } else {
                var h1Rank2 = getRank(hand1);
                var h2Rank2 = getRank(hand2);

                if (h1Rank2 > h2Rank2){
                    console.log("Hand 1 is the winner")
                } else if (h1Rank2 === h2Rank2){
                    console.log("Tie between hand 1 and 2");
                } else console.log("Hand 2 is the winner")

            }
        } else if (h2Rank > h3Rank){
            console.log("Hand 2 is the winner")
        } else if (h2Rank === h3Rank) {
            var h2Rank2 = getRank(hand2);
            var h3Rank2 = getRank(hand3);

            if (h2Rank2 > h3Rank2){
                console.log("Hand 2 is the winner")
            } else if (h2Rank2 === h3Rank2){
                console.log("Tie between hand 2 and 3");
            } else console.log("Hand 3 is the winner")
        }
        else {
            console.log("Hand 3 is the winner")
        }

    }

    var f1Rank = getRank(fHand1); //should be 73
    //var f2Rank = getRank(fHand2); //should be 85
    //var f3Rank = getRank(fHand3); //should be 86
    //var f4Rank = getRank(fHand4); //should be 153
    //var f5Rank = getRank(fHand5); //should be 165
    //var f6Rank = getRank(fHand6); //should be 133
    //var f7Rank = getRank(fHand7); //should be 73
    //var f8Rank = getRank(fHand8); //should be 112
    //var f9Rank = getRank(fHand9); //should be 32

    //var p1Rank = getRank(pHand1);
    //var p2Rank = getRank(pHand2);
    //var p3Rank = getRank(pHand3);

    //var f1Rank2 = getRank(fHand1); //73..

    //console.log("Player 1's hand " + pHand1[0].cardUIName + ", " + pHand1[1].cardUIName + ", " + pHand1[2].cardUIName + ", " + pHand1[3].cardUIName + ", " + pHand1[4].cardUIName);
    //console.log("Player 2's hand " + pHand2[0].cardUIName + ", " + pHand2[1].cardUIName + ", " + pHand2[2].cardUIName + ", " + pHand2[3].cardUIName + ", " + pHand2[4].cardUIName);
    //console.log("Player 3's hand " + pHand3[0].cardUIName + ", " + pHand3[1].cardUIName + ", " + pHand3[2].cardUIName + ", " + pHand3[3].cardUIName + ", " + pHand3[4].cardUIName);
    //console.log("-------------------------------");
    //console.log("Player 1's Rank " + p1Rank);
    //console.log("Player 2's Rank " + p2Rank);
    //console.log("Player 3's Rank " + p3Rank);
    //console.log("-------------------------------");

    console.log("Fixed hand 1's Rank " + f1Rank);
    //console.log("Fixed hand 1's Rank " + f1Rank2);
    /*
     console.log("Fixed hand 2's Rank " + f2Rank);
     console.log("Fixed hand 3's Rank " + f3Rank);
     console.log("Fixed hand 4's Rank " + f4Rank);
     console.log("Fixed hand 5's Rank " + f5Rank);
     console.log("Fixed hand 6's Rank " + f6Rank);
     console.log("Fixed hand 7's Rank " + f7Rank);
     console.log("Fixed hand 8's Rank " + f8Rank);
     console.log("Fixed hand 9's Rank " + f9Rank);
     console.log("-------------------------------");
     console.log(fHand1)
     */

}

testGetRank();