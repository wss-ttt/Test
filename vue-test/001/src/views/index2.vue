<template>
  <div class="wrapper">
    测试页面
    <v-box :option="option"></v-box>
    <button @click="updateData">改变数据</button>
  </div>
</template>

<script>
import VBox from '@/components/box2.vue'
export default {
  components: {
    VBox
  },
  props: {},
  data() {
    return {
      option:{
        name:'杨过'
      }
    }
  },
  created() {},
  mounted() {
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    updateData(){
      console.log('改变数据')
      this.option.name = '小龙女'
    }
  },
  filter() {},
  computed: {
  },
  watch: {}
}
</script>
<style scoped>
</style>