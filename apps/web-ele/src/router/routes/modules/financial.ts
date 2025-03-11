import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 37,
      title: '财务管理',
    },
    name: 'Expenses',
    path: '/expenses',
    children: [
      {
        name: 'Bills',
        path: '/bills',
        component: () => import('#/views/base/elderly/index.vue'),
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '费用管理',
        },
      },
      {
        name: 'Report',
        path: '/report',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '财务报表',
        },
      },
    ],
  },
];

export default routes;
