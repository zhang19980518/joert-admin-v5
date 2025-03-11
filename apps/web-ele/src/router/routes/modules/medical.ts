import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'tabler:brightness-half',
      order: 37,
      title: '医疗协同',
    },
    name: 'Medical',
    path: '/medical',
    children: [
      {
        name: 'Drug',
        path: '/drug',
        component: () => import('#/views/base/elderly/index.vue'),
        meta: {
          // ignoreAccess: true,
          icon: 'tabler:clipboard',
          title: '药品管理',
        },
      },
      {
        name: 'DrugInventory',
        path: '/inventory',
        component: () => import('#/views/base/employees/index.vue'),
        meta: {
          icon: 'tabler:coin-yen',
          title: '库存管理',
        },
      },
    ],
  },
];

export default routes;
