// Note: add an mp3 called "audio" to this folder.
const audio = new Audio()
audio.src = "audio.mp3"

let analyser
let audioData
let audioSource
let bufferLength
let started = false

const path = new Path({ strokeColor: "blue", strokeWidth: 10, selected: true })

function start() {
  // Only run this function once.
  if (started) return

  // Create a new audio context and analyzer and connect it to the audio file.
  audioCtx = new window.AudioContext()
  audioSource = audioCtx.createMediaElementSource(audio)
  analyser = audioCtx.createAnalyser()
  audioSource.connect(analyser)
  analyser.connect(audioCtx.destination)
  // The resolution (how many samples we read from the audio). This has to be
  // a power of 2 and bigger or equal than 32.
  analyser.fftSize = 32
  bufferLength = analyser.frequencyBinCount
  audioData = new Uint8Array(bufferLength)

  // Create a path segment for each point of audio information.
  for (let i = 0; i < bufferLength; i++) {
    const progress = i / (bufferLength - 1)
    path.add(progress * view.bounds.width, view.bounds.center.y)
  }

  started = true
}

function onFrame() {
  if (analyser) {
    analyser.getByteFrequencyData(audioData)
    for (let i = 0; i < bufferLength; i++) {
      const segment = path.segments[i]
      segment.point.y = view.center.y + audioData[i]
    }
    path.smooth()
  }
}

// UI
const play = new PointText({
  content: "play",
  position: [50, 50],
  fontSize: 24,
})
play.on("click", () => {
  start()
  audio.play()
})

const pause = new PointText({
  content: "pause",
  position: [150, 50],
  fontSize: 24,
})
pause.on("click", () => {
  audio.pause()
})
