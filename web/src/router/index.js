import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/articles/:id',name:'article',component:Article,props:true},//props：true表示传入的参数被当作props处理
      {
        path: '/match',
        name: 'Match',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Match.vue')
      },
      {
        path: '/strategy',
        name: 'Strategy',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Strategy.vue')
      }
    ]
  },
  {
    path: '/heroes/:id',
    name: 'Hero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Hero.vue'),
    props:true
  },
  // {
  //   path: '/match',
  //   name: 'Match',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Match.vue')
  // },
  // {
  //   path: '/strategy',
  //   name: 'Strategy',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Strategy.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
