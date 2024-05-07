// @ts-check
paper.install(window)
paper.setup(document.querySelector("canvas"))

// Basic shapes
// See `Shaped Paths` in the Path reference paperjs.org/reference/path/

const circle = new Path.Circle({
  radius: 100,
  fillColor: "yellow",
  position: [200, 200],
})

const rectangle = new Path.Rectangle({
  width: 180,
  height: 180,
  fillColor: "green",
  position: [500, 200],
})

const star = new Path.Star({
  points: 10,
  center: [200, 500],
  radius1: 50,
  radius2: 100,
  fillColor: "blue",
})

const triangle = new Path.RegularPolygon({
  center: [500, 500],
  sides: 3,
  radius: 100,
  fillColor: "red",
})
