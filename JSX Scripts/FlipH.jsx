﻿#target Illustrator
	    var doc = app.activeDocument;                   //current document
			var backitem = sel[sl-1];
			newGroup.move (backitem , ElementPlacement.PLACEAFTER);
	    for(var i = 0 ; i < sl; i++) sel[i].move( newGroup , ElementPlacement.PLACEATBEGINNING); //Group these fuckers!
			newGroup.transform(m); //apply the flip matrix to the group