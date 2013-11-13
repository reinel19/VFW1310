var navWin = Ti.UI.createWindow({
	title: "Project 3",
	modal: true,
	backgroundColor: "#666"
});
var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWin
});

var layoutsFile = require("layouts");


navGroup.open();

