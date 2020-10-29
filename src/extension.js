
const St = imports.gi.St;
const Main = imports.ui.main;
const Keyboard = imports.ui.keyboard.Keyboard;
const EdgeDragAction = imports.ui.edgeDragAction;
const Shell = imports.gi.Shell;
const Lang = imports.lang;

let gesture = new EdgeDragAction.EdgeDragAction(St.Side.BOTTOM, Shell.ActionMode.NORMAL);

function init() {

}

function enable() {
    gesture.connect('activated', Lang.bind(this, function() {
            Main.keyboard._keyboardRequested = true;
            Main.keyboard._keyboardVisible = false;
            if(typeof Main.keyboard.Show === 'function') {
                Main.keyboard.Show(global.get_current_time()); // up to 3.28
            } else if (typeof Main.keyboard.show === 'function') {
                Main.keyboard.show(0); // from 3.28 to 3.31.2
            } else {
                Main.keyboard.open(0); // since 3.31.2
            }
        }));
        global.stage.add_action(gesture);
}

function disable() {
    global.stage.remove_action(gesture);
}
