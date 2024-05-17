paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(1))

const path = new Path({
  strokeColor: "cyan",
  strokeWidth: 10,
  closed: true,
  selected: true,
})

path.add([0, 0])

const randomSegments = []
for (let i = 0; i < 10; i++) {
  const point = [
    Math.random() * view.bounds.width,
    Math.random() * view.bounds.height,
  ]
  const segment = {
    point: point,
    handleIn: [-100, -100],
    handleOut: [100, 100],
  }
  randomSegments.push(segment)
}

const startPoint = [0, 0]
const endPoint = view.bounds.bottomRight
path.segments = [startPoint, ...randomSegments, endPoint]

// Select every segment so we see what's going on
for (let i = 0; i < path.segments.length; i++) {
  path.segments[i].selected = true
}
