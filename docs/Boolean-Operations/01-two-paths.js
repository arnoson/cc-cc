const circle = new Path.Circle({
  fillColor: "yellow",
  radius: 70,
  position: [100, 100],
})

const rectangle = new Path.Rectangle({
  fillColor: "yellow",
  width: 140,
  height: 140,
  position: [150, 150],
})

const united = circle.unite(rectangle)
const subtracted = circle.subtract(rectangle)
const excluded = circle.exclude(rectangle)
const intersected = circle.intersect(rectangle)
const divided = circle.divide(rectangle)

// Align the results in a grid.
united.position = united.position.add([250, 0])
subtracted.position = subtracted.position.add([500, 0])
excluded.position = excluded.position.add([0, 250])
intersected.position = intersected.position.add([250, 250])
divided.position = divided.position.add([500, 250])

// Select everything so we se what's going on.
circle.selected = true
rectangle.selected = true
united.selected = true
subtracted.selected = true
excluded.selected = true
intersected.selected = true
divided.selected = true
