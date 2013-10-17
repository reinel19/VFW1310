var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gameImages");
var galleryList = gallery.getDirectoryListing();

var numberofCols = 2;
var spacing = 4;
var numberofSpace = (numberofCols + 1)* spacing;
var platformWidth = Ti.Platform.displayCaps.platformHeight;
// 
var newWidth = (platformWidth - numberofSpace)/ gallery;

var viewsContainer = Ti.UI.createScrollView({
		layout: "horizontal"
});

		
	// Create a Button.
	var aButton = Ti.UI.createButton({
		title:"Game Gallery",
		height : 100,
		width : 200,
		top : 20		
	});

	//navGroup.open(aButton,{animation: true});
	
	// Listen for click events.
	 aButton.addEventListener('click', function(e){
		var makeViews = function(){
				for(var i=0, j= gallery; i<j; i++){
					var imageView = Ti.UI.createImageView({
						image: "gameImages/" + galleryList,
						top:4,
						left:4,
		    			borderRadius: 25,
						width: newWidth,
						height:100
					});
			}
		navGroup.open(imageView,{animation: true});
		viewsContainer.add(newView);
		};	
	});
 
navWin.add(aButton);

navWin.add(viewsContainer);