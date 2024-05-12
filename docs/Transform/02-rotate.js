paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(1))

// -- Rotate -------------------------------------------------------------------
const blueTriangle = new Path.RegularPolygon({
  center: [150, 200],
  sides: 3,
  radius: 50,
  fillColor: "blue",
})

// Rotate the triangle around its pivot (because we have't set the pivot
// the triangle's center is used).
blueTriangle.rotate(10)

// -- Rotate around a custom pivot ---------------------------------------------
const greenTriangle = new Path.RegularPolygon({
  center: [500, 100],
  sides: 3,
  radius: 50,
  fillColor: "green",
})

// The pivot can also be *outside* the item's bounds. In this case we want it
// to be 80px below the bottom center point of its bounds.
greenTriangle.pivot = greenTriangle.bounds.bottomCenter.add({ x: 0, y: 80 })
new Path.Circle({
  fillColor: "red",
  radius: 5,
  position: greenTriangle.pivot,
})

const numTriangles = 5
// Note: we've already drawn the the first triangle, so we start at `i = 1`,
// instead of `i = 0`.
for (let i = 1; i < numTriangles; i++) {
  const angle = (360 / numTriangles) * i
  const clone = greenTriangle.clone()
  clone.rotate(angle)
  // We could also apply other transformations like scaling each item
  // differently. This looks especially interesting if you increase the
  // number of triangles.
  // clone.scale(Math.sin(i * 0.35), clone.bounds.center)
}

// Show the bounds of the original triangle so we see what's happening.
greenTriangle.bounds.selected = true
