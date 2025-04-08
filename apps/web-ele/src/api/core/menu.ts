import type {RouteRecordStringComponent} from '@vben/types';

import {requestClient} from '#/api/request';

/**
 * 获取用户所有菜单
 */
export async function getAllMenusApi() {
  return requestClient.get<RouteRecordStringComponent[]>('/menu/all');
}

export async function getAllMenusPage(data: any) {
  return requestClient.get<any>('/menu/page',{params:data});
}
