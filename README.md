# blackjack

User Stories:
-What are my requirements?
-What should my app look like?

MONEY SECTION
Set a bank or house pot
Set each player purse
Set minimum bet


GAME LOGIC SECTION

Test if bank = 20*min bet --> assumption that 4 splits, 5 players, and dealer bust is worst possible outcome
Ask player to play
  If no, remove from game
  If yes, deduct minimum bet from player purse
Give each player one unknown card and one known card beginning with dealer
If known card = A, test dealer hand value for a K,Q,J, and 10 --> 
  If dealer hand = automatic loss for players !=21
  Test player hand value for any combination of A and K,Q,J, and 10 --> if yes, keep bet
Test player hand value for any combination of A and K,Q,J, and 10 --> automatic win for player
  Pay player 150% of bet
Test if player has any combination of same two cards --> option to split and play two hands
  If no, no action
  If yes, ask to split?
      If no, no action
      If yes, 1) deduct same bet amount again from player purse
              2) give two cards face down
              3) move to next player
Ask player if she wants another card --> if no, next player
                                         if yes, test new hand value
                                            if >21, remove player and take bet
                                            if =21, go to next player
                                            if <21, ask player if she wants another card
                                                if no, next player
                                                if yes, test new hand value
                                                    if >21, remove player and take bet
                                                    if =21, go to next player
                                                    if <21, ask player if she wants another card
//** this is going to be some kind of loop function to keep testing
//** need to include logic in this section for the value of A as 1 or 21... Thinking this is the last thing you test each time as a last resort basically to keep you alive and run the test again under the values 11 and 1

Repeat ask for another card with all five players
Reveal dealer's second card
Test value of dealer's hand --> if hand >= 16, compare player hand values
                                if hand < 16, add one card
                                    if new hand >21, all remaining players win
                                    if new hand >=16, compare player hand values
                                    if new hand < 16, add one card
                                          if new hand >21, all remaining players win
                                          if new hand >=16, compare player hand values
                                          if new hand < 16, add one card
                                compare all hands
                                    if dealer hand > player hand, take player bet
                                    if dealer hand = player hand, return player bet
                                    if dealer hand < player hand, return player bet + pay 100% to player
//** this is going to be some kind of infinite loop function to keep testing





*No insurance offered at this blackjack table
*A win pays out 100%
*A blackjack plays out 150%



Wire Frames:

Think about everything for the banking system of the game as one section
Think about everything for the logic or the winning of the game as another type of logic



PseudoCode

Will have an image or style for each of the cards
Four Seasons ~ Four Suits

Player 1 = ()
Player 2 = ()
Player 3 = ()
Player 4 = ()
Player 5 = ()

Dealer = ()

Deck = {Winter, Spring, Summer,Fall}
Winter = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Spring = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Summer = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
Fall = {2,3,4,5,6,7,8,9,10,J,Q,K,A}
---> 10/J/Q/K all programmed with the same logic as value 10
---> Programming ten types of cards with 13 different styles
---> Will need some sort of class for "hidden" that shows the back of the card / a generic card

The Ace!
//** need to include logic for the value of A as 1 or 21
--> Ace logic: 1) if A=1 && total card value >21 ---> Bust
               2) if A=11 && total card value >21 ---> A=1
               3) if A=11 && total card value <21 ---> Option for more cards
               4) if A=1 && total card value <21 ---> Option for more cards

Each player and dealer is going to be it's own section
Thinking you are going to keep player's hands as ULs and add LIs with the individual cards to them as an organizing structure
You add and remove these LIs with their values as you select options

Some kind of basic buttons where you declare "Hit" and "Stay" to add cards and pass to next player respectively

