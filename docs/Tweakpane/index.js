import { Pane } from "../../assets/tweakpane.js"
paper.install(window)
paper.setup(document.querySelector("canvas"))

// The parameters that we want to change with tweakpane.
const params = {
  radius: 200,
  color: "rgb(255, 0, 0)",
  selected: false,
  center: view.center.clone(),
}

let circle
function draw() {
  // If we have already drawn a circle, we have to remove it.
  if (circle) circle.remove()

  // Draw the new circle.
  circle = new Path.Circle({
    radius: params.radius,
    center: params.center,
    fillColor: params.color,
    selected: params.selected,
  })
}

// Draw the circle the first time.
draw()

// Create a new tweakpane and redraw the circle each time we change the
// parameters.
const pane = new Pane()
pane.addBinding(params, "color")
pane.addBinding(params, "radius", { min: 10, max: 200 })
pane.addBinding(params, "selected")
pane.addBinding(params, "center", {
  x: { min: 0, max: view.size.width },
  y: { min: 0, max: view.size.height },
})
pane.on("change", draw)
