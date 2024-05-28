// -- Straight path
const pathStraight = new Path({
  strokeColor: "yellow",
  strokeWidth: 5,
  selected: true,
})
// We can add each point to our path individually.
pathStraight.add([25, 120])
pathStraight.add([90, 70])
pathStraight.add([150, 25])
pathStraight.add([220, 120])

// -- Curved path
const pathCurved = new Path({
  strokeColor: "yellow",
  strokeWidth: 10,
  selected: true,
})
// We can also set our segments as one array and provide handles to create
// bezier curves.
pathCurved.segments = [
  { point: [305, 120], handleOut: [20, -50] },
  { point: [370, 70], handleIn: [-20, -20], handleOut: [20, 20] },
  { point: [430, 25], handleIn: [-40, 0], handleOut: [40, 0] },
  { point: [500, 120] },
]
// Optionally we can also close the path.
pathCurved.closed = true
// Select each segment, so we can see the handles.
pathCurved.segments.forEach((segment) => (segment.selected = true))
