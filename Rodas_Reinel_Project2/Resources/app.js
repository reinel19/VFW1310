var navWindow = Ti.UI.createWindow({
	title: "Best Games Ever Play",
	modal: true,
	backgroundColor: "#fff"
});
var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWindow
});

var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	top:35
});

var videoGameFile = require("Games");

navWindow.add(table);
navGroup.open();