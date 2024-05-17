paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(0))

const path = new Path({
  strokeColor: "red",
  strokeWidth: 10,
  closed: true,
  selected: true,
})

path.add([0, 0])

for (let i = 0; i < 10; i++) {
  const point = [
    Math.random() * view.bounds.width,
    Math.random() * view.bounds.height,
  ]

  path.add({
    point: point,
    handleIn: [-100, -100],
    handleOut: [100, 100],
  })
}

for (let i = 0; i < path.segments.length; i++) {
  path.segments[i].selected = true
}
