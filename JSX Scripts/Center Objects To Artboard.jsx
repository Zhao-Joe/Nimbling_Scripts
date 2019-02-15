if ( app.documents.length > 0) {
  	mySelection = activeDocument.selection;
	  if (mySelection.length>0){

    var doc = app.activeDocument;
    var sel  = doc.selection;                       //current slection
	  var sl   = sel.length;

    app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
    // Get the active Artboard index
    var activeAB = doc.artboards[doc.artboards.getActiveArtboardIndex()];

    // Get the Width of the Artboard
    var artboardRight = activeAB.artboardRect[2];
    // Get the Height of the Artboard
    var artboardBottom = activeAB.artboardRect[3];
    var artboardX = activeAB.artboardRect[0];
    var artboardY = activeAB.artboardRect[1];
    // The page item you want to move. Reference it how you will. This just
    // obviously grabs the first pageItem in the document.
    for (var i = 0 ; i < sl; i++){
       var myPageItem = sel[i];

      // Here is where the magic happens. Set the position of the item.
      // [0,0] would be at the top left, so we have to compensate for the    artboard
      // height and width. We add item's height then split it for the vertical
      // offset, or we'd  end up BELOW the artboard.
      // Then we subtract the item's width and split the difference to center the
      // item horizontally.
      var horziontalCenterPosition = artboardX+((artboardRight - myPageItem.width)/2);
      var verticalCenterPosition = artboardY+((artboardBottom + myPageItem.height)/2);

      myPageItem.position = [horziontalCenterPosition, verticalCenterPosition];
    }
  }
}
