
import {instructionUI} from "./instructionStyle";
export class AlienInstr {
    constructor(editor) {
        this.editor = editor
    }

    init() {

        //console.log(window.theApp.page.view.state.selection.$anchor.node(2))
        //console.log(window.theApp.page.view.state.selection.$anchor.node(1))

       this.editor.statePlugins.push([instructionUI, doc => ({editor: this.editor, doc}) ]);

    }
}
