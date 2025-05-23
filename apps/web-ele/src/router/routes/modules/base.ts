import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      authority: ['base', 'admin'],
      icon: 'tabler:assembly',
      order: 1,
      title: '基础信息管理',
    },
    name: 'BaseInfo',
    path: '/base/info',
    children: [
      {
        name: 'Elderly',
        path: '/elderly',
        component: () => import('#/views/base/elderly/index.vue'),
        meta: {
          authority: ['elderly', 'admin'],
          // ignoreAccess: true,
          icon: 'tabler:mood-boy',
          title: '老人档案管理',
        },
      },
      {
        name: 'Employees',
        path: '/employees',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          authority: ['employees', 'admin'],
          icon: 'carbon:workspace',
          title: '员工管理',
        },
      },
      {
        name: 'Bunk',
        path: '/bunk',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          authority: ['bunk', 'admin'],
          icon: 'tabler:bed',
          title: '床位管理',
        },
      },
    ],
  },
];

export default routes;
