import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/components/Layout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/tasks',
    children: [
      {
        path: '/activity',
        name: 'activity',
        component: () => import(/* webpackChunkName: "activity" */ '../views/activity.vue')
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/tasks.vue')
      },
      {
        path: '/kanban',
        name: 'kanban',
        component: () => import(/* webpackChunkName: "kanban" */ '../views/kanban.vue')
      },
      {
        path: '/files',
        name: 'files',
        component: () => import(/* webpackChunkName: "files" */ '../views/files.vue')
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar.vue')
      }
    ]
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})
export default router
