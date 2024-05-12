paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(0))

// By default, a path has its pivot in the center. So if set the circles
// position to the the top left corner of the screen [0, 0] parts of the circle
// will be hidden.
const circle = new Path.Circle({
  radius: 100,
  fillColor: "red",
})
circle.position = [0, 0]

// If we want to use another point like the paths top left corner, we have to
// change the path's pivot:
circle.pivot = circle.bounds.topLeft

// Now the path's top left corner will be positioned to the top left corner
// of the screen.
circle.position = [0, 0]

// To see whats happening, we can also show the bounds.
circle.bounds.selected = true
