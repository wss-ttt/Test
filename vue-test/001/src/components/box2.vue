<template>
  <div class="box">
    data:{{this.baseConfig.name}}
    <br />
    props:{{this.option.name}}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    option: {
      type: Object,
      default() {
        return {
          name: '乔峰'
        }
      }
    }
  },
  data() {
    return {
      baseConfig: {
        name: 'aa',
        name2:'bb',
        name:this.option.name,
        name3:'cc'
      }
    }
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filter() {},
  computed: {},
  watch: {
    option: {
      handler(newVal, oldVal) {
        this.baseConfig.name = newVal.name
      },
      deep: true
    }
  }
}
</script>
<style scoped>
.box {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
</style>