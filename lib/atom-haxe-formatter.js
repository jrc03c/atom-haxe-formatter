'use babel';

import AtomHaxeFormatterView from './atom-haxe-formatter-view';
import { CompositeDisposable } from 'atom';

export default {

  atomHaxeFormatterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomHaxeFormatterView = new AtomHaxeFormatterView(state.atomHaxeFormatterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomHaxeFormatterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-haxe-formatter:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomHaxeFormatterView.destroy();
  },

  serialize() {
    return {
      atomHaxeFormatterViewState: this.atomHaxeFormatterView.serialize()
    };
  },

  toggle() {
    console.log('AtomHaxeFormatter was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
