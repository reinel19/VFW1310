
var action = [{title: "Metal Gear", description:"I have been I huge fan of metal gear since Metal Gear Solid for Play Station. The cinematics are awesome, the gameplay is smooth and fun. The tactical part of the game is what got me into it. "}, 
				{title: "The Legend Of Zelda", description: "One of the best games for nintendo. It doesn't matter what console you play zelda; the story, puzzles and gameplay always will keep you entertain."},
				{title: "Super Mario Wold", description: "There are a lot of Super Mario games but this Mario for Super Nintendo is still keeping entertain for about 15 years. It never gets old, I love to go back and replay the game once more. "}]; 
var shooter  = [{title: "Duke Nukem 3D Atomic", description: "Great game play, the character of Duke is a super hero that is here to make sure the aliens dont mess with out babes. What else do you want? good sence of humor, great boss fight, definaly a must play."}, 
				{title: "Bioshock", description:"Going to a underwater utopia know as Rapture, the city where with not religion bonduries. The use of plasmits and some guns with nice upgrates makes this game exelente in my opinion"},
                {title: "Wolftein", description: "This game not only take you to WWII but also to Hitler's Castle, the Eagle Nest. Kill a bunch of SS and Hitler, secret door and good boss fight this game is one of my all time favorites."}];

// window for Action view section
var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
});

/*var getActionDetail = function() {
  	var detailWindow = Ti.UI.createWindow({
  		backgroundColor: "#fff",
  		title: this.title,
  		modal: true,
  		
  	});
  	var detailText = Ti.UI.createLabel({
  		text: this.desc,
  		font: {fontSize: 14, fontFamily:"helvetica",fontWeight:"bold"},
  		top: 20,
  		left: 20
  	});
  	detailWindow.add(detailText);
  	navGroup.open(detailWindow,{animation: true});
};*/
// Action view section
var actionSection = Ti.UI.createTableViewSection({
	headerTitle: "Action",
	footerTitle: "Best Action Games Ever Play."
});

for (var i=0, j=action.length; i<j; i++ ){
	var theRow = Ti.UI.createTableViewRow({
		title: action[i].title,
		desc: action[i].description,
		hasChild: true
	});
	actionSection.add(theRow);
	//theRow.addEventListener("click", getActionDetail);	
};
//End of Action Section

// Start Of Shooter Section
/*var getShooterDetail = function() {
  	var detailWindow = Ti.UI.createWindow({
  		backgroundColor: "#fff",
  		title: this.title,
  		modal: true
  		
  	});
  	var detailText = Ti.UI.createLabel({
  		text: this.desc,
  		font: {fontSize: 14, fontFamily:"helvetica",fontWeight:"bold"},
  		top: 20,
  		left: 20
  	});
  	detailWindow.add(detailText);
  	navGroup.open(detailWindow,{animation: true});
};*/

var shooterSection = Ti.UI.createTableViewSection({
	headerTitle: "Shooter",
	footerTitle: "Best Shooter Games Ever Play"
});

for (var i=0, j=shooter.length; i<j; i++ ){
	var theRow = Ti.UI.createTableViewRow({
		title: shooter[i].title,
		desc: shooter[i].description,
		hasChild: true
	});
	shooterSection.add(theRow);	
};


var myGameSections = [actionSection, shooterSection];

table.setData(myGameSections);
navWindow.add(table);

table.addEventListener("click", function(event){
	console.log(event.source.title);
	var detailWindow = Ti.UI.createWindow({
  		backgroundColor: "#fff",
  		title: event.source.title,
  		modal: true
  		
  	});
  	var detailText = Ti.UI.createLabel({
  		text: event.source.desc,
  		font: {fontSize: 14, fontFamily:"helvetica",fontWeight:"bold"},
  		top: 20,
  		left: 20
  	});
  	detailWindow.add(detailText);
  	navGroup.open(detailWindow,{animation: true});
});