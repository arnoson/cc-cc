let analyser
let audioData
let audioCtx
let audioSource
let bufferLength
let started = false

const path = new Path({ strokeColor: "blue", strokeWidth: 10, selected: true })

async function start() {
  // Only run this function once.
  if (started) return

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

  // Create a new audio context and analyzer and connect it to the audio file.
  audioCtx = new window.AudioContext()
  audioSource = audioCtx.createMediaStreamSource(stream)
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
const listen = new PointText({
  content: "listen",
  position: [50, 50],
  fontSize: 24,
})
listen.on("click", () => {
  start()
  if (audioCtx) audioCtx.resume()
})

const mute = new PointText({
  content: "mute",
  position: [150, 50],
  fontSize: 24,
})
mute.on("click", () => {
  if (audioCtx) audioCtx.suspend()
})
