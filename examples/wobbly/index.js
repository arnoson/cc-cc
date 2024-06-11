const params = {
  amplitude: 10,
  step: 12,
  density: 0.5,
  offset: 0,
  selected: true,
}

function createWobbly(input, { step }) {
  // Create the "skeleton", a path with evenly distributed segments at a certain
  // distance (step) from each other.
  const skeleton = new Path({ insert: false })
  // to distribute the segments evenly, we have to adjust the step length
  // slightly to make it work.
  const steps = Math.round(input.length / step)
  const adjustedStep = input.length / steps
  for (let i = 0; i < steps; i++) {
    const offset = i * adjustedStep
    const point = input.getPointAt(offset)
    skeleton.add(point)
  }

  // This is the wobbly output path.
  const path = input.clone()
  project.activeLayer.addChild(path)
  path.segments = skeleton.segments
  path.selected = params.selected

  // For performance-reasons we calculate all normals once and only scale them
  // in the update() function.
  const normals = []
  for (const segment of skeleton.segments) {
    const offset = skeleton.getOffsetOf(segment.point)
    const tangent = skeleton.getTangentAt(offset)
    const orthogonal = tangent.rotate(-90)
    normals.push(orthogonal)
  }

  function update(options) {
    // To make waves fit seamlessly on a closed path, we have to make sure that
    // they are a multiple of of one wave-circle (PI * 2).
    const fullCircle = Math.PI * 2
    const wave =
      Math.round((skeleton.length * options.density) / fullCircle) * fullCircle

    for (let i = 0; i < skeleton.segments.length; i++) {
      const segment = skeleton.segments[i]
      const normal = normals[i]

      const progress = i / skeleton.segments.length
      const x = wave * progress

      const point =
        segment.point +
        normal * Math.sin(x + options.offset) * options.amplitude

      path.segments[i].point = point
    }

    path.smooth({ type: "continuous" })
  }

  return { path, update }
}

const path = new Path.Rectangle({
  width: 200,
  height: 200,
  strokeColor: "blue",
  fillColor: "red",
  position: view.center,
  radius: 25,
  insert: false,
})

let wobbly = createWobbly(path, params)
wobbly.update(params)

// UI
const pane = new Pane()
pane
  .addBinding(params, "amplitude", { min: 0, max: 200 })
  .on("change", () => wobbly.update(params))

pane.addBinding(params, "step", { min: 1, max: 50 }).on("change", () => {
  if (wobbly) wobbly.path.remove()
  wobbly = createWobbly(path, params)
  wobbly.update(params)
})

pane
  .addBinding(params, "density", { min: 0, max: 2 })
  .on("change", () => wobbly.update(params))

pane
  .addBinding(params, "selected")
  .on("change", () => (wobbly.path.selected = params.selected))

// Animation
function onFrame() {
  params.offset += 0.1
  wobbly.update(params)
}
