// The paths we want to work with.
const group = new Group([
  new Path.Circle({
    fillColor: "blue",
    radius: 150,
    center: [300, 200],
  }),
  new Path.Circle({ radius: 100, fillColor: "red", center: [500, 400] }),
  new Path.Circle({ radius: 120, fillColor: "yellow", center: [200, 400] }),
])
// We remove the group to make it invisible. We only want to see the random
// result, not the orgiginal paths.
group.remove()

// The effect function. It expects a path and some options, like `amount` in
// this case.
function randomize(path, { amount }) {
  for (const segment of path.segments) {
    segment.point.x += randomMinMax(-amount, amount)
    segment.point.y += randomMinMax(-amount, amount)
  }
  return path
}

// We use a library called `tweakpane` to build a user interface.
const options = { amount: 5 }

const pane = new Pane()
// Add an input for the `amount` option.
pane.addBinding(options, "amount", { min: 0, max: 200 })
// Each time, something changes in the user interface we want to apply the
// effect again. We do this in the `update()` function.
pane.on("change", update)
// Also add a button to manually update the effect, so we don't have to reload
// the browser.
const button = pane.addButton({ title: "Update" })
button.on("click", update)

let result
function update() {
  // Cleanup the canvas by removing anything we might have drawn previously.
  if (result) result.remove()

  // Apply the `randomize` effect to the whole group. But because we wan't to
  // keep the original group, we clone it first.
  const clone = group.clone()
  result = applyPathEffect(clone, randomize, options)
  // Because the original group isn't visible (we removed it) the result is also
  // invisible, so we have to insert it.
  project.activeLayer.addChild(result)
}

// Run the update function once, so the the screen isn't blank in the beginning.
update()
