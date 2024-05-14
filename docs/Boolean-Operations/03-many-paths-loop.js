import { uniteAll } from "../../assets/utils.js"

paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(2))

const radiusPetal = 60
const radiusInner = 100

const innerCircle = new Path.Circle({
  radius: radiusInner,
  fillColor: "blue",
  center: view.center,
  insert: false,
})

// We have to make a list of all the shapes that we want to unite.
// Let's start with the inner circle.
const shapes = [innerCircle]

for (let i = 0; i < 4; i++) {
  const vector = new Point(100, 0)
  vector.angle = (360 / 4) * i

  const outerCircle = new Path.Circle({
    radius: radiusPetal,
    fillColor: "blue",
    center: view.center.add(vector),
    insert: false,
  })

  // Add the shape we created.
  shapes.push(outerCircle)
}

const united = uniteAll(shapes)
united.selected = true
