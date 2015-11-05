# blackjack

User Stories:
-What are my requirements?
-What should my app look like?

The minimum bet will be $20
Players can only buy more chips before or after a round is dealt (i.e. cannot get more chips to add to bets mid turn

Should have a single dealer who gives cards to five players
The dealer should begin by dealing everyone one unknown card and one known card including herself
The dealer should ask each player if they want to receive as many more cards as they would like up to a total card value of 21 points




*No insurance offered at this blackjack table
*A win pays out 100%
*A blackjack plays out 150%



Wire Frames:

Think about everything for the banking system of the game as one section
Think about everything for the logic or the winning of the game as another type of logic

PseudoCode

Will have an image or style for each of the cards

Four Seasons ~ Four Suits



Deck = {Winter, Spring, Summer,Fall}
Winter = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Spring = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Summer = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Fall = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
--> 10/J/Q/K all programmed with the same logic
---> Programming ten types of cards with 13 different styles
--> Ace logic: 1) if A=1 && total card value >21 ---> Bust
               2) if A=11 && total card value >21 ---> A=1
               3) if A=11 && total card value <21 ---> Option for more cards
               4) if A=1 && total card value <21 ---> Option for more cards



