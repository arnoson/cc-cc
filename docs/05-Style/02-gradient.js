paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(1))

// -- Linear gradient
const rectangle = new Path.Rectangle({
  width: 200,
  height: 200,
  position: [150, 150],
})

rectangle.fillColor = {
  gradient: {
    stops: ["yellow", "red", "blue"],
  },
  // we need to define the gradient's start (origin) and end (destination)
  // points.
  origin: rectangle.bounds.topLeft,
  destination: rectangle.bounds.bottomRight,
}

// -- Radial gradient
const circle = new Path.Circle({
  radius: 100,
  center: [350, 150],
})

circle.fillColor = {
  gradient: {
    stops: ["yellow", "fuchsia"],
    radial: true,
  },
  // we need to define the gradient's start (origin) and end (destination)
  // points.
  origin: circle.bounds.center,
  destination: circle.bounds.leftCenter,
}
