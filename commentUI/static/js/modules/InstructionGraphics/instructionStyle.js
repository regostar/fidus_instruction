import {Plugin, PluginKey, TextSelection} from "prosemirror-state";
import {addAlert, Dialog, getJson} from "../common"
import {getCommentDuringCreationDecoration, getSelectedChanges, getFootnoteMarkers} from "../editor/state_plugins"

const key = new PluginKey('text_key123#354123353536');
let once = true;
export let instructionUI = function(options){
    return new Plugin ({
    key,
    state: {
        init(config,state) {
          console.log(options.editor.currentView)
      /*
          let doms = document.getElementsByClassName("help")
          let i
          console.log(doms[0])
          console.log(doms.length)
          for (i=0; i< doms.length; i++){
            doms[i].classList.add("hide")
            console.log(doms[i])
          }
      */
          return{}
        },
       apply(tr, prev, oldState, state) {
           // console.log(options.editor.view.state.doc)
           //console.log(window.theApp.page.view.state)
           console.log("marginboxes")
           console.log(options.editor.mod.marginboxes)

           console.log(state.selection.$anchor.node(2))
           //console.log(window.theApp.page.view.state.selection.$anchor.node(1)) // prev state
           console.log(state.selection.$anchor)
           const marginBoxes = [],
           referrers = [],
           selectedChanges = getSelectedChanges(options.editor.currentView.state);
           console.log(marginBoxes);
         
	   // Adding a marginbox to the corresponding text
           if (state.selection.$anchor.node(2).attrs.help ) { // Help/instruction margin boxes
             marginBoxes.push(Object.assign({
               type: 'help',
               data: state.selection.$anchor.node(2).attrs.help
             }))
           referrers.push(state.selection.$anchor.pos+1)
           console.log("yo")
           }
    
    	} 

    }  
    })
}




