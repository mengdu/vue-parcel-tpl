import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home'
import Demo from './pages/demo'
// import Login from './pages/login'

Vue.use(VueRouter)

// function page (name) {
//   return () => import('./pages/' + name)
// }

// const page = name => () => import('./pages/' + name)

// const login = () => import('./pages/login')

// login.then(page => {
//   console.log(page)
// })
// console.log(login)

export default new VueRouter ({
  mode: 'hash',
  routes: [
    {path: '/', component: Home},
    {path: '/demo', component: Demo}
    // {path: '/login', component: () => import('./pages/login')},
    // {path: '/login', component: Login}
  ]
})
