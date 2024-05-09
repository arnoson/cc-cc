paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(2))

const path = new Path({ strokeColor: "yellow", strokeWidth: 5 })
path.segments = [
  [50, 50],
  [300, 200],
  [500, 100],
  [700, 150],
]

const smoothPath = path.clone()
smoothPath.strokeColor = "red"

smoothPath.smooth({ type: "continuous" })
// There are different smoothing types
// - "continuous" (in most cases the smoothest smoothing ;)
// - "asymmetric" (the default)
// - "catmull-rom"
// - "geometric"
