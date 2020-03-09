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
    margin: -30px 0 0 -51.5%;
    position: absolute;
    bottom: 95px;
    width: 100vw;
    z-index: 1;
    transition: 0.4s;
    pointer-events: none;
}
.full-layout{
  bottom: 56px;
}

.bar {
   background: #fe457cde;
    bottom: 1px;
    height: 3px;
    position: absolute;
    width: 1.7%;
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

.bar:nth-child(1)  { left: 0%; animation-duration: 474ms; }
.bar:nth-child(2)  { left: 2%; animation-duration: 433ms; }
.bar:nth-child(3)  { left: 4%; animation-duration: 407ms; }
.bar:nth-child(4)  { left: 6%; animation-duration: 458ms; }
.bar:nth-child(5)  { left: 8%; animation-duration: 400ms; }
.bar:nth-child(6)  { left: 10%; animation-duration: 427ms; }
.bar:nth-child(7)  { left: 12%; animation-duration: 441ms; }
.bar:nth-child(8)  { left: 14%; animation-duration: 419ms; }
.bar:nth-child(9)  { left: 16%; animation-duration: 487ms; }
.bar:nth-child(10) { left: 18%; animation-duration: 442ms; }
.bar:nth-child(11) { left: 20%; animation-duration: 474ms; }
.bar:nth-child(12) { left: 22%; animation-duration: 433ms; }
.bar:nth-child(13) { left: 24%; animation-duration: 407ms; }
.bar:nth-child(14) { left: 26%; animation-duration: 458ms; }
.bar:nth-child(15) { left: 28%; animation-duration: 400ms; }
.bar:nth-child(16) { left: 30%; animation-duration: 427ms; }
.bar:nth-child(17) { left: 32%; animation-duration: 441ms; }
.bar:nth-child(18) { left: 34%; animation-duration: 419ms; }
.bar:nth-child(19) { left: 36%; animation-duration: 487ms; }
.bar:nth-child(20) { left: 38%; animation-duration: 442ms; }
.bar:nth-child(21) { left: 40%; animation-duration: 474ms; }
.bar:nth-child(22) { left: 42%; animation-duration: 433ms; }
.bar:nth-child(23) { left: 44%; animation-duration: 407ms; }
.bar:nth-child(24) { left: 46%; animation-duration: 458ms; }
.bar:nth-child(25) { left: 48%; animation-duration: 400ms; }
.bar:nth-child(26) { left: 50%; animation-duration: 427ms; }
.bar:nth-child(27) { left: 52%; animation-duration: 441ms; }
.bar:nth-child(28) { left: 54%; animation-duration: 419ms; }
.bar:nth-child(29) { left: 56%; animation-duration: 487ms; }
.bar:nth-child(30) { left: 58%; animation-duration: 442ms; }
.bar:nth-child(31) { left: 60%; animation-duration: 474ms; }
.bar:nth-child(32) { left: 62%; animation-duration: 433ms; }
.bar:nth-child(33) { left: 64%; animation-duration: 407ms; }
.bar:nth-child(34) { left: 66%; animation-duration: 458ms; }
.bar:nth-child(35) { left: 68%; animation-duration: 400ms; }
.bar:nth-child(36) { left: 70%; animation-duration: 427ms; }
.bar:nth-child(37) { left: 72%; animation-duration: 441ms; }
.bar:nth-child(38) { left: 74%; animation-duration: 419ms; }
.bar:nth-child(39) { left: 76%; animation-duration: 487ms; }
.bar:nth-child(40) { left: 78%; animation-duration: 442ms; }
.bar:nth-child(41) { left: 80%; animation-duration: 442ms; }
.bar:nth-child(42) { left: 82%; animation-duration: 433ms; }
.bar:nth-child(43) { left: 84%; animation-duration: 407ms; }
.bar:nth-child(44) { left: 86%; animation-duration: 458ms; }
.bar:nth-child(45) { left: 88%; animation-duration: 400ms; }
.bar:nth-child(46) { left: 90%; animation-duration: 427ms; }
.bar:nth-child(47) { left: 92%; animation-duration: 441ms; }
.bar:nth-child(48) { left: 94%; animation-duration: 419ms; }
.bar:nth-child(49) { left: 96%; animation-duration: 487ms; }
.bar:nth-child(50) { left: 98%; animation-duration: 442ms; }
.bar:nth-child(51) { left: 100%; animation-duration: 442ms; }
</style>
