<template>
  <div class="wrapper">
    <h1>数字滚动增加</h1>
    <button type="button" @click="scrollAdd">滚动增加</button>
    <button type="button" @click="scrollReduce">滚动减少</button>
    <br />
     异常数量:<v-num :targetNumber="targetNumber" :class="{'red':true}"></v-num>
     正常数量:<v-num :targetNumber="targetNumber2" :style="{'color':'red','font-size':'30px'}"></v-num>
     负数数量:<v-num :targetNumber="targetNumber3" :style="{'color':'red','font-size':'30px'}"></v-num>
  </div>
</template>

<script>
import VNum from '@/components/Num.vue'
export default {
  components: {
    VNum
  },
  props: {},
  data() {
    return {
      targetNumber: 150,
      targetNumber2:200,
      targetNumber3:-100
    }
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    // 滚动增加
    scrollAdd() {
      this.targetNumber = 200
      this.targetNumber2 = 300
    },
    // 滚动减少
    scrollReduce() {
      this.targetNumber = 100
      this.targetNumber2 = 200
    }
  },
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.red{
    color:green;
    font-size:30px;
}
</style>