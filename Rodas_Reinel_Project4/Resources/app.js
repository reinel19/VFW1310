var win = Ti.UI.createWindow();


var navWin = Ti.UI.createWindow({
	title:"Project4",
	modal:true,
	backgroundColor: "#333", 
	layout: "horizontal"
});

var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: navWin
});

// Begining of Gallery Button
var gPic = function(){
	var gWin = Ti.UI.createWindow({
		title: "Gallery",
		modal: true,
		backgroundColor: "#333",
		url:"gallery.js"
	});
	navGroup.open(gWin,{animation: true});
};


// Create a Button.
var Gallery = Ti.UI.createButton({
	title : 'Gallery',
	height : 70,
	width : 300,
	top : 10,
	left : 10
});

Gallery.addEventListener('click',gPic);
//end of Gallery button

//Begining of favorite games

var fGames = function(){
	var fWin = Ti.UI.createWindow({
		title: "Favorite Games",
		modal: true,
		backgroundColor: "#fff",
		url:"fGamesWin.js"
	});
	navGroup.open(fWin,{animation: true});
};


// Create a Button.
var bButton = Ti.UI.createButton({
	title : 'Favorite Games',
	height :70,
	width : 300,
	top : 10,
	left : 10
});

// Listen for click events.
bButton.addEventListener('click',fGames);
//end of favorite games






navWin.add(Gallery);
navWin.add(bButton);

win.add(navGroup);
win.open();

