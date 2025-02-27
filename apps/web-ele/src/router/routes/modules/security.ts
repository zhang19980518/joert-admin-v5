import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 30,
      title: '安全管理',
    },
    name: 'Security',
    path: '/security/info',
    children: [
      {
        name: 'Record',
        path: '/record',
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '手工记录',
        },
        children: [
          {
            name: 'paper',
            path: '/paper',
            component: () => import('#/views/base/elderly/index.vue'),
            meta: {
              // ignoreAccess: true,
              // icon: 'tabler:clipboard',
              title: '纸质健康记录',
            },
          },
          {
            name: 'Drug',
            path: '/drug',
            component: () => import('#/views/base/elderly/index.vue'),
            meta: {
              // ignoreAccess: true,
              // icon: 'tabler:clipboard',
              title: '用药登记',
            },
          },
        ],
      },
      {
        name: 'Guest',
        path: '/guest',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '访客管理',
        },
      },
    ],
  },
];

export default routes;
