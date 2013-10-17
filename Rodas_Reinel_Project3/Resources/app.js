var win = Ti.UI.createWindow();

var navWin = Ti.UI.createWindow({
	title: "Project 3",
	modal: true,
	backgroundColor: "#666"
});
var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: navWin
});

var layoutsFile = require("layouts");

win.add(navGroup);
win.open();
