paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(3))

const path = new Path.Arc({
  from: [50, 50],
  through: [300, 100],
  to: [500, 300],
  selected: true,
})

const circle = new Path.Circle({ fillColor: "red", radius: 30 })
circle.position = path.getPointAt(path.length * 0.5)

const numPoints = 10
for (let i = 0; i < numPoints; i++) {
  const offset = (path.length / (numPoints - 1)) * i
  const point = path.getPointAt(offset)
  const tangent = path.getTangentAt(offset)

  const triangle = new Path.RegularPolygon({
    sides: 3,
    radius: 30,
    fillColor: "blue",
    center: point,
  })
  triangle.rotate(tangent.angle)
}
