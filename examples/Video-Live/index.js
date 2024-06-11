const video = document.querySelector("#video")
const videoStill = document.querySelector("#video-still")
const videoStillContext = videoStill.getContext("2d")

const path = new Path({ strokeColor: "blue", strokeWidth: 10, selected: true })

let started = false
async function start() {
  // Only run this function once.
  if (started) return

  const stream = await navigator.mediaDevices.getUserMedia({ video: true })

  video.srcObject = stream
  // video.play()

  started = true
}

let raster

function onMouseDown() {
  // Request video access.
  start()

  // Remove the previous raster
  if (raster) raster.remove()

  // Place a still of the video in the video-still canvas.
  videoStillContext.drawImage(video, 0, 0, videoStill.width, videoStill.height)

  // Create a new raster based on the video-still canvas.
  raster = new paper.Raster(videoStill)

  // Optional: make the raster fill the whole screen.
  raster.fitBounds(view.bounds)
}

new PointText({
  content: "click on the screen",
  position: view.center,
  fontSize: 24,
})
