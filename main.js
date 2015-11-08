console.log("Hello World");

var dealerCards = [];
var dealerHandValue = 0;

var playerCards = [];
var playerHandValue = 0;

var dealerBank = 1000;
var playerBank = 200;
var pot = 0;
var playerBet = 20;


var deck = [
	{name: "2", value: 2, suit: "Hearts", img: '<img src="url(xhttp://www.kemplen.co.uk/sk329858/2h.jpg">'}, 
	{name: "3", value: 3, suit: "Hearts", img: '<img src="http://40.media.tumblr.com/tumblr_m2mi0u9XIT1qhqtgyo1_1280.jpg">'},
	{name: "4", value: 4, suit: "Hearts", img: '<img src="https://c1.staticflickr.com/9/8457/7928243828_4b5e83a3ac_b.jpg">'},
	{name: "5", value: 5, suit: "Hearts", img: '<img src="https://s-media-cache-ak0.pinimg.com/736x/95/71/76/957176a70ca9447e6fbedf4cf0f17b8b.jpg">'},
	{name: "6", value: 6, suit: "Hearts", img: '<img src="http://phillycardco.com/wp-content/uploads/2014/02/2-Hearts06.jpg">'},	
	{name: "7", value: 7, suit: "Hearts", img: '<img src="http://vignette3.wikia.nocookie.net/fallout/images/5/5d/7_of_Hearts.jpg/revision/latest?cb=20110206014714">'},
	{name: "8", value: 8, suit: "Hearts", img: '<img src="http://www.11betties.org/wp-content/uploads/2012/09/8-Hearts-Playing-Card-Illustration-by-Jonathan-Burton.jpg">'},
	{name: "9", value: 9, suit: "Hearts", img: '<img src="https://playingcardcollector.files.wordpress.com/2013/07/kashmir_playing_cards_nine_of_hearts.jpg">'},
	{name: "10", value: 10, suit: "Hearts", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/fb/f3/cf/fbf3cf03e8a00b46ba097b596acaba5f.jpg">'},
	{name: "Jack", value: 10, suit: "Hearts", img: '<img src="http://aliceofwonderland.com/wp-content/uploads/2013/06/PlayingCardBack_JHearts_sketchFB.jpg">'},
	{name: "Queen", value: 10, suit: "Hearts", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/2a/93/15/2a93159120eae37d92f87f67494d0164.jpg">'},
	{name: "King", value: 10, suit: "Hearts", img: '<img src="http://sargasso.nl/wp-content/uploads/2013/04/Michiel2005-Dutch-playing-cards-from-1920-1927-King-of-Hearts-1367228376.jpg">'},
	{name: "Ace", value: 11, suit: "Hearts", img: '<img src="https://playingcardcollector.files.wordpress.com/2013/05/52_aces_playing_cards_the_ace_of_hearts.jpg">'},
	{name: "2", value: 2, suit: "Spades", img: '<img src="https://spiritsong.files.wordpress.com/2008/06/2-spades1.jpg">'}, 
	{name: "3", value: 3, suit: "Spades", img: '<img src="http://vaseycorp.com/estate/cards/Spades3.gif">'},
	{name: "4", value: 4, suit: "Spades", img: '<img src="http://static1.squarespace.com/static/514e40ffe4b0e29595fe765d/t/5275db59e4b02d3f058eff4c/1383455579049/FourOfSpades_CreativeCards_repponen.jpg">'},
	{name: "5", value: 5, suit: "Spades", img: '<img src="http://www.spoys.org/images/biggercards/44.png">'},
	{name: "6", value: 6, suit: "Spades", img: '<img src="http://41.media.tumblr.com/tumblr_lgumraqBS51qhqtgyo1_1280.jpg">'},	
	{name: "7", value: 7, suit: "Spades", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/41/a4/95/41a495c3ceafaf66b77d09aa47c8d07c.jpg">'},
	{name: "8", value: 8, suit: "Spades", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/8b/31/53/8b3153d6e64da017989e3efaeb3e6895.jpg">'},
	{name: "9", value: 9, suit: "Spades", img: '<img src="http://i.ebayimg.com/00/s/MTM0Mlg4MDU=/z/DHUAAOSw~uhUqnHR/$_35.JPG">'},
	{name: "10", value: 10, suit: "Spades", img: '<img src="http://england.shelter.org.uk/__data/assets/image/0019/213409/HoC_Terence_Conran.jpg">'},
	{name: "Jack", value: 10, suit: "Spades", img: '<img src="https://playingcardcollector.files.wordpress.com/2013/07/m_carelli_semi-transformation_playing_cards_jack_of_spades.jpg">'},
	{name: "Queen", value: 10, suit: "Spades", img: '<img src="http://imgc.allpostersimages.com/images/P-473-488-90/67/6711/AMIA100Z/posters/lantern-press-queen-of-spades-playing-card.jpg">'},
	{name: "King", value: 10, suit: "Spades", img: '<img src="https://playingcardcollector.files.wordpress.com/2013/07/playing_cards_king_of_spades_by_nastyitch.jpg">'},
	{name: "Ace", value: 11, suit: "Spades", img: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Florence_La_Badie_M.J._Moriarty_Playing_Card.jpg">'},				
	{name: "2", value: 2, suit: "Clubs", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/99/c8/8e/99c88e9231068abfad4e282b559d699e.jpg">'}, 
	{name: "3", value: 3, suit: "Clubs", img: '<img src="https://upload.wikimedia.org/wikipedia/en/2/2e/3_of_Clubs_-_Key_to_the_Kingdom.JPG">'},
	{name: "4", value: 4, suit: "Clubs", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/30/58/92/30589254a3e52f98ebeb69543f88b6bd.jpg">'},
	{name: "5", value: 5, suit: "Clubs", img: '<img src="http://vignette2.wikia.nocookie.net/fallout/images/8/84/5_of_Clubs.jpg/revision/20110206000509">'},
	{name: "6", value: 6, suit: "Clubs", img: '<img src="http://farm7.static.flickr.com/6024/6021592286_e8b9a4e779_m.jpg">'},	
	{name: "7", value: 7, suit: "Clubs", img: '<img src="http://farm7.static.flickr.com/6069/6045688002_d73a0e14fc_m.jpg">'},
	{name: "8", value: 8, suit: "Clubs", img: '<img src="https://s-media-cache-ak0.pinimg.com/736x/67/4d/eb/674deb2033b76e165798ae767f436ddb.jpg">'},
	{name: "9", value: 9, suit: "Clubs", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/08/3f/0c/083f0cbbb4d86f8b5b8e06274dff246c.jpg">'},
	{name: "10", value: 10, suit: "Clubs", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/3c/33/9d/3c339defb03ab9fb484796f527443cd9.jpg">'},
	{name: "Jack", value: 10, suit: "Clubs", img: '<img src="http://cache2.asset-cache.net/gc/166737049-jack-of-clubs-original-shakespeare-vintage-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=U6x0Aa4SE37zJFDWMlIJpLnTtxfRGarPk1UiRUUrwf523CyMXrMpBX411MpUbfRb">'},
	{name: "Queen", value: 10, suit: "Clubs", img: '<img src="http://pu.i.wp.pl/?k=NjAzMzA3MjYsODk4MTg5&f=d00468d01cQ.jpg">'},
	{name: "King", value: 10, suit: "Clubs", img: '<img src="http://m.artician.com/pu/TPNYNHW47Q4523IXEWQYF6KDD5YKNVGL.preview.jpeg">'},
	{name: "Ace", value: 11, suit: "Clubs", img: '<img src="https://upload.wikimedia.org/wikipedia/en/d/dc/Ace_of_Clubs_(custom-made_for_American_Whist_League).jpg">'},	
	{name: "2", value: 2, suit: "Diamonds", img: '<img src="http://vignette2.wikia.nocookie.net/fallout/images/0/0a/2_of_Diamonds.jpg/revision/latest?cb=20110205173909">'}, 
	{name: "3", value: 3, suit: "Diamonds", img: '<img src="http://orig04.deviantart.net/c666/f/2012/061/4/a/gil_grissom__from_csi__playing_card_by_jennibee-d4rja5y.png">'},
	{name: "4", value: 4, suit: "Diamonds", img: '<img src="http://i.istockimg.com/file_thumbview_approve/52690534/5/stock-photo-52690534-stylish-four-of-diamonds-biermans-playing-card-belgium-1910.jpg">'},
	{name: "5", value: 5, suit: "Diamonds", img: '<img src="http://creativecards.cc/wp-content/uploads/2014/12/5-diamonds-big.jpg">'},
	{name: "6", value: 6, suit: "Diamonds", img: '<img src="http://vignette3.wikia.nocookie.net/fallout/images/c/ca/6_of_Diamonds.jpg/revision/20110206004041">'},	
	{name: "7", value: 7, suit: "Diamonds", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/5e/20/3b/5e203b09991302220de8c8255d58a7b9.jpg">'},
	{name: "8", value: 8, suit: "Diamonds", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/e3/1e/0e/e31e0e492b5f5a8c89ef33bf60b5e784.jpg">'},
	{name: "9", value: 9, suit: "Diamonds", img: '<img src="https://s-media-cache-ak0.pinimg.com/236x/e9/a5/bb/e9a5bbb512cb044058ea89d6e0befbcd.jpg">'},
	{name: "10", value: 10, suit: "Diamonds", img: '<img src="https://s-media-cache-ak0.pinimg.com/736x/ec/e7/ef/ece7ef20012e577ce1760fe0bd4689d7.jpg">'},
	{name: "Jack", value: 10, suit: "Diamonds", img: '<img src="http://cache4.asset-cache.net/gc/166737104-jack-of-diamonds-original-shakespeare-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=5LOe4Pc1UdZu8fniViBueJV%2FudZpi5T8pjaxJZQ9jx21Cj3Zn0ryyzAHBPItwPxE">'},
	{name: "Queen", value: 10, suit: "Diamonds", img: '<img src="http://cache2.asset-cache.net/xc/163861668.jpg?v=2&c=IWSAsset&k=2&d=xvb8UWSaTZlAtGTIfHsQeVqTuF5gPZgWHIUfax-7d_URD_N1r-JZv71RMynFm1On0">'},
	{name: "King", value: 10, suit: "Diamonds", img: '<img src="http://orig07.deviantart.net/63cf/f/2009/226/7/3/king_of_diamonds_by_lightang3l.jpg">'},
	{name: "Ace", value: 11, suit: "Diamonds", img: '<img src="http://www.11betties.org/wp-content/uploads/2013/09/Ace-Diamonds-Playing-Card-Illustration-by-Jonathan-Burton.jpg">'},	
];


var restart = function (){
	for (var i = 0; i < dealerCards.length; i++) {
		dealerCards.splice(i,1);
		deck.push(dealerCards[i]);
	};
	for (var i = 0; i < playerCards.length; i++) {
		playerCards.splice(i,1);
		deck.push(playerCards[i]);
	};
	console.log("Restart");
};





var deal = function (person){
	var deckStart = Math.round(Math.random(deck)*((deck.length)-1));
	console.log(deck[deckStart]);

	person.push(deck[deckStart]);

	deck.splice(deckStart,1);
};

var startGame = function () {
	pot = playerBet;
	playerBank = playerBank - playerBet;

	deal(dealerCards);
	deal(playerCards);
	deal(dealerCards);
	deal(playerCards);
	console.log(dealerCards);
	console.log(playerCards);

	var newPlayerValue = 0;
	var newDealerValue = 0;

	for (var i = 0; i < playerCards.length; i++) {
		newPlayerValue = newPlayerValue + playerCards[i].value;
	}
	playerHandValue = newPlayerValue;

	for (var i = 0; i < dealerCards.length; i++) {
		newDealerValue = newDealerValue + dealerCards[i].value;
	}
	dealerHandValue = newDealerValue;

	if (dealerHandValue === 21 && playerHandValue === 21) {
			pot=0;
			playerBank += playerBet;
		console.log("Push. Dealer and player both have 21.");

		} else if (dealerHandValue === 21) {
			pot = 0;
			dealerBank +=playerBet;
			console.log("Dealer has blackjack. Player loses.");
		} else if (playerHandValue === 21) {	
			pot = 0;
			playerBank += playerBet + (1.5*playerBet);
			dealerBank -=(1.5*playerBet);
			console.log("Player has blackjack. Player wins.");
		}
	console.log(playerBank);
	console.log(dealerBank);
	console.log(pot);
};
console.log(startGame());

var startButton = document.querySelector('#start');

startButton.addEventListener('click', startGame);



// After Start game is run, will have some kind of prompt show up that gives player option between Hit and Stay






var hit = function(cards, handValue) {
	console.log(cards, handValue)
	var deckStart = Math.round(Math.random(deck)*((deck.length)-1));
	console.log(deck[deckStart]);

	cards.push(deck[deckStart]);

	deck.splice(deckStart,1);

	var newValue = 0;

	for (var i = 0; i < cards.length; i++) {
		newValue = newValue + cards[i].value;
	};

	handValue = newValue;
};




var hitButton = document.querySelector('#hit');

var handleHit = function(event){
	hit(playerCards, playerHandValue);
	console.log('click');
	testPlayer
};

hitButton.addEventListener('click', handleHit);

var stayButton = document.querySelector('#stay');




var handleStay = function(event){

};
// This is where everything for the dealer will kick off after the player has agreed to hit





var testPlayer = function() {
	var newValue = 0;

	for (var i = 0; i < playerCards.length; i++) {
		newValue = newValue + playerCards[i].value;
	}

	playerHandValue = newValue;

	if (playerHandValue>21) {
		pot = 0;
		dealerBank +=playerBet;
		console.log("Player Bust! Player hand is valued at "+playerHandValue);
	} else {
		console.log("Player hand is valued at "+playerHandValue+". Stay or hit?");
	}
};



var testDealer = function() {
	var newValue = 0;

	for (var i = 0; i < dealerCards.length; i++) {
		newValue = newValue + dealerCards[i].value;
	}

	dealerHandValue = newValue;
	
	if (dealerHandValue>21) {
		pot = 0;
		playerBank +=playerBet +playerBet;
		dealerBank -=playerBet;
		console.log("Dealer Bust / Player Wins! Dealer hand is valued at "+dealerHandValue+". Player has "+playerBank+" total");
	
	} else if (dealerHandValue<16) {
		console.log("Dealer has "+dealerHandValue+" and therefore must hit");

	} else {
		if (dealerHandValue>playerHandValue) {
			pot = 0;
			dealerBank +=playerBet;
			console.log("Player loses");
		} else if (dealerHandValue<playerHandValue) {
			pot = 0;
			dealerBank -=playerBet;
			playerBank +=playerBet +playerBet;
			console.log("Player wins");
		} else {
			pot = 0;
			playerBank +=playerBet;
			console.log("Draw. Player gets back bet");
		}
	}
};

var dealerAces = 0;

var aceDealer = function() {
	for (var i = 0; i < dealerCards.length; i++) {
		var aceCount =0;
		if (dealerCards[i].name="Ace") {
			aceCount += aceCount +1;
		};
	//Want to get the number of aces and then see if hand value options with a=1 is <21 
	};
	dealerAces =aceCount;
	dealerHandValue = dealerHandValue - dealerAces*10;
};

var resetAce = function () {
	if (dealerAces===1) {
		dealerHandValue = dealerHandValue - (dealerAces*10);
	} else if (dealerAces===2) {
		dealerHandValue = dealerHandValue - ((dealerAces-1)*10);
		if (dealerHandValue>21) {
			dealerHandValue = dealerHandValue - (dealerAces*10);
		};
	} else if (dealerAces===3) {
		dealerHandValue = dealerHandValue - ((dealerAces-1)*10);
		if (dealerHandValue>21) {
			dealerHandValue = dealerHandValue - (dealerAces*10);
		};
	} else if (dealerAces===4) {
		dealerHandValue = dealerHandValue - ((dealerAces-1)*10);
		if (dealerHandValue>21) {
			dealerHandValue = dealerHandValue - (dealerAces*10);
		};
	} else {
		dealerHandValue = dealerHandValue;
	};
};



// You only need to run this check as a final check in the event that it appears to be a bust of +21
// That's where you insert the function, don't need to test the hand at that pt
// Reset the hand value

