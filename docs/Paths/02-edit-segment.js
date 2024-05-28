const circle = new Path.Circle({
  strokeColor: "aqua",
  strokeWidth: 5,
  radius: 100,
  center: [200, 200],
})

circle.segments[2].handleIn = [50, -50]
circle.segments[2].handleOut = [-50, 50]

// Select the segment so we see what's happening.
circle.segments[2].selected = true
