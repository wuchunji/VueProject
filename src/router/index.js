import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'  // 重定向 用户第一次进入时进去那个页面
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/index',
    meta: {title:'管理系统'},
    component: () => import('../views/home/Home.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        meta: {title:'首页'},
        component: () => import('../views/home/index/Index.vue')
      },
      {
        path: 'stats',
        name: 'Stats',
        meta: {title:'数据统计'},
        component: () => import('../views/home/stats/Stats.vue')
      },
      {
        path: 'user',
        name: 'User',
        meta: {title:'用户管理'},
        redirect: 'user/users',
        component: () => import('../views/home/user/User.vue'),
        children: [
          {
            path: 'users',
            name: 'Users',
            meta: {title:'用户统计'},
            component: () => import('../views/home/user/Users.vue')
          },
          {
            path: 'role',
            name: 'Role',
            meta: {title:'角色统计'},
            component: () => import('../views/home/user/Role.vue')
          }
        ]
      },
      {
        path: 'wms',
        name: 'Wms',
        meta: {title:'信息管理'},
        redirect: 'wms/list',
        component: () => import('../views/home/wms/Wms.vue'),
        children: [
          {
            path: 'list',
            name: 'List',
            meta: {title:'库存管理'},
            component: () => import('../views/home/wms/List.vue')
          },
          {
            path: 'order',
            name: 'Order',
            meta: {title:'订单管理'},
            component: () => import('../views/home/wms/Order.vue')
          }
        ]
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

// 设置路由守卫 保证一点的安全性
router.beforeEach((to, from, next) => {
  if((from.name === 'Login' && to.name !== 'Register') || (from.name === 'Register' && to.name !== 'Login')) {
    if(sessionStorage.getItem('allow')) {
      next();
    }else{
      next(false);
      console.log('你不对劲');
    }
  }else{
    next();
  }
})


export default router
