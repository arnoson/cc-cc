import { randomMinMax, uniteAll } from "../assets/utils.js"

paper.install(window)
paper.setup(document.querySelector("canvas"))

function createFlower({ color, radius }) {
  const output = new Group()

  const circle = new Path.Circle({
    fillColor: color,
    radius: radius,
    center: view.center,
  })
  output.addChild(circle)

  return output
}

const flower = createFlower({
  color: "blue",
  radius: 10,
})

output.position = [100, 100]

// function createFlower({ color, radiusPetal }) {
//   const output = new Group()

//   // Parameters
//   const radiusInner = 100
//   const numPetals = 10

//   const innerCircle = new Path.Circle({
//     radius: radiusInner,
//     fillColor: color,
//     center: view.center,
//     insert: false,
//   })
//   output.addChild(innerCircle)

//   // We have to make a list of all the shapes that we want to unite.
//   // Let's start with the inner circle.
//   const shapes = [innerCircle]

//   for (let i = 0; i < numPetals; i++) {
//     const outerCircle = new Path.Circle({
//       radius: radiusPetal,
//       fillColor: color,
//       center: view.center.add([0, 100]),
//       insert: false,
//     })
//     outerCircle.pivot = view.center
//     outerCircle.rotate((360 / numPetals) * i)

//     // Add the shape we created.
//     shapes.push(outerCircle)
//   }

//   const united = uniteAll(shapes)
//   output.addChild(united)

//   return output
// }

// const flower2 = createFlower({
//   color: "blue",
//   radiusPetal: 10,
// })
// flower2.position = view.center
// flower2.scale(0.5)
