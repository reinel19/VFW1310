var mainWindow = Ti.UI.createWindow({
	title: "Favorite Games",
	modal: true,
	backgroundColor: "#333"
});

var buttonView = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 315,
	left: 15,
	right: 200,
	borderRadius: 5,
	height: 50
});

var buttonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize:16, fontFamily: "Arial"},
	textAlign: "center",
	text:"Previous"
});

var buttonView2 = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 315,
	left: 200,
	right: 15,
	borderRadius: 5,
	height: 50
});

var buttonText2 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize:16, fontFamily: "Arial"},
	textAlign: "center",
	text:"Next"
});

var videoGameFile = require("videoGames");


buttonView.add(buttonText);
buttonView2.add(buttonText2);
mainWindow.add(buttonView);
mainWindow.add(buttonView2);
mainWindow.open();
