// inspired by wayou from https://github.com/wayou/HTML5_Audio_Visualizer

var audio
var ctx
var analyser

var init = () => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext
}

function adjust (color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2))
}

var start = (themeColor) => {
  // init
  audio = document.getElementById('audio')
  ctx = new AudioContext()
  analyser = ctx.createAnalyser()
  var audioSrc = ctx.createMediaElementSource(audio)

  audioSrc.connect(analyser)
  analyser.connect(ctx.destination)

  // var frequencyData = new Uint8Array(analyser.frequencyBinCount)
  var bufferLength = analyser.frequencyBinCount
  var dataArray = new Uint8Array(bufferLength)

  // we're ready to receive some data!
  var canvas = document.getElementById('canvas')
  var cwidth = canvas.width
  var cheight = canvas.height - 2
  var meterWidth = 20 // width of the meters in the spectrum
  var gap = 2 // gap between meters
  var capHeight = 2
  var capStyle = '#fff'
  var meterNum = 800 / (10 + gap) // count of the meters
  var capYPositionArray = [] /// /store the vertical position of hte caps for the preivous frame
  ctx = canvas.getContext('2d')
  var gradient = ctx.createLinearGradient(0, 0, 0, 250)

  var colorBottom = adjust(themeColor, -10)
  var colorMid = adjust(themeColor, +100)
  var colorTop = adjust(themeColor, +230)

  // gradient.addColorStop(1, '#fe457cde')
  gradient.addColorStop(0, `${colorTop}30`)
  gradient.addColorStop(0.7, `${colorMid}60`)
  gradient.addColorStop(1, `${colorBottom}D0`)
  // loop
  function renderFrame () {
    // var array = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(dataArray)
    var step = Math.round(dataArray.length / meterNum) // sample limited data from the total array
    ctx.clearRect(0, 0, cwidth, cheight)
    for (var i = 0; i < meterNum; i++) {
      var value = dataArray[i * step]
      if (capYPositionArray.length < Math.round(meterNum)) {
        capYPositionArray.push(value)
      };
      ctx.fillStyle = capStyle
      // draw the cap, with transition effect
      // if (value < capYPositionArray[i]) {
      //   ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight)
      // } else {
      //   ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight)
      //   capYPositionArray[i] = value
      // };
      ctx.fillStyle = gradient // set the filllStyle to gradient for a better look
      ctx.fillRect(i * 22 /* meterWidth+gap */, cheight - value + capHeight, meterWidth, cheight) // the meter
    }
    requestAnimationFrame(renderFrame)
  }
  renderFrame()
  // audio.play();
}
var stop = () => {
  console.log(analyser)

  analyser.close()
}
export default { init, start, stop }
