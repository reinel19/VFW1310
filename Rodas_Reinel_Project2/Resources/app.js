var win = Ti.UI.createWindow();

var navWindow = Ti.UI.createWindow({
	title: "Best Games Ever Play",
	modal: true,
	backgroundColor: "#fff"
});
var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: navWindow
});

var videoGameFile = require("Games");

win.add(navGroup);
win.open();
