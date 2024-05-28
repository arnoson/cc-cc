// The parameters that we want to change with tweakpane.
const params = {
  file: "",
  color: "rgb(255, 0, 0)",
}

// Create a new tweakpane and redraw the circle each time we change the
// parameters.
const pane = new Pane()
pane.registerPlugin(TweakpaneFileImportPlugin)

// Here we will store our imported SVG.
let importedSVG

pane.addBinding(params, "color")

// Import
pane
  .addBinding(params, "file", {
    view: "file-input",
    filetypes: [".svg"],
  })
  .on("change", async function (event) {
    // Cleanup the old imported file before we import a new file.
    project.activeLayer.removeChildren()

    const file = event.value
    // In a `change` event a file is either added or deleted. We can only import
    // if a file is added.
    if (file) {
      // Import the new file.
      importedSVG = project.importSVG(await file.text(), { expandShapes: true })
    }
  })

// Export
pane
  .addButton({
    title: "Export",
  })
  .on("click", function () {
    const svg = project.exportSVG({ asString: true })
    downloadSVGFile("recolored", svg)
  })

pane.on("change", function () {
  // If we have already imported something, we will recolor it every time we
  // change the color in tweakpane.
  if (importedSVG) {
    importedSVG.fillColor = params.color
  }
})
