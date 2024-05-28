// Very detailed tutorial on vectors: http://paperjs.org/tutorials/geometry/vector-geometry/

const path = new Path({ strokeColor: "green", strokeWidth: 5 })
path.segments = [
  [50, 150],
  [200, 100],
  [350, 150],
  [500, 100],
]
path.smooth({ type: "continuous" })

const numStems = 3
for (let i = 0; i < numStems; i++) {
  const offset = (path.length / numStems) * i
  const point = path.getPointAt(offset)
  const tangent = path.getTangentAt(offset)

  const isEven = i % 2 === 0
  const rotation = isEven ? 20 : -20
  const vector = tangent.rotate(rotation).multiply(100)

  const stem = new Path({ strokeColor: "green", strokeWidth: 5 })
  stem.segments = [point, point.add(vector)]

  new Path.Circle({
    radius: 20,
    fillColor: "red",
    center: point.add(vector),
  })
}
