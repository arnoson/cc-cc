const polygon = new Path.RegularPolygon({
  radius: 100,
  sides: 10,
  center: [150, 150],
  fillColor: "blue",
})

const rectangle = new Path.Rectangle({
  width: 120,
  height: 120,
  fillColor: "green",
  position: [300, 150],
})

const group = new Group([polygon, rectangle])
// If we transform a group (scale, rotate, ...), the whole group will be
// transformed, not each child individually.
group.scale(0.6)
group.rotate(50)
