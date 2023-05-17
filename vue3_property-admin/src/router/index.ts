import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main/main.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => {
    //     '../views/main/layout.vue'
    //   },

    // },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue'),
      children: [
        // 系统管理
        {
          path: '/sysMenulist',
          name: 'sysMenulist',
          component: () => import('../views/main/system/sysMenuList/index.vue')
        },
        {
          path: '/sysRoleList',
          name: 'sysRoleList',
          component: () => import('../views/main/system/sysRoleList/index.vue')
        },
        {
          path: '/sysUserList',
          name: 'sysUserList',
          component: () => import('../views/main/system/sysUserList/index.vue')
        },
        // 房屋管理
        {
          path: '/houseBuilding',
          name: 'houseBuilding',
          component: () => import('../views/main/sysHouse/houseBuilding/index.vue')
        },
        {
          path: '/sysHouseList',
          name: 'sysHouseList',
          component: () => import('../views/main/sysHouse/sysHouseList/index.vue')
        },
        {
          path: '/houseUnit',
          name: 'houseUnit',
          component: () => import('../views/main/sysHouse/houseUnit/index.vue')
        },
        // 车位管理
        {
          path: '/parkList',
          name: 'parkList',
          component: () => import('../views/main/sysPark/parkList/index.vue')
        },
        //业主管理
        {
          path: '/liveUser',
          name: 'liveUser',
          component: () => import('../views/main/live/liveUser/index.vue')
        },
        // 收费管理
        // 停车
        {
          path: '/feePark',
          name: 'feePark',
          component: () => import('../views/main/fee/feePark/index.vue')
        },
        // 电费
        {
          path: '/feePower',
          name: 'feePower',
          component: () => import('../views/main/fee/feePower/index.vue')
        },
        //水费
        {
          path: '/feeWater',
          name: 'feeWater',
          component: () => import('../views/main/fee/feeWater/index.vue')
        },
        // 投诉管理
        {
          path: '/userComplaintList',
          name: 'userComplaintList',
          component: () => import('../views/main/userComplaint/userComplaintList/index.vue')
        },
        // 维修管理
        {
          path: '/repairList',
          name: 'repairList',
          component: () => import('../views/main/repairModel/repairList/index.vue')
        },
        // 公告管理
        {
          path: '/noticeList',
          name: 'noticeList',
          component: () => import('../views/main/notice/noticeList/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    }
  ]
})

export default router
