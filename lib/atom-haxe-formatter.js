"use babel"

const { exec } = require("child_process")

export default {
  activate() {
    const listener = atom.workspace.observeTextEditors(editor => {
      editor.onDidSave(() => {
        const file = editor.getPath()
        exec(`haxelib run formatter -s ${file}`)
      })
    })

    // listener.dispose()
  },
}
