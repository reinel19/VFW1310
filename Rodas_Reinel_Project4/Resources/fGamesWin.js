var fGamesWin = Ti.UI.currentWindow;

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: fGamesWin
});

var games = [{title: "Metal Gear", desc:"I have been I huge fan of metal gear since Metal Gear Solid for Play Station. The cinematics are awesome, the gameplay is smooth and fun. The tactical part of the game is what got me into it. "}, 
			{title: "The Legend Of Zelda", desc: "One of the best games for nintendo. It doesn't matter what console you play zelda; the story, puzzles and gameplay always will keep you entertain."},
			{title: "Super Mario Wold", desc: "There are a lot of Super Mario games but this Mario for Super Nintendo is still keeping entertain for about 15 years. It never gets old, I love to go back and replay the game once more. "}];

var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	top:35
});

var gamesTable = Ti.UI.createTableViewSection({
	headerTitle: "Games",
	footerTitle: "This are my favorite games",
});
for (var i=0, j=games.length; i<j; i++ ){
	var theRow = Ti.UI.createTableViewRow({
		title: games[i].title,
		desc: games[i].desc,
		hasChild: true
	});
	gamesTable.add(theRow);
	
};
//
var myGameSections = [gamesTable];

table.setData(myGameSections);


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
  		top: 50,
  		left: 20
  	});
  	detailWindow.add(detailText);
  	navGroup.openWindow(detailWindow,{animation: true});
});

table.add(gamesTable);
fGamesWin.add(table);
navGroup.open();
