paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(2))

// -- Shadow
new Path.Circle({
  fillColor: "white",
  radius: 100,
  center: [150, 150],
  shadowColor: "black",
  shadowBlur: 12,
  shadowOffset: [10, 10],
})

// -- Blend Mode
const circle1 = new Path.Circle({
  radius: 100,
  center: [400, 150],
  fillColor: "red",
})

const circle2 = new Path.Circle({
  radius: 100,
  center: [500, 150],
  fillColor: "blue",
})

// A list of all possible blend modes: http://paperjs.org/reference/item/#blendmode
circle2.blendMode = "screen"
