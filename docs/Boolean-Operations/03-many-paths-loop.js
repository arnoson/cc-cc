// Parameters
const radiusPetal = 50
const radiusInner = 100
const numPetals = 5

const innerCircle = new Path.Circle({
  radius: radiusInner,
  fillColor: "blue",
  center: view.center,
  insert: false,
})

// We have to make a list of all the shapes that we want to unite.
// Let's start with the inner circle.
const shapes = [innerCircle]

for (let i = 0; i < numPetals; i++) {
  const outerCircle = new Path.Circle({
    radius: radiusPetal,
    fillColor: "blue",
    center: view.center.add([0, 100]),
    insert: false,
  })
  outerCircle.pivot = view.center
  outerCircle.rotate((360 / numPetals) * i)

  // Add the shape we created.
  shapes.push(outerCircle)
}

const united = uniteAll(shapes)
united.selected = true
