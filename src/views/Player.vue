<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" v-if="song.url">

        <a :href="song.url">play</a>
        <!-- <audio src="https://music.163.com/song/media/outer/url?id=498139.mp3"></audio> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      song: {}
    }
  },

  mounted () {
    this.id = this.$route.query.id
    axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${this.id}`)
      .then((response) => {
        console.log(response.data.data)
        this.song = response.data.data[0]
      })
    var music = document.getElementById('music')
    var playButton = document.getElementById('play')
    var pauseButton = document.getElementById('pause')
    // var playhead = document.getElementById('elapsed')
    // var timeline = document.getElementById('slider')
    // var timer = document.getElementById('timer')
    // var duration
    // pauseButton.style.visibility = 'hidden'

    // var timelineWidth = timeline.offsetWidth - playhead.offsetWidth
    // music.addEventListener('timeupdate', timeUpdate, false)

    // function timeUpdate () {
    //   var playPercent = timelineWidth * (music.currentTime / duration)
    //   playhead.style.width = playPercent + 'px'

    //   var secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100)
    //   if (secondsIn <= 9) {
    //     timer.innerHTML = '0:0' + secondsIn
    //   } else {
    //     timer.innerHTML = '0:' + secondsIn
    //   }
    // }

    playButton.onclick = function () {
      music.play()
      // playButton.style.visibility = 'hidden'
      // pause.style.visibility = 'visible'
    }

    pauseButton.onclick = function () {
      music.pause()
      // playButton.style.visibility = 'visible'
      // pause.style.visibility = 'hidden'
    }

    // music.addEventListener('canplaythrough', function () {
    //   duration = music.duration
    // }, false)
  },
  methods: {
    play () {
      console.log(this.$refs.audio)
      this.$refs.audio.play()
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
// Insperation: https://dribbble.com/shots/1962035-Freebie-Music-Player-Dark-Version

body {
   background-color: #EDEDED;
}

$player-height: 190px;
$player-width: 430px;

h1 {
   font-family: 'Open Sans', sans-serif;
   font-size: 13pt;
   font-weight: 600;
   text-transform: uppercase;
   color: white;
   cursor: default;
}

h4 {
   font-family: 'Open Sans', sans-serif;
   font-size: 8pt;
   font-weight: 400;
   cursor: default;
}

h2 {
   font-family: 'Open Sans', sans-serif;
   font-size: 13pt;
   font-weight: 300;
   color: white;
   cursor: default;
}

@mixin unselectable() {
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

.player {
   height: $player-height;
   width: $player-width;
   background-color: #1E2125;
   position: absolute;
   @include unselectable();
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   -webkit-transform: translate(-50%, -50%);

   ul {
      list-style: none;
      li {
         display: inline-block;
      }
   }
}

.cover {
   position: absolute;
   top: 0;
   left: 0;
   img {
      height: $player-height;
      width: $player-height;
   }
}

.info {

   h1 {
      margin-top: 15px;
      margin-left: 180px;
      line-height: 0;
   }

   h4 {
      margin-left: 180px;
      line-height: 20px;
      color: #636367;
   }

   h2 {
      margin-left: 180px;
   }
}

.button-items {
   margin-left: 180px;
}

#slider {
  width: 182px;
  height: 4px;
  background: #151518;
  border-radius: 2px;
  div {
      width: 4px;
      height: 4px;
      margin-top: 1px;
      background: #EF6DBC;
      border-radius: 2px;
   }
}

#timer {
   color: #494B4E;
   line-height: 0;
   font-size: 9pt;
   float: right;
   font-family: Arial, Sans-Serif;
}

.controls {
   margin-top: 20px;

   svg:nth-child(2) {
      margin-left: 5px;
      margin-right: 5px;
   }
}

#play {
   padding: 0 3px;
   width: 30px;
   height: 30px;
   x: 0px;
   y: 0px;
   enable-background: new 0 0 25 25;

   g {
      stroke: #FEFEFE;
      stroke-width: 1;
      stroke-miterlimit: 10;

      path {
         fill: #FEFEFE;
      }
   }
}

#play:hover {
   cursor: pointer;
   g {
      stroke: #8F4DA9;
      cursor: pointer;

      path {
         fill: #9b59b6;
         cursor: pointer;
      }
   }
}

.step-backward {
   width: 18px;
   height: 18px;
   x: 0px;
   y: 0px;
   enable-background: new 0 0 25 25;
   margin-bottom: 5px;

   g polygon {
      fill: #FEFEFE;
   }
}

.step-foreward {
   width: 18px;
   height: 18px;
   x: 0px;
   y: 0px;
   enable-background: new 0 0 25 25;
   margin-bottom: 5px;

   g polygon {
      fill: #FEFEFE;
   }
}

#pause {
   x: 0px;
   y: 0px;
   enable-background: new 0 0 25 25;
   width: 30px;
   height: 30px;
   position: absolute;
   margin-left: -38px;
   cursor: pointer;

   rect {
      fill: white;
   }
}

#pause:hover rect {
   fill: #8F4DA9;
}

.step-backward g polygon:hover, .step-foreward g polygon:hover {
   fill: #EF6DBC;
   cursor: pointer;
}

.social {
   text-align: center;
}

.twitter {
  color: #BDBDBD;
  font-family: sans-serif;
  text-decoration: none;

  &:hover {
    color: #ecf0f1;
  }
}

.github {
  color: #BDBDBD;
  font-family: sans-serif;
  text-decoration: none;

  &:hover {
    color: #ecf0f1;
  }
}

p {
  color: #BDBDBD;
}

#skip {
  float: right;
  margin-top: 10px;

  p {
    color: #2980b9;
  }

  p:hover {
    color: #e74c3c;
    cursor: pointer;
  }
}

.expend {
   padding: 0.5px;
   cursor: pointer;

   svg:hover g polygon {
      fill: #EF6DBC;
   }
}
</style>
