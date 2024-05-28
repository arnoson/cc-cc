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
group.bounds.selected = true
