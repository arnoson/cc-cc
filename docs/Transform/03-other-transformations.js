paper.install(window)
paper.setup(document.querySelectorAll("canvas").item(2))

const star1 = new Path.Star({
  points: 10,
  center: [100, 100],
  radius1: 20,
  radius2: 40,
  fillColor: "orange",
})

const star2 = star1.clone()
star2.position = [300, 100]
star2.scale(3, 1)

const star3 = star1.clone()
star3.position = [500, 100]
star3.skew(50, 20)
