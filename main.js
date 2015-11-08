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
	{name: "2", value: 2, suit: "Hearts", img "src: 'http://www.kemplen.co.uk/sk329858/2h.jpg'"}, 
	{name: "3", value: 3, suit: "Hearts", img "src: 'http://40.media.tumblr.com/tumblr_m2mi0u9XIT1qhqtgyo1_1280.jpg'"},
	{name: "4", value: 4, suit: "Hearts", img "src: 'https://c1.staticflickr.com/9/8457/7928243828_4b5e83a3ac_b.jpg'"},
	{name: "5", value: 5, suit: "Hearts", img "src: 'https://s-media-cache-ak0.pinimg.com/736x/95/71/76/957176a70ca9447e6fbedf4cf0f17b8b.jpg'"},
	{name: "6", value: 6, suit: "Hearts", img "src: 'http://phillycardco.com/wp-content/uploads/2014/02/2-Hearts06.jpg'"},	
	{name: "7", value: 7, suit: "Hearts", img "src: 'http://vignette3.wikia.nocookie.net/fallout/images/5/5d/7_of_Hearts.jpg/revision/latest?cb=20110206014714'"},
	{name: "8", value: 8, suit: "Hearts", img "src: 'http://www.11betties.org/wp-content/uploads/2012/09/8-Hearts-Playing-Card-Illustration-by-Jonathan-Burton.jpg'"},
	{name: "9", value: 9, suit: "Hearts", img "src: 'https://playingcardcollector.files.wordpress.com/2013/07/kashmir_playing_cards_nine_of_hearts.jpg'"},
	{name: "10", value: 10, suit: "Hearts", img "src: 'https://s-media-cache-ak0.pinimg.com/236x/fb/f3/cf/fbf3cf03e8a00b46ba097b596acaba5f.jpg'"},
	{name: "Jack", value: 10, suit: "Hearts", img "src: 'http://aliceofwonderland.com/wp-content/uploads/2013/06/PlayingCardBack_JHearts_sketchFB.jpg'"},
	{name: "Queen", value: 10, suit: "Hearts", img "src: 'https://s-media-cache-ak0.pinimg.com/236x/2a/93/15/2a93159120eae37d92f87f67494d0164.jpg'"},
	{name: "King", value: 10, suit: "Hearts", img "src: 'http://sargasso.nl/wp-content/uploads/2013/04/Michiel2005-Dutch-playing-cards-from-1920-1927-King-of-Hearts-1367228376.jpg'"},
	{name: "Ace", value: 11, suit: "Hearts", img "src: 'https://playingcardcollector.files.wordpress.com/2013/05/52_aces_playing_cards_the_ace_of_hearts.jpg'"},
	{name: "2", value: 2, suit: "Spades", img "src: ''"}, 
	{name: "3", value: 3, suit: "Spades", img "src: ''"},
	{name: "4", value: 4, suit: "Spades", img "src: ''"},
	{name: "5", value: 5, suit: "Spades", img "src: ''"},
	{name: "6", value: 6, suit: "Spades", img "src: ''"},	
	{name: "7", value: 7, suit: "Spades", img "src: ''"},
	{name: "8", value: 8, suit: "Spades", img "src: ''"},
	{name: "9", value: 9, suit: "Spades", img "src: ''"},
	{name: "10", value: 10, suit: "Spades", img "src: ''"},
	{name: "Jack", value: 10, suit: "Spades", img "src: ''"},
	{name: "Queen", value: 10, suit: "Spades", img "src: ''"},
	{name: "King", value: 10, suit: "Spades", img "src: ''"},
	{name: "Ace", value: 11, suit: "Spades", img "src: ''"},				
	{name: "2", value: 2, suit: "Clubs", img "src: ''"}, 
	{name: "3", value: 3, suit: "Clubs", img "src: ''"},
	{name: "4", value: 4, suit: "Clubs", img "src: ''"},
	{name: "5", value: 5, suit: "Clubs", img "src: ''"},
	{name: "6", value: 6, suit: "Clubs", img "src: ''"},	
	{name: "7", value: 7, suit: "Clubs", img "src: ''"},
	{name: "8", value: 8, suit: "Clubs", img "src: ''"},
	{name: "9", value: 9, suit: "Clubs", img "src: ''"},
	{name: "10", value: 10, suit: "Clubs", img "src: ''"},
	{name: "Jack", value: 10, suit: "Clubs", img "src: ''"},
	{name: "Queen", value: 10, suit: "Clubs", img "src: ''"},
	{name: "King", value: 10, suit: "Clubs", img "src: ''"},
	{name: "Ace", value: 11, suit: "Clubs", img "src: ''"},	
	{name: "2", value: 2, suit: "Diamonds", img "src: ''"}, 
	{name: "3", value: 3, suit: "Diamonds", img "src: ''"},
	{name: "4", value: 4, suit: "Diamonds", img "src: ''"},
	{name: "5", value: 5, suit: "Diamonds", img "src: ''"},
	{name: "6", value: 6, suit: "Diamonds", img "src: ''"},	
	{name: "7", value: 7, suit: "Diamonds", img "src: ''"},
	{name: "8", value: 8, suit: "Diamonds", img "src: ''"},
	{name: "9", value: 9, suit: "Diamonds", img "src: ''"},
	{name: "10", value: 10, suit: "Diamonds", img "src: ''"},
	{name: "Jack", value: 10, suit: "Diamonds", img "src: ''"},
	{name: "Queen", value: 10, suit: "Diamonds", img "src: ''"},
	{name: "King", value: 10, suit: "Diamonds", img "src: ''"},
	{name: "Ace", value: 11, suit: "Diamonds", img "src: ''"},	
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

