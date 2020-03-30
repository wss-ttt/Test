<template>
  <div class="box">
    data:{{this.baseConfig.name}}
    <br>
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
          name:'乔峰'
        }
      }
    }
  },
  data() {
    return {
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
  computed: {
    baseConfig(){
      return this.option
    }
  },
  watch: {
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