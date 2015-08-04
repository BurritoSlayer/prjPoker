/**
 * Created by ntacey on 7/13/2015.
 */

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.3.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var script = document.createElement('script');
script.src = 'JCanvas.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var phsize1 = 0; //size of player 1s hand
var phsize2 = 0; //size of player 2s hand
var phsize3 = 0; //size of player 3s hand
var ccsize = 0; //number of community cards
var csindex = 0; //index size of all cards on table
var pmarker = 0; //marker of what phase were on
var cCards = []; //array holding community cards

$(document).ready(function() {
    //Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();

    $('canvas').drawArc({ //draw outer part of table on canvas
        layer: true,
        name: 'mainLayer',
        fillStyle: '#5C2E00',
        strokeStyle: '#333',
        strokeWidth: 2,
        x: 650, y: 100,
        radius: 670
    }).drawArc({
        layer: true,
        name: 'mainLayer2',
        fillStyle: '#007300',
        x: 650, y: 100,
        radius: 650
    }).drawArc({ //draw inner part of table on canvas
        layer: true,
        name: 'mainLayer3',
        fillStyle: 'green',
        x: 650, y: 100,
        radius: 550
    }).drawImage({ //draw the deck on canvas
        layer: true,
        name: 'mainLayer4',
        source: 'img/deck.png',
        x: 650, y: 100,
        click: function() {
            if(pmarker === 0) {

                var drawnCard;
                drawnCard = drawCard();

                $('canvas').drawImage({
                    layer: true,
                    name: '1PHand1',
                    source: 'img/' + drawnCard.cardName + '.png',
                    x: 600, y: 525,
                })
                pHand1.push(drawnCard);
                allHands.push(drawnCard);
                console.log("All hands position 0 " + allHands[0]);

                var drawnCard2;
                drawnCard2 = drawCard();
                pHand1.push(drawnCard2);

                $('canvas').drawImage({
                    layer: true,
                    name: '1PHand2',
                    source: 'img/' + drawnCard2.cardName + '.png',
                    x: 700, y: 525,
                })
                allHands.push(drawnCard2);
                console.log("All hands position 1 " + allHands[1]);

                var drawnCard3;
                drawnCard3 = drawCard();
                pHand2.push(drawnCard3);

                $('canvas').drawImage({
                    layer: true,
                    name: '2PHand1',
                    source: 'img/' + drawnCard3.cardName + '.png',
                    x: 200, y: 100,
                })
                allHands.push(drawnCard3);
                console.log("All hands position 2 " + allHands[2]);

                var drawnCard4;
                drawnCard4 = drawCard();
                pHand2.push(drawnCard4);

                $('canvas').drawImage({
                    layer: true,
                    name: '2PHand2',
                    source: 'img/' + drawnCard4.cardName + '.png',
                    x: 300, y: 100,
                })
                allHands.push(drawnCard4);
                console.log("All hands position 3 " + allHands[3]);

                var drawnCard5;
                drawnCard5 = drawCard();
                pHand3.push(drawnCard5);

                $('canvas').drawImage({
                    layer: true,
                    name: '3PHand1',
                    source: 'img/' + drawnCard5.cardName + '.png',
                    x: 1040, y: 100,
                })
                allHands.push(drawnCard5);
                console.log("All hands position 4 " + allHands[4]);

                var drawnCard6;
                drawnCard6 = drawCard();
                pHand3.push(drawnCard6);

                $('canvas').drawImage({
                    layer: true,
                    name: '3PHand2',
                    source: 'img/' + drawnCard6.cardName + '.png',
                    x: 1140, y: 100,
                })
                allHands.push(drawnCard6);
                console.log("All hands position 0 " + allHands[1]);

                $('canvas').drawImage({
                    layer: true,
                    name: 'highCard',
                    source: 'img/highcard.png',
                    x: 650, y: 400,
                    click: function(){
                        $('canvas').getLayer('mainLayer1');
                        $('canvas').getLayer('mainLayer2');
                        $('canvas').getLayer('mainLayer3');
                        $('canvas').getLayer('mainLayer4');

                        var highestCard = getHighCard(allHands);
                        console.log(highestCard);
                        window.alert("Highest Card is " + highestCard.cardName);
                    }
                })

                pmarker++;

            } else if (pmarker === 1){
                $('canvas').getLayer('mainLayer1');
                $('canvas').getLayer('mainLayer2');
                $('canvas').getLayer('mainLayer3');
                $('canvas').getLayer('mainLayer4');
                $('canvas').getLayer('1PHand1');
                $('canvas').getLayer('1PHand2');
                $('canvas').getLayer('2PHand1');
                $('canvas').getLayer('2PHand2');
                $('canvas').getLayer('3PHand1');
                $('canvas').getLayer('3PHand2');

                var drawnCard7;
                drawnCard7 = drawCard()
                pHand1.push(drawnCard7);
                pHand2.push(drawnCard7);
                pHand3.push(drawnCard7);
                allHands.push(drawnCard7);
                cCards.push(drawnCard7);

                $('canvas').drawImage({
                    layer: true,
                    name: 'flop1',
                    source: 'img/' + drawnCard7.cardName + '.png',
                    x: 450, y: 325,
                })

                var drawnCard8;
                drawnCard8 = drawCard();
                allHands.push(drawnCard8);
                pHand1.push(drawnCard8);
                pHand2.push(drawnCard8);
                pHand3.push(drawnCard8);
                cCards.push(drawnCard8);

                $('canvas').drawImage({
                    layer: true,
                    name: 'flop2',
                    source: 'img/' + drawnCard8.cardName + '.png',
                    x: 550, y: 325,
                })

                var drawnCard9;
                drawnCard9 = drawCard();
                pHand1.push(drawnCard9);
                pHand2.push(drawnCard9);
                pHand3.push(drawnCard9);
                allHands.push(drawnCard9);
                cCards.push(drawnCard9);

                $('canvas').drawImage({
                    layer: true,
                    name: 'flop3',
                    source: 'img/' + drawnCard9.cardName + '.png',
                    x: 650, y: 325,
                })

                pmarker++;
            } else if(pmarker === 2) {
                $('canvas').getLayer('mainLayer1');
                $('canvas').getLayer('mainLayer2');
                $('canvas').getLayer('mainLayer3');
                $('canvas').getLayer('mainLayer4');
                $('canvas').getLayer('1PHand1');
                $('canvas').getLayer('1PHand2');
                $('canvas').getLayer('2PHand1');
                $('canvas').getLayer('2PHand2');
                $('canvas').getLayer('3PHand1');
                $('canvas').getLayer('3PHand2');

                var drawnCard10;
                drawnCard10 = drawCard()
                pHand1.push(drawnCard10);
                pHand2.push(drawnCard10);
                pHand3.push(drawnCard10);
                allHands.push(drawnCard10);
                cCards.push(drawnCard10);

                $('canvas').drawImage({
                    layer: true,
                    name: 'turnCard',
                    source: 'img/' + drawnCard10.cardName + '.png',
                    x: 750, y: 325,
                })

                $('canvas').getLayer('mainLayer1');
                $('canvas').getLayer('mainLayer2');
                $('canvas').getLayer('mainLayer3');
                $('canvas').getLayer('mainLayer4');
                pmarker++;
            } else if(pmarker === 3) {
                $('canvas').getLayer('mainLayer1');
                $('canvas').getLayer('mainLayer2');
                $('canvas').getLayer('mainLayer3');
                $('canvas').getLayer('mainLayer4');
                $('canvas').getLayer('1PHand1');
                $('canvas').getLayer('1PHand2');
                $('canvas').getLayer('2PHand1');
                $('canvas').getLayer('2PHand2');
                $('canvas').getLayer('3PHand1');
                $('canvas').getLayer('3PHand2');

                var drawnCard11;
                drawnCard11 = drawCard()
                pHand1.push(drawnCard11);
                pHand2.push(drawnCard11);
                pHand3.push(drawnCard11);
                allHands.push(drawnCard11);
                cCards.push(drawnCard11);

                $('canvas').drawImage({
                    layer: true,
                    name: 'riverCard',
                    source: 'img/' + drawnCard11.cardName + '.png',
                    x: 850, y: 325,
                })

                pmarker++;
            } else {
                pmarker = 0;
            }
        }
    })
});