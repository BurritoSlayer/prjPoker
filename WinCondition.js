/**
 * Created by ntacey on 7/21/2015.
 */
var highestCardValue = 0; //The highest value of the card in the winning set
//this will be set in the seek functions
//acts as a multiplier to figure out draws

var secondHighestCardValue = 0; //will be used to determine ties between hands that have the same highest
//card value

/*******************************************************************************
 *
 *   This Method will find the highest card given an array
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

        console.log("card is " + array[c].value);
        console.log("high card is " + highCard.value);

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

/*
 *returns true for 3 of a kind as well, but should be ok because get Rank will catch
 * 3 of a kind before two pair
 */
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
                console.log("ifoundnum is " + iFoundNum);
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
/*
 * !!!!BUG!!!!
 *
 * If flush has more than 5 cards in it, highest card value will not be set right
 * This is caused by the function to return true before all the cards get tested to
 * see if the highest value
 *
 */
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

        //loop through these cards again..
        for(Card in array) {
            for (Card in tempHold) {
                //and any card that is the same as a card in the temporary array..
                if (tempHold[Card] === array[Card]) {
                    array.splice(array.indexOf(array[Card]), 1); //take them out of the hand
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
/*
 * Might not work correctly, will return true if straight and flush pass, which means they could have different cards
 *
 * In 7 card poker this should be very rare that this ever occurs, but still a possibility which might need to be worked
 * out
 */
function seekStraightFlush(array){
    return (seekStraight(array) && seekFlush(array))
}

/*******************************************************************************
 *
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
 *  !!!Will need to refactor down the road. Need function that finds the
 *     winner of any amount of hands!!!
 *
 *******************************************************************************
 */
function find3HandWinner(hand1, hand2, hand3){
    var h1Rank = getRank(hand1);
    var h2Rank = getRank(hand2);
    var h3Rank = getRank(hand3);

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