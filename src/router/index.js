import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import Device from '../components/Device.vue'
import Alert from '../components/Alert.vue'
import Rules from '../components/Rules.vue'
import Wulian from '../components/Wulian.vue'
import Project from '../components/Project.vue'
import Athorization from '../components/Athorization.vue'
import Log from '../components/Log.vue'
import Info from '../components/Info.vue'



Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/Index', component: Index, redirect: '/Home',
      children:
        [
          { path: '/device', component: Device },
          { path: '/Home', component: Home },
          { path: '/Alert', component: Alert },
          { path: '/Rules', component: Rules },
          { path: '/Wulian', component: Wulian },
          { path: '/Project', component: Project },
          { path: '/Athorization', component: Athorization },
          { path: '/Log', component: Log },
          { path: '/Info', component: Info },
        ]
    }
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
//     next()  放行    next('/login')  强制跳转

// if (to.path === '/login') return next()
// 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
