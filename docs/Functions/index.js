paper.install(window)
paper.setup(document.querySelector("canvas"))

// Note: if you want a more detailed introduction to functions checkout the
// codecademy lesson: https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions

// 1. Our code without a function
const circle = new Path.Circle({
  fillColor: "red",
  radius: 100,
  center: view.center,
})

// 2. The same code wrapped inside a function
// We list all parameters we want to use (color, radius, ...).
// A parameter is just a variable that doesn't have a value yet. The parameter
// can be different each time we call the function (see below).
function createCircle({ color, radius }) {
  // Create a new empty group.
  const output = new Group()

  const circle = new Path.Circle({
    fillColor: color, // We use the parameter `color` here ...
    radius: radius, // ... and the parameter `radius` here
    center: view.center,
  })
  // Each time we create a new path or copy a path -- like `new Path.Circle()`,
  // `new Path()`, `path.clone()`, ... -- we need to add it to the group.
  output.addChild(circle)

  // At the end of the function, we return the group.
  return output
}

// Each time we call the function, we have to specify values for the function's
// parameters (color, radius, ...).
const circle1 = createCircle({ color: "blue", radius: 10 })
// Because we return a group from our function, we can store this group inside a
// variable -- `circle1` in the case above. Because `circle1` is just a group,
// we can change all the properties that a group has, for example the position.
circle1.position = [100, 100]

// A function is reusable, we can call it as many times as we want.
const circle2 = createCircle({ color: "green", radius: 50 })
circle2.position = [300, 50]

const circle3 = createCircle({ color: "hotpink", radius: 5 })
circle3.position = [20, 50]
