console.log("Hello World");

var dealerCards = [];
var dealerHandValue = 0;

var playerCards = [];
var playerHandValue = 0;

var dealerBank = 1000;
var playerBank = 200;
var pot = 0;
var playerBet = 20;

var restart = function (){
	console.log("Restart")
};

var deck = [
	{name: "2 Disco", value: 2}, 
	{name: "3 Disco", value: 3},
	{name: "4 Disco", value: 4},
	{name: "5 Disco", value: 5},
	{name: "6 Disco", value: 6},	
	{name: "7 Disco", value: 7},
	{name: "8 Disco", value: 8},
	{name: "9 Disco", value: 9},
	{name: "10 Disco", value: 10},
	{name: "Jack Disco", value: 10},
	{name: "Queen Disco", value: 10},
	{name: "King Disco", value: 10},
	{name: "Ace Disco", value: 11},
	{name: "2 Rap 2", value: 2}, 
	{name: "3 Rap 3", value: 3},
	{name: "4 Rap 4", value: 4},
	{name: "5 Rap 5", value: 5},
	{name: "6 Rap 6", value: 6},	
	{name: "7 Rap 7", value: 7},
	{name: "8 Rap 8", value: 8},
	{name: "9 Rap 9", value: 9},
	{name: "10 Rap", value: 10},
	{name: "Jack Rap", value: 10},
	{name: "Queen Rap", value: 10},
	{name: "King Rap", value: 10},
	{name: "Ace Rap", value: 11},				
	{name: "2 Country", value: 2}, 
	{name: "3 Country", value: 3},
	{name: "4 Country", value: 4},
	{name: "5 Country", value: 5},
	{name: "6 Country", value: 6},	
	{name: "7 Country", value: 7},
	{name: "8 Country", value: 8},
	{name: "9 Country", value: 9},
	{name: "10 Country", value: 10},
	{name: "Jack Country", value: 10},
	{name: "Queen Country", value: 10},
	{name: "King Country", value: 10},
	{name: "Ace Country", value: 11},	
	{name: "2 Pop", value: 2}, 
	{name: "3 Pop", value: 3},
	{name: "4 Pop", value: 4},
	{name: "5 Pop", value: 5},
	{name: "6 Pop", value: 6},	
	{name: "7 Pop", value: 7},
	{name: "8 Pop", value: 8},
	{name: "9 Pop", value: 9},
	{name: "10 Pop", value: 10},
	{name: "Jack Pop", value: 10},
	{name: "Queen Pop", value: 10},
	{name: "King Pop", value: 10},
	{name: "Ace Pop", value: 11},	
];


var deal = function (person){
	var deckStart = Math.round(Math.random(deck)*((deck.length)-1));
	console.log(deck[deckStart]);
	// picks a random starting point in the deck, dynamic based on deck length

	person.push(deck[deckStart]);
	// adds the card at the random starting point to the person's cards

	deck.splice(deckStart,1);
	// removes the card at the random starting point from the deck
};
// I am removing two objects from the deck but somehow adding 4 objects to each the dealer and player's cards


var startGame = function () {
	pot = playerBet;
	playerBank = playerBank - playerBet;
	// put the player's bet in the pot, remove bet from player's bank

	deal(dealerCards);
	deal(playerCards);
	deal(dealerCards);
	deal(playerCards);
	console.log(dealerCards);
	console.log(playerCards);
	// deals two cards beginning with the dealer to the dealer and the player

	var newPlayerValue = 0;
	var newDealerValue = 0;
	// Need to have the counter outside the loop and enumerate each time

	for (var i = 0; i < playerCards.length; i++) {
		var newPlayerValue = newPlayerValue + playerCards[i].value;
	};
	// running sum of player's hand value
	playerHandValue = newPlayerValue;
	// set the player's hand value equal to the new running sum

	for (var i = 0; i < dealerCards.length; i++) {
		var newDealerValue = newDealerValue + dealerCards[i].value;
	};
	// running sum of the dealer's hand
	dealerHandValue = newDealerValue;
	// set the dealer's hand value equal to the new running sum

	if (dealerHandValue === 21 && playerHandValue === 21) {
		restart
		// This is nothing at the moment but this will be the function to restart the whole game
		console.log("Push. Dealer and player both have 21.")

		} else if (dealerHandValue === 21) {
			pot = 0;
			dealerBank +=playerBet;
			console.log("Dealer has blackjack. Player loses.")
		} else if (playerHandValue === 21) {	
			pot = 0;
			playerBank += playerBet + (1.5*playerBet);
			dealerBank -=(1.5*playerBet);
			console.log("Player has blackjack. Player wins.")
		};
	console.log(playerBank);
	console.log(dealerBank);
	console.log(pot);
	//Tests any blackjacks after the start of the game, adjusts banks if so 
};
console.log(startGame());

// After Start game is run, will have some kind of prompt show up that gives player option between Hit and Stay

var hit = function (cards, handValue) {
	var deckStart = Math.round(Math.random(deck)*((deck.length)-1));
	console.log(deck[deckStart]);
	// picks a random starting point in the deck, dynamic based on deck length

	cards.push(deck[deckStart]);
	// adds the card at the random starting point to the person's cards

	deck.splice(deckStart,1);
	// removes the card at the random starting point from the deck
	// all you have done to this point is just take another card out of the deck

	var newValue = 0;
	// Need to have the counter outside the loop and enumerate each time

	for (var i = 0; i < cards.length; i++) {
		var newValue = newValue + cards[i].value;
	};
	// running sum of player's hand value

	handValue = newValue;
	// set the player's hand value equal to the new running sum

	if (handValue>21) {
		console.log("Bust! Hand is valued at "+handValue);
	} else {
		console.log("Hand is valued at "+handValue+". Stay or hit?");
	};
	// Tests if player busts and returns hand value
};


var testDealer = function(dealer) {

};







