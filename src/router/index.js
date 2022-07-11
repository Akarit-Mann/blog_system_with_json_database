import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetaiL from '../views/DetaiL.vue'
import CreatE from '../views/CreatE.vue'
import TaG from '../views/TaG.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name:"detail",
    component:DetaiL,
    props:true
  },
  {
    path:'/create',
    name:'create',
    component:CreatE
  },
  {
    path:'/tags/:tag',
    name:'tag',
    component:TaG,
    props:true
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
