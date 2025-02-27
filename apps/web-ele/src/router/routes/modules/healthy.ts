import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 3,
      title: '健康管理',
    },
    name: 'Healthy',
    path: '/healthy',
    children: [
      {
        name: 'Role',
        path: '/role',
        component: () => import('#/views/base/elderly/index.vue'),
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '电子健康档案',
        },
      },
      {
        name: 'Guest',
        path: '/guest',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '健康报告',
        },
      },
    ],
  },
];

export default routes;
