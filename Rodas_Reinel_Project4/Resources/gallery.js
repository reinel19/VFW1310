var cWin = Ti.UI.currentWindow;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "project4Pics");
var galleryList = gallery.getDirectoryListing();

var counter = 0;

var gallList = Array();
for (var i = 0; 0 < galleryList.length; i++){
	var index = Math.floor(Math.random() * galleryList.length);
	gallList.push(galleryList[index]);
	galleryList.splice(index, 1);
}

function random(){
	if(counter < 10){
		gameImg.image = "project4Pics/" + gallList[counter];
		counter++;
	} else{
		counter = 0;
	}
};

var cWinView = Ti.UI.createView({
	backgroundColor:"#2840f8",
	top: 60,
	height: 200,
	
});

var gameImg = Ti.UI.createImageView({
	image: "project4Pics/" + gallList[counter],
	left:4,
	right:4,
	top: 4,
	bottom:4,
	borderRadius: 25
});

// Create a Button.
var aButton = Ti.UI.createButton({
	title : "Click Me",
	height : 50,
	width : 300,
	top : (cWinView.height + cWinView.top) + 10,
	
});


// Listen for click events.

aButton.addEventListener("click", random);


// Add to the parent view.
cWin.add(aButton);
cWinView.add(gameImg);
cWin.add(cWinView);

