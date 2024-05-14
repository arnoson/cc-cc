import { uniteAll } from "../../assets/utils.js"

paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(1))

const radiusPetal = 60
const radiusInner = 100

const innerCircle = new Path.Circle({
  radius: radiusInner,
  fillColor: "red",
  center: view.center,
  insert: false,
})

const outerCircle1 = new Path.Circle({
  radius: radiusPetal,
  fillColor: "blue",
  center: view.center.add([100, 0]),
  insert: false,
})

const outerCircle2 = new Path.Circle({
  radius: radiusPetal,
  fillColor: "blue",
  center: view.center.subtract([100, 0]),
  insert: false,
})

const outerCircle3 = new Path.Circle({
  radius: radiusPetal,
  fillColor: "blue",
  center: view.center.add([0, 100]),
  insert: false,
})

const outerCircle4 = new Path.Circle({
  radius: radiusPetal,
  fillColor: "blue",
  center: view.center.subtract([0, 100]),
  insert: false,
})

const united = uniteAll([
  innerCircle,
  outerCircle1,
  outerCircle2,
  outerCircle3,
  outerCircle4,
])
united.selected = true

console.log("fu!")
