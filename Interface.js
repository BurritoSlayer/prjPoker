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
        fillStyle: '#5C2E00',
        strokeStyle: '#333',
        strokeWidth: 2,
        x: 650, y: 100,
        radius: 670
    }).drawArc({
        layer: true,
        fillStyle: '#007300',
        x: 650, y: 100,
        radius: 650
    }).drawArc({ //draw inner part of table on canvas
        layer: true,
        fillStyle: 'green',
        x: 650, y: 100,
        radius: 550
    }).drawImage({ //draw the deck on canvas
        layer: true,
        source: 'img/deck.png',
        x: 650, y: 100,
        click: function() {
            if(pmarker === 0) {

                var drawnCard;
                drawnCard = drawCard().cardName;

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard + '.png',
                    x: 600, y: 525,
                })
                //pHand1.push(drawnCard); no clue why this causes the code to break
                //allHands.push(drawnCard);

                var drawnCard2;
                drawnCard2 = drawCard().cardName;
                pHand1.push(drawnCard2);
                //allHands.push(drawnCard2);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard2 + '.png',
                    x: 700, y: 525,
                })

                var drawnCard3;
                drawnCard3 = drawCard().cardName;
                pHand2.push(drawnCard3);
                //allHands.push(drawnCard3);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard3 + '.png',
                    x: 200, y: 100,
                })

                var drawnCard4;
                drawnCard4 = drawCard().cardName;
                pHand2.push(drawnCard4);
                allHands.push(drawnCard4);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard4 + '.png',
                    x: 300, y: 100,
                })

                var drawnCard5;
                drawnCard5 = drawCard().cardName;
                pHand3.push(drawnCard5);
                //allHands.push(drawnCard5);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard5 + '.png',
                    x: 1040, y: 100,
                })

                var drawnCard6;
                drawnCard6 = drawCard().cardName;
                pHand3.push(drawnCard6);
                //allHands.push(drawnCad6);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard6 + '.png',
                    x: 1140, y: 100,
                })

                pmarker++;
            } else if (pmarker === 1){

                var drawnCard7;
                drawnCard7 = drawCard().cardName;
                cCards.push(drawnCard7);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard7 + '.png',
                    x: 450, y: 325,
                })

                var drawnCard8;
                drawnCard8 = drawCard().cardName;
                cCards.push(drawnCard8);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard8 + '.png',
                    x: 550, y: 325,
                })

                var drawnCard9;
                drawnCard9 = drawCard().cardName;
                cCards.push(drawnCard9);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard9 + '.png',
                    x: 650, y: 325,
                })

                pmarker++;
            } else if(pmarker === 2) {
                var drawnCard10;
                drawnCard10 = drawCard().cardName;
                cCards.push(drawnCard10);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard10 + '.png',
                    x: 750, y: 325,
                })

                pmarker++;
            } else if(pmarker === 3) {
                var drawnCard11;
                drawnCard11 = drawCard().cardName;
                cCards.push(drawnCard11);

                $('canvas').drawImage({
                    layer: true,
                    source: 'img/' + drawnCard11 + '.png',
                    x: 850, y: 325,
                })

                pmarker++;
            } else {
                pmarker = 0;
            }
        }
    })
});