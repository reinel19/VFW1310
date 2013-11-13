var cWin = Ti.UI.currentWindow;

var textField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 50, 
  left: 10,
  width: 250, 
  height: 60,
  textHint: "Game one"
});
var textField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: (textField.top + textField.height) + 10, 
  left: 10,
  width: 250, 
  height: 60,
  textHint: "Game Two"
});
var textField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: (textField2.top + textField2.height) + 10, 
  left: 10,
  width: 250, 
  height: 60,
  textHint: "Game Three"
});


// Create a Button.
var aButton = Ti.UI.createButton({
	title : "Done",
	height : 50,
	width : 150,
	top : (textField3.top + textField3.height) + 20,
	left : 10
});

// Listen for click events.
aButton.addEventListener('click', function() {
	alert("Your Favorite Games Are: " + [textField.getValue() + ", "  + textField2.getValue() + ", "  + textField3.getValue() + "."]);
});

// Add to the parent view.
cWin.add(textField);
cWin.add(textField2);
cWin.add(textField3);
cWin.add(aButton);
