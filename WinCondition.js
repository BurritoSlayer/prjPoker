/**
 * Created by ntacey on 7/21/2015.
 */

var drawnCard;
drawnCard = drawCard();
pHand1.push(drawnCard);
allHands.push(drawnCard);

var drawnCard2;
drawnCard = drawCard().cardName;
pHand2.push(drawnCard);
allHands.push(drawnCard);

var drawnCard3;
drawnCard = drawCard().cardName;
pHand3.push(drawnCard);
allHands.push(drawnCard);

var drawnCard4;
drawnCard = drawCard().cardName;
pHand4.push(drawnCard);
allHands.push(drawnCard);

var drawnCard5;
drawnCard = drawCard().cardName;
pHand5.push(drawnCard);
allHands.push(drawnCard);

var drawnCard6;
drawnCard = drawCard().cardName;
pHand6.push(drawnCard);
allHands.push(drawnCard);


function getHighCard(array) {
    var highCard = new card();
    highCard.value = 0;

    for (card in array) {
        if (card.value > highCard.value) {
            highCard = card;
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