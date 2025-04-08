<script lang="ts" setup>
import type { VbenFormProps } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getAllMenusPage } from '#/api';

interface RowType {
  id: string;

  name: string;
  cnTitle: string;
}

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: false,
  // 控制表单是否显示折叠按钮
  showCollapseButton: false,
  submitButtonOptions: {
    content: '查询',
  },
  // 是否在字段值改变时提交表单
  submitOnChange: false,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

const gridOptions: VxeGridProps<RowType> = {
  // checkboxConfig: {
  //   highlight: true,
  //   labelField: "name",
  // },
  columns: [
    { title: '序号', field: 'id', width: 50 },
    { field: 'cnTitle', title: '菜单名称' },
    { field: 'name', title: '配置i18n项' },
    { field: 'title', title: '配置i18n项' },
    { field: 'component', title: '组件' },
    { field: 'path', title: '路径' },
    { field: 'sortOrder', title: '排序' },
  ],
  keepSource: false,
  proxyConfig: {
    ajax: {
      query: async (
        { page }: { page: { currentPage: number; pageSize: number } },
        formValues: Record<string, any>,
      ) => {
        const data = await getAllMenusPage({
          page: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
        });
        console.log('%c Line:100 🍩 data', 'color:#e41a6a', data);
        return data;
      },
    },
  },
  toolbarConfig: {
    // 是否显示搜索表单控制按钮
    // @ts-ignore 正式环境时有完整的类型声明
    search: false,
  },
};

const [Grid] = useVbenVxeGrid({ formOptions, gridOptions });
</script>

<template>
  <div class="vp-raw w-full">
    <Grid />
  </div>
</template>
