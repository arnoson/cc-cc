// For a more examples see te `Tweening Functions` section:
// http://paperjs.org/reference/item/#tween-to-options

const path = new Path.Rectangle({
  width: 100,
  height: 100,
  position: view.center,
  fillColor: "blue",
  // Note: this is needed if we want to tween the `rotation` property.
  applyMatrix: false,
})

// Animate the Path when we click it.
path.on("click", function () {
  path.tween(
    // The new properties the path will be be tweened into.
    {
      rotation: path.rotation + 180,
      "position.x": randomMinMax(100, view.bounds.width - 100),
      "fillColor.hue": path.fillColor.hue + 90,
    },
    // Options:
    // - duration: how long does the tween take
    // - easing: can be one of the following: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint"
    {
      duration: 2000,
      easing: "easeInOutCubic",
    }
  )
})

// Add a small hint.
new PointText({
  content: "Click on the rectangle",
  position: [100, 50],
})
