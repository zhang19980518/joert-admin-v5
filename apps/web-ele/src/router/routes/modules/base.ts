import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 2,
      title: '日常运营管理',
    },
    name: 'Daily',
    path: '/daily/info',
    children: [
      {
        name: 'Occupancy',
        path: '/occupancy',
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '入住与退住管理',
        },
        children: [
          {
            name: 'Registration',
            path: '/registration',
            component: () => import('#/views/base/elderly/index.vue'),
            meta: {
              // ignoreAccess: true,
              // icon: 'tabler:clipboard',
              title: '入住登记',
            },
          },
          {
            name: 'jiesun',
            path: '/jiesuan',
            component: () => import('#/views/base/elderly/index.vue'),
            meta: {
              // ignoreAccess: true,
              // icon: 'tabler:clipboard',
              title: '退住结算',
            },
          },
        ],
      },
      {
        name: 'Employees',
        path: '/employees',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '财务管理',
        },
      },
      {
        name: 'Bunk',
        path: '/bunk',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:cookie',
          title: '基础餐饮管理',
        },
      },
    ],
  },
];

export default routes;
