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
	{name: "2", value: 2, suit: "Disco", img: "image"}, 
	{name: "3", value: 3, suit: "Disco"},
	{name: "4", value: 4, suit: "Disco"},
	{name: "5", value: 5, suit: "Disco"},
	{name: "6", value: 6, suit: "Disco"},	
	{name: "7", value: 7, suit: "Disco"},
	{name: "8", value: 8, suit: "Disco"},
	{name: "9", value: 9, suit: "Disco"},
	{name: "10", value: 10, suit: "Disco"},
	{name: "Jack", value: 10, suit: "Disco"},
	{name: "Queen", value: 10, suit: "Disco"},
	{name: "King", value: 10, suit: "Disco"},
	{name: "Ace", value: 11, suit: "Disco"},
	{name: "2", value: 2, suit: "Rap"}, 
	{name: "3", value: 3, suit: "Rap"},
	{name: "4", value: 4, suit: "Rap"},
	{name: "5", value: 5, suit: "Rap"},
	{name: "6", value: 6, suit: "Rap"},	
	{name: "7", value: 7, suit: "Rap"},
	{name: "8", value: 8, suit: "Rap"},
	{name: "9", value: 9, suit: "Rap"},
	{name: "10", value: 10, suit: "Rap"},
	{name: "Jack", value: 10, suit: "Rap"},
	{name: "Queen", value: 10, suit: "Rap"},
	{name: "King", value: 10, suit: "Rap"},
	{name: "Ace", value: 11, suit: "Rap"},				
	{name: "2", value: 2, suit: "Country"}, 
	{name: "3", value: 3, suit: "Country"},
	{name: "4", value: 4, suit: "Country"},
	{name: "5", value: 5, suit: "Country"},
	{name: "6", value: 6, suit: "Country"},	
	{name: "7", value: 7, suit: "Country"},
	{name: "8", value: 8, suit: "Country"},
	{name: "9", value: 9, suit: "Country"},
	{name: "10", value: 10, suit: "Country"},
	{name: "Jack", value: 10, suit: "Country"},
	{name: "Queen", value: 10, suit: "Country"},
	{name: "King", value: 10, suit: "Country"},
	{name: "Ace", value: 11, suit: "Country"},	
	{name: "2", value: 2, suit: "Pop"}, 
	{name: "3", value: 3, suit: "Pop"},
	{name: "4", value: 4, suit: "Pop"},
	{name: "5", value: 5, suit: "Pop"},
	{name: "6", value: 6, suit: "Pop"},	
	{name: "7", value: 7, suit: "Pop"},
	{name: "8", value: 8, suit: "Pop"},
	{name: "9", value: 9, suit: "Pop"},
	{name: "10", value: 10, suit: "Pop"},
	{name: "Jack", value: 10, suit: "Pop"},
	{name: "Queen", value: 10, suit: "Pop"},
	{name: "King", value: 10, suit: "Pop"},
	{name: "Ace", value: 11, suit: "Pop"},	
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

// Want to write a function that takes everything that is in player cards and dealer cards from the previous turn and puts back into deck





var deal = function (person){
	var deckStart = Math.round(Math.random(deck)*((deck.length)-1));
	console.log(deck[deckStart]);

	person.push(deck[deckStart]);

	deck.splice(deckStart,1);
};

// var betMore = function () {
// 	pot = playerBet;
// 	playerBank = playerBank - playerBet;
// };
// Add functionality to add bet

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

