<template>
  <div
    class="bars"
    :class="fullLayout ? 'full-layout' : ''"
  >
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: Boolean
    }
  },
  computed: {
    fullLayout () {
      return this.layout
    }
  }
}
</script>

<style scoped>
.bars {
    height: 30px;
    left: 50%;
    margin: -30px 0 0 -54.5%;
    position: absolute;
    bottom: 95px;
    width: 100vw;
    z-index: 1;
    transition: 0.4s;
}
.full-layout{
  bottom: 56px;
}

.bar {
   background: #fe457cde;
    bottom: 1px;
    height: 3px;
    position: absolute;
    width: 4%;
    animation: sound 0ms -800ms linear infinite alternate;
}

@keyframes sound {
    0% {
       opacity: .35;
        height: 3px;
    }
    100% {
        opacity: 1;
        height: 28px;
    }
}

.bar:nth-child(1)  { left: 5%; animation-duration: 474ms; }
.bar:nth-child(2)  { left: 10%; animation-duration: 433ms; }
.bar:nth-child(3)  { left: 15%; animation-duration: 407ms; }
.bar:nth-child(4)  { left: 20%; animation-duration: 458ms; }
.bar:nth-child(5)  { left: 25%; animation-duration: 400ms; }
.bar:nth-child(6)  { left: 30%; animation-duration: 427ms; }
.bar:nth-child(7)  { left: 35%; animation-duration: 441ms; }
.bar:nth-child(8)  { left: 40%; animation-duration: 419ms; }
.bar:nth-child(9)  { left: 45%; animation-duration: 487ms; }
.bar:nth-child(10) { left: 50%; animation-duration: 442ms; }
.bar:nth-child(11)  { left: 55%; animation-duration: 474ms; }
.bar:nth-child(12)  { left: 60%; animation-duration: 433ms; }
.bar:nth-child(13)  { left: 65%; animation-duration: 407ms; }
.bar:nth-child(14)  { left: 70%; animation-duration: 458ms; }
.bar:nth-child(15)  { left: 75%; animation-duration: 400ms; }
.bar:nth-child(16)  { left: 80%; animation-duration: 427ms; }
.bar:nth-child(17)  { left: 85%; animation-duration: 441ms; }
.bar:nth-child(18)  { left: 90%; animation-duration: 419ms; }
.bar:nth-child(19)  { left: 95%; animation-duration: 487ms; }
.bar:nth-child(20) { left: 100%; animation-duration: 442ms; }
</style>
