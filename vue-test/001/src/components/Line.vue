<template>
  <div class="line-chart" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import uuidv1 from 'uuid/v1'
export default {
  components: {},
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      id: '',
      oBox: null, // 保存dom元素
      myChart: null, // 保存echarts实例
      hasData: false // true:说明有数据 false:说明没有数据
    }
  },
  created() {
    let id = uuidv1()
    this.id = id // 保证id是唯一的
  },
  mounted() {
    // 1.获取dom元素
    this.oBox = document.getElementById(this.id)
    // 2.实例化echarts
    this.myChart = echarts.init(this.oBox)
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  methods: {
    initChart(option) {
      // 1.判断myChart实例是否存在,不存在的话重新实例化
      if (!this.myChart) {
        this.myChart = echarts.init(this.oBox)
      }
      // 2.判断是否有数据
      this.hasData = !this.isEmptyObject(option)
      if (this.hasData) {
        // 基础配置写好,数据作为参数传递进来
        let config = {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: option.xAxis.data
          },
          yAxis: {
            type: 'value'
          },
          series: option.series
        }
        // 1.先清空数据
        this.myChart.clear()
        // 2.初始化数 显示图表
        this.myChart.setOption(config)
        // 3.图表自适应
        window.addEventListener('resize', () => {
          this.myChart.resize()
        })
      } else {
        // 4.没有数据的情况
        this.oBox.removeAttribute('_echarts_instance_')
        this.oBox.innerHTML =
          '<div style="text-align:center;font-size:24px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-weight: bold;">暂无数据</div>'
        // 同时 把myChart 置为空对象
        this.myChart = null
      }
    },
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0
    },
    showLoading() {
      this.myChart.showLoading(loading)
    },
    hideLoading() {
      this.myChart.hideLoading()
    }
  },
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.line-chart{
  position: relative;
}
</style>