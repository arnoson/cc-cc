paper.install(window)
paper.setup(document.querySelector("canvas"))

const circle = new Path.Circle({
  radius: 100,
  fillColor: "red",
  center: [100, 100],
  selected: true,
})

const rectangle = new Path.Rectangle({
  width: 100,
  height: 100,
  fillColor: "green",
  position: [200, 100],
  selected: true,
})

const rectangle2 = new Path.Rectangle({
  width: 100,
  height: 100,
  fillColor: "blue",
  position: [200, 200],
  selected: true,
})

const united1 = circle.unite(rectangle)
const united2 = united1.unite(rectangle2)

united2.position = view.center
united2.selected = true

circle.remove()
rectangle.remove()
rectangle2.remove()
united1.remove()
