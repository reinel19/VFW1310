
var navWin = Ti.UI.createWindow({
	title:"Project4",
	modal:true,
	backgroundColor: "#333", 
	layout: "horizontal"
});

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: navWin
});

// Begining of Gallery Button
var gPic = function(){
	var gWin = Ti.UI.createWindow({
		title: "Gallery",
		modal: true,
		backgroundColor: "#333",
		url:"gallery.js",
	});
	navGroup.openWindow(gWin,{animation: true});
};


// Create a Button.
var Gallery = Ti.UI.createButton({
	title : 'Gallery',
	height : 70,
	width : 300,
	top : 50,
	left : 10
});

Gallery.addEventListener('click',gPic);
//end of Gallery button

//Begining of favorite games

var bButton = Ti.UI.createButton({
	title : 'My Favorite Games',
	height :70,
	width : 300,
	top : 10,
	left : 10
});

var fGames = function(){
	var fWin = Ti.UI.createWindow({
		title: "My Favorite Games",
		modal: true,
		backgroundColor: "#fff",
		url:"fGamesWin.js"
	});
	navGroup.openWindow(fWin,{animation: true});
};



bButton.addEventListener('click',fGames);
//end of favorite games

// TextField
var textF = function(){
	var tWin = Ti.UI.createWindow({
		title: "Your Favorite Games",
		modal: true,
		backgroundColor: "#333",
		url:"textField.js",
	});
	navGroup.openWindow(tWin,{animation: true});
};


// Create a Button.
var textField = Ti.UI.createButton({
	title : 'Your Favorite Games',
	height : 70,
	width : 300,
	top : 10,
	left : 10
});

textField.addEventListener('click',textF);

navWin.add(Gallery);
navWin.add(bButton);
navWin.add(textField);
navGroup.open();


