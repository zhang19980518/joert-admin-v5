import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 40,
      title: '系统管理',
    },
    name: 'System',
    path: '/system',
    children: [
      {
        name: 'Role',
        path: '/role',
        component: () => import('#/views/base/elderly/index.vue'),
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '角色管理',
        },
      },
      {
        name: 'Guest',
        path: '/guest',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '部门管理',
        },
      },
      {
        name: 'Guest',
        path: '/guest',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '日志管理',
        },
      },
    ],
  },
];

export default routes;
