// For a more examples and an in-depth tutorial see:
// http://paperjs.org/tutorials/animation/creating-animations/

const path = new Path.Rectangle({
  width: 100,
  height: 100,
  position: view.center,
  fillColor: "blue",
})

// This function gets called each frame (many times a second) forever.
function onFrame() {
  // Rotate the path 3 degrees every frame.
  path.rotate(3)
  // Change the hue of the fill color by 1 every frame.
  path.fillColor.hue += 1
}
