var favoriteGames = ["Mario","Skyrim","GTA-V","Gears OF War","Bioshock"];
var count = 0;
	
var gameView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 10,
	left:10,
	right: 10,
	height: 300,
	borderRadius:25
});	

var gameText = Ti.UI.createLabel({
	text: favoriteGames[3],
	font: {fontSize:16, fontFamily:"arial"}
});
		
var nextB = function(){
	if (count < 5){
		gameText.text = favoriteGames[count];
		count++;
	}else{
		count = 0;
	}
};

var previousB = function(){
	if (count < 5){
		gameText.text = favoriteGames[count];
		count--;
	}else{
		count = 0;
	}
};


var view1 = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: (gameView.top + gameView.height) + 10,
	left: 15,
	right: 200,
	borderRadius: 5,
	height: 50
});

var text1 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize:16, fontFamily: "Arial"},
	textAlign: "center",
	text:"Previous"
});

var view2 = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: (gameView.top + gameView.height) + 10,
	left: 200,
	right: 15,
	borderRadius: 5,
	height: 50
});

var text2 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize:16, fontFamily: "Arial"},
	textAlign: "center",
	text:"Next"
});
view1.addEventListener("click", previousB);
view2.addEventListener("click", nextB);

gameView.add(gameText);
mainWindow.add(gameView);
view1.add(text1);
view2.add(text2);
mainWindow.add(view1);
mainWindow.add(view2);


