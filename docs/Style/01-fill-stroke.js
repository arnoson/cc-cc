paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(0))

// More information: http://paperjs.org/reference/style/

const star = new Path.Star({
  points: 10,
  radius1: 50,
  radius2: 100,
  center: [0, 0],
  // You can pass any styles right here when creating the shape:
  // fillColor: "red",
  // strokeColor: "green",
})

// -- Fill
const starWithFill = star.clone()
starWithFill.position = [150, 150]
starWithFill.fillColor = "blue"
// You can use all valid CSS colors, like named colors ("blue", "red") or
// CSS color syntax like "rgb(255, 0, 0)".

// -- Stroke
const starWithStroke = star.clone()
starWithStroke.position = [350, 150]
// When setting multiple style attributes you can also use a style object.
starWithStroke.style = {
  strokeColor: "blue",
  strokeWidth: 10,
  strokeJoin: "round",
}

// -- Dashed stroke
const starWithDashedStroke = star.clone()
starWithDashedStroke.position = [550, 150]
starWithDashedStroke.style = {
  strokeColor: "blue",
  dashArray: [5, 5],
  strokeWidth: 3,
  strokeJoin: "round",
  strokeCap: "round",
}
