"use babel"

const { exec } = require("child_process")

export default {
  activate(state) {
    const editor = atom.workspace.getActiveTextEditor()
    const file = editor.getPath()
    exec(`haxelib run formatter -s ${file}`)
  },
}
