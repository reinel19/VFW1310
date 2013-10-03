var favoriteGames = ["Mario","Skyrim","GTA-V","Gears OF War","Bioshock"];

	
var displayAlert = function() {
	
    for(var i=0, j=favoriteGames.length; i<j; i++){
    	var gameView = Ti.UI.createView({
		backgroundColor: "#fff",
		width: 270,
		height: 270,
		top:30
		});

		var gameViewText = Ti.UI.createLabel({
		text: favoriteGames[i],
		font: {fontSize: 20, fontFamily: "Arial"},
		textAlign: "center"
		});	
		gameView.add(gameViewText);
		mainWindow.add(gameView);
    }
    
};


buttonView.addEventListener("click", displayAlert);
buttonView2.addEventListener("click", displayAlert);
