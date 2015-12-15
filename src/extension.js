
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
            Main.keyboard.Show(global.get_current_time());
        }));
        global.stage.add_action(gesture);
}

function disable() {
    global.stage.remove_action(gesture);
}
