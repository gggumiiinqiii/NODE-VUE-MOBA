import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/categories/create',
        component:CategoryEdit
      },
      {
        path:'/categories/edit/:id',
        component:CategoryEdit,
        //如果 props 被设置为 true，route.params 将会被设置为组件属性。
        props:true
      },
      {
        path:'/categories/list',
        component:CategoryList
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
