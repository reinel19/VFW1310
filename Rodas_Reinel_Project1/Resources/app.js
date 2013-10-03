var food = ["Pasta","Salad","Apple","Pizza"];

var mainWindow = Ti.UI.createWindow({
	title: "Event listeners and Even Handlers",
	modal: true,
	backgroundColor: "#333"
});

var buttonView = Ti.UI.createView({
	backgroundColor: "#23ba00",
	top: 15,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize:16, fontFamily: "Arial"},
	textAlign: "center",
	text:"Change Text"
});
var displayAlert = function() {
	var startingTop = 50;
    for(var i=0, j=food.length; i<j; i++);{
    	var quoteView = Ti.UI.createView({
			backgroundColor: "#fff",
			height: 30,
			top: startingTop,
			left: 20,
			right: 20,
			borderRadius: 5
		});

		var quoteText = Ti.UI.createLabel({
			text: food[i],
			font: {fontSize: 20, fontFamily: "Arial"},
			textAlign: "center"
		});
	quoteView.add(quoteText);
	mainWindow.add(quoteView);
	startingTop = startingTop + quoteView.height + 10;
    }
};

buttonView.addEventListener("click", displayAlert);


buttonView.add(buttonText);
mainWindow.add(buttonView);
mainWindow.open();
