import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:resolve=>require(['@/views/index.vue'],resolve),
      children:[{
        path:'html',
        name:'html',
        component:resolve=>require(['@/components/html.vue'],resolve),
      },{
        path:'css',
        name:'css',
        component:resolve=>require(['@/components/css.vue'],resolve),
      },{
        path:'js',
        name:'js',
        component:resolve=>require(['@/components/js.vue'],resolve),
      }]
    },
    {
      path:'/index2',
      name:'index2',
      component:resolve=>require(['@/views/index2.vue'],resolve),
    },
    {
      path:'/index3',
      name:'index3',
      component:resolve=>require(['@/views/index3.vue'],resolve),
    },
    {
      path:'/index4',
      name:'index4',
      component:resolve=>require(['@/views/index4.vue'],resolve),
    },
    {
      path:'/index5',
      name:'index5',
      component:resolve=>require(['@/views/index5.vue'],resolve),
    },
  ]
})
