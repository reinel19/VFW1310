var win = Ti.UI.createWindow({
	title: "Project 4",
	backgroundColor: "#333",
	modal: true,
	layout: "horizontal"

});
var newView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	top: 10,
	left: 10,
	right: 10
});
var newLabel = Ti.UI.createLabel({
	text: "Gallery",
	font: {fontSize:14,fontFamily:"Helvetica"},
	color: "#333",
	left: 20
});

var openItem = function(){
	var newWin = Ti.UI.createWindow({
		title: "Galley",
		modal: true,
		backgroundColor: "#000"
	});
};

newView.addEventListener("click", openItem);

newView.add(newLabel);
win.add(newView);
win.open();