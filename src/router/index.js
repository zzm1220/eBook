/*
 * @Author: zhimin
 * @Date: 2021-03-23 17:42:51
 * @LastEditors: zhimin
 * @LastEditTime: 2021-03-25 14:37:41
 * @FilePath: \hello\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: () => import(/* webpackChunkName: 'ebook' */ '../views/ebook/index.vue'),
    children: [
      {
        path: ':fileName',
        props: true,
        component: () => import(/* webpackChunkName: 'ebookrender' */ '../components/ebook/EbookReader')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
