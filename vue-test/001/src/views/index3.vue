<template>
  <div class="wrapper">
    <div class="line">
      <v-line width="100%" height="100%" ref="line"></v-line>
    </div>
  </div>
</template>

<script>
import VLine from '@/components/Line.vue'
export default {
  components: {
    VLine
  },
  props: {},
  data() {
    return {
      option: {}
    }
  },
  created() {},
  mounted() {
    this.option = {
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }
    this.$refs['line'].initChart(this.option)
    // this.$refs['line'].initChart({})
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.line {
  width: 400px;
  height: 200px;
  background-color: #ccc;
}
</style>