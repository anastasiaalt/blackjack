console.log("Hello World");

var deckReference = [
	{name: "2", value: 2, suit: "Hearts", img: '<img class="card-format" src="http://www.kemplen.co.uk/sk329858/2h.jpg">'}, 
	{name: "3", value: 3, suit: "Hearts", img: '<img class="card-format" src="http://40.media.tumblr.com/tumblr_m2mi0u9XIT1qhqtgyo1_1280.jpg">'},
	{name: "4", value: 4, suit: "Hearts", img: '<img class="card-format" src="https://c1.staticflickr.com/9/8457/7928243828_4b5e83a3ac_b.jpg">'},
	{name: "5", value: 5, suit: "Hearts", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/736x/95/71/76/957176a70ca9447e6fbedf4cf0f17b8b.jpg">'},
	{name: "6", value: 6, suit: "Hearts", img: '<img class="card-format" src="http://phillycardco.com/wp-content/uploads/2014/02/2-Hearts06.jpg">'},	
	{name: "7", value: 7, suit: "Hearts", img: '<img class="card-format" src="http://vignette3.wikia.nocookie.net/fallout/images/5/5d/7_of_Hearts.jpg/revision/latest?cb=20110206014714">'},
	{name: "8", value: 8, suit: "Hearts", img: '<img class="card-format" src="http://www.11betties.org/wp-content/uploads/2012/09/8-Hearts-Playing-Card-Illustration-by-Jonathan-Burton.jpg">'},
	{name: "9", value: 9, suit: "Hearts", img: '<img class="card-format" src="https://playingcardcollector.files.wordpress.com/2013/07/kashmir_playing_cards_nine_of_hearts.jpg">'},
	{name: "10", value: 10, suit: "Hearts", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/fb/f3/cf/fbf3cf03e8a00b46ba097b596acaba5f.jpg">'},
	{name: "Jack", value: 10, suit: "Hearts", img: '<img class="card-format" src="http://aliceofwonderland.com/wp-content/uploads/2013/06/PlayingCardBack_JHearts_sketchFB.jpg">'},
	{name: "Queen", value: 10, suit: "Hearts", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/2a/93/15/2a93159120eae37d92f87f67494d0164.jpg">'},
	{name: "King", value: 10, suit: "Hearts", img: '<img class="card-format" src="http://sargasso.nl/wp-content/uploads/2013/04/Michiel2005-Dutch-playing-cards-from-1920-1927-King-of-Hearts-1367228376.jpg">'},
	{name: "Ace", value: 11, suit: "Hearts", img: '<img class="card-format" src="https://playingcardcollector.files.wordpress.com/2013/05/52_aces_playing_cards_the_ace_of_hearts.jpg">'},
	{name: "2", value: 2, suit: "Spades", img: '<img class="card-format" src="https://spiritsong.files.wordpress.com/2008/06/2-spades1.jpg">'}, 
	{name: "3", value: 3, suit: "Spades", img: '<img class="card-format" src="http://vaseycorp.com/estate/cards/Spades3.gif">'},
	{name: "4", value: 4, suit: "Spades", img: '<img class="card-format" src="http://static1.squarespace.com/static/514e40ffe4b0e29595fe765d/t/5275db59e4b02d3f058eff4c/1383455579049/FourOfSpades_CreativeCards_repponen.jpg">'},
	{name: "5", value: 5, suit: "Spades", img: '<img class="card-format" src="http://www.spoys.org/images/biggercards/44.png">'},
	{name: "6", value: 6, suit: "Spades", img: '<img class="card-format" src="http://41.media.tumblr.com/tumblr_lgumraqBS51qhqtgyo1_1280.jpg">'},	
	{name: "7", value: 7, suit: "Spades", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/41/a4/95/41a495c3ceafaf66b77d09aa47c8d07c.jpg">'},
	{name: "8", value: 8, suit: "Spades", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/8b/31/53/8b3153d6e64da017989e3efaeb3e6895.jpg">'},
	{name: "9", value: 9, suit: "Spades", img: '<img class="card-format" src="http://i.ebayimg.com/00/s/MTM0Mlg4MDU=/z/DHUAAOSw~uhUqnHR/$_35.JPG">'},
	{name: "10", value: 10, suit: "Spades", img: '<img class="card-format" src="http://england.shelter.org.uk/__data/assets/image/0019/213409/HoC_Terence_Conran.jpg">'},
	{name: "Jack", value: 10, suit: "Spades", img: '<img class="card-format" src="https://playingcardcollector.files.wordpress.com/2013/07/m_carelli_semi-transformation_playing_cards_jack_of_spades.jpg">'},
	{name: "Queen", value: 10, suit: "Spades", img: '<img class="card-format" src="http://imgc.allpostersimages.com/images/P-473-488-90/67/6711/AMIA100Z/posters/lantern-press-queen-of-spades-playing-card.jpg">'},
	{name: "King", value: 10, suit: "Spades", img: '<img class="card-format" src="https://playingcardcollector.files.wordpress.com/2013/07/playing_cards_king_of_spades_by_nastyitch.jpg">'},
	{name: "Ace", value: 11, suit: "Spades", img: '<img class="card-format" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Florence_La_Badie_M.J._Moriarty_Playing_Card.jpg">'},				
	{name: "2", value: 2, suit: "Clubs", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/99/c8/8e/99c88e9231068abfad4e282b559d699e.jpg">'}, 
	{name: "3", value: 3, suit: "Clubs", img: '<img class="card-format" src="https://upload.wikimedia.org/wikipedia/en/2/2e/3_of_Clubs_-_Key_to_the_Kingdom.JPG">'},
	{name: "4", value: 4, suit: "Clubs", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/30/58/92/30589254a3e52f98ebeb69543f88b6bd.jpg">'},
	{name: "5", value: 5, suit: "Clubs", img: '<img class="card-format" src="http://vignette2.wikia.nocookie.net/fallout/images/8/84/5_of_Clubs.jpg/revision/20110206000509">'},
	{name: "6", value: 6, suit: "Clubs", img: '<img class="card-format" src="http://farm7.static.flickr.com/6024/6021592286_e8b9a4e779_m.jpg">'},	
	{name: "7", value: 7, suit: "Clubs", img: '<img class="card-format" src="http://farm7.static.flickr.com/6069/6045688002_d73a0e14fc_m.jpg">'},
	{name: "8", value: 8, suit: "Clubs", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/736x/67/4d/eb/674deb2033b76e165798ae767f436ddb.jpg">'},
	{name: "9", value: 9, suit: "Clubs", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/08/3f/0c/083f0cbbb4d86f8b5b8e06274dff246c.jpg">'},
	{name: "10", value: 10, suit: "Clubs", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/3c/33/9d/3c339defb03ab9fb484796f527443cd9.jpg">'},
	{name: "Jack", value: 10, suit: "Clubs", img: '<img class="card-format" src="http://cache2.asset-cache.net/gc/166737049-jack-of-clubs-original-shakespeare-vintage-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=U6x0Aa4SE37zJFDWMlIJpLnTtxfRGarPk1UiRUUrwf523CyMXrMpBX411MpUbfRb">'},
	{name: "Queen", value: 10, suit: "Clubs", img: '<img class="card-format" src="http://pu.i.wp.pl/?k=NjAzMzA3MjYsODk4MTg5&f=d00468d01cQ.jpg">'},
	{name: "King", value: 10, suit: "Clubs", img: '<img class="card-format" src="http://m.artician.com/pu/TPNYNHW47Q4523IXEWQYF6KDD5YKNVGL.preview.jpeg">'},
	{name: "Ace", value: 11, suit: "Clubs", img: '<img class="card-format" src="https://upload.wikimedia.org/wikipedia/en/d/dc/Ace_of_Clubs_(custom-made_for_American_Whist_League).jpg">'},	
	{name: "2", value: 2, suit: "Diamonds", img: '<img class="card-format" src="http://vignette2.wikia.nocookie.net/fallout/images/0/0a/2_of_Diamonds.jpg/revision/latest?cb=20110205173909">'}, 
	{name: "3", value: 3, suit: "Diamonds", img: '<img class="card-format" src="http://orig04.deviantart.net/c666/f/2012/061/4/a/gil_grissom__from_csi__playing_card_by_jennibee-d4rja5y.png">'},
	{name: "4", value: 4, suit: "Diamonds", img: '<img class="card-format" src="http://i.istockimg.com/file_thumbview_approve/52690534/5/stock-photo-52690534-stylish-four-of-diamonds-biermans-playing-card-belgium-1910.jpg">'},
	{name: "5", value: 5, suit: "Diamonds", img: '<img class="card-format" src="http://creativecards.cc/wp-content/uploads/2014/12/5-diamonds-big.jpg">'},
	{name: "6", value: 6, suit: "Diamonds", img: '<img class="card-format" src="http://vignette3.wikia.nocookie.net/fallout/images/c/ca/6_of_Diamonds.jpg/revision/20110206004041">'},	
	{name: "7", value: 7, suit: "Diamonds", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/5e/20/3b/5e203b09991302220de8c8255d58a7b9.jpg">'},
	{name: "8", value: 8, suit: "Diamonds", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/e3/1e/0e/e31e0e492b5f5a8c89ef33bf60b5e784.jpg">'},
	{name: "9", value: 9, suit: "Diamonds", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/236x/e9/a5/bb/e9a5bbb512cb044058ea89d6e0befbcd.jpg">'},
	{name: "10", value: 10, suit: "Diamonds", img: '<img class="card-format" src="https://s-media-cache-ak0.pinimg.com/736x/ec/e7/ef/ece7ef20012e577ce1760fe0bd4689d7.jpg">'},
	{name: "Jack", value: 10, suit: "Diamonds", img: '<img class="card-format" src="http://cache4.asset-cache.net/gc/166737104-jack-of-diamonds-original-shakespeare-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=5LOe4Pc1UdZu8fniViBueJV%2FudZpi5T8pjaxJZQ9jx21Cj3Zn0ryyzAHBPItwPxE">'},
	{name: "Queen", value: 10, suit: "Diamonds", img: '<img class="card-format" src="http://cache2.asset-cache.net/xc/163861668.jpg?v=2&c=IWSAsset&k=2&d=xvb8UWSaTZlAtGTIfHsQeVqTuF5gPZgWHIUfax-7d_URD_N1r-JZv71RMynFm1On0">'},
	{name: "King", value: 10, suit: "Diamonds", img: '<img class="card-format" src="http://orig07.deviantart.net/63cf/f/2009/226/7/3/king_of_diamonds_by_lightang3l.jpg">'},
	{name: "Ace", value: 11, suit: "Diamonds", img: '<img class="card-format" src="http://www.11betties.org/wp-content/uploads/2013/09/Ace-Diamonds-Playing-Card-Illustration-by-Jonathan-Burton.jpg">'},	
];