<template>
  <div class="wrapper">
    <h2>index页面</h2>
    <router-link :to="{name:'html'}">html</router-link>
    <router-link :to="{name:'css'}">css</router-link>
    <router-link :to="{name:'js'}">js</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
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
  watch: {}
}
</script>
<style scoped>
a{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.router-link-active{
    background-color: blue;
    color:#fff;
}
</style>