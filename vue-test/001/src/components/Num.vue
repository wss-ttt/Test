<template>
    <span class="num-scroll" :id="id" :style="numberstyle" :class="numberClass"></span>
</template>

<script>
import uuidv1 from 'uuid/v1'
export default {
  components: {},
  props: {
    // 行内样式绑定
    numberstyle:{
      type:Object,
      default(){
        return {}
      }
    },
    // 类名绑定
    numberClass:{
      type:String
    },
    // 目标值
    targetNumber: {
      type: Number,
      default: 0
    },
    // 速度 值越大 越慢
    speed: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      timer: null // 要放在全局上
    }
  },
  created() {
    let id = uuidv1()
    this.id = id // 保证id是唯一的
  },
  mounted() {
    this.numScroll(this.targetNumber)
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    numScroll(targetNumber) {
      var self = this
      // 获取元素
      var ele = document.getElementById(this.id)
      var startNumber = ~~ele.innerHTML || 0
      var speed = this.speed
      // 1.先清空定时器
      clearInterval(self.timer)
      if (startNumber < targetNumber) {
        self.timer = setInterval(function() {
          startNumber++ // 调节速度
          if (startNumber >= targetNumber) {
            ele.innerHTML = targetNumber
            clearInterval(self.timer)
          } else {
            ele.innerHTML = ~~startNumber
          }
        }, speed) // 也可以调节速度
      } else {
        self.timer = setInterval(function() {
          startNumber-- // 调节速度
          if (startNumber <= targetNumber) {
            ele.innerHTML = targetNumber
            clearInterval(self.timer)
          } else {
            ele.innerHTML = ~~startNumber
          }
        }, speed) // 也可以调节速度
      }
    },
    start() {
      this.numScroll(this.targetNumber)
    },
    stop() {
      clearInterval(this.timer)
    }
  },
  filter() {},
  computed: {},
  watch: {
    targetNumber: {
      handler(newVal, oldVal) {
        this.numScroll(newVal)
      }
    }
  }
}
</script>
<style scoped>
.num-scroll {
  /* font-size: 20px; */
}
</style>