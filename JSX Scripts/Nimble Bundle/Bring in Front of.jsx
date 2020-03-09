#target Illustrator
#targetengine main

//  script.name = Bottomclipper.jsx;
//  script.required = at least two paths selected, BOTTOM path is the clipping mask;
//  script.parent = Herman van Boeijen, www.nimbling.com // 22-12-2014;
//  Big thanks to CarlosCanto and MuppetMark on the Adobe Illustrator Scripting Forums

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function Main(curDoc, sel, amountofselectedobjects){
    if (amountofselectedobjects){
        if(curDoc.activeLayer.locked || !curDoc.activeLayer.visible){
            alert("Please select objects on an unlocked and visible layer,\nthen run this script again.");
        }else{
                if (amountofselectedobjects <= 1){
                sel[0].duplicate(sel[0], ElementPlacement.PLACEBEFORE);
                sel = curDoc.selection;
                app.selection = [];
                sel[0].selected = true;
                return; //AND EXIT
            } else {

            for (i = 1 ; i <= amountofselectedobjects-1 ; i++) {
                sel[i].move(sel[0], ElementPlacement.PLACEBEFORE);
            }            
            return; //AND EXIT
            }
        }
    }
}


//INIT, Is there a document open?
if ( app.documents.length > 0 ) {
    var curDoc = app.activeDocument;
}else{
    Window.alert("You must open at least one document.");
}

var sel = curDoc.selection; // get selection Pageitems
var amountofselectedobjects = sel.length;

Main(curDoc, sel, amountofselectedobjects);