<script lang="ts" setup>
import type { VbenFormProps } from "#/adapter/form";
import type { VxeGridProps } from "#/adapter/vxe-table";

import { h } from "vue";

import { useVbenVxeGrid } from "#/adapter/vxe-table";
import { addMenu, getAllMenusPage } from "#/api";

const formOptions: VbenFormProps = {
  schema: [
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入菜单名称",
      },
      fieldName: "cnTitle",
      label: "菜单名称",
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请填写路径",
      },
      fieldName: "path",
      label: "路径",
    },
  ],
  // 默认展开
  collapsed: false,
  // 控制表单是否显示折叠按钮
  showCollapseButton: false,
  submitButtonOptions: {
    content: "查询",
  },
  // 是否在字段值改变时提交表单
  submitOnChange: false,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

const gridOptions: VxeGridProps<any> = {
  // checkboxConfig: {
  //   highlight: true,
  //   labelField: "name",
  // },
  columns: [
    { title: "序号", field: "id", width: 50 },
    { field: "cnTitle", title: "菜单名称" },
    { field: "name", title: "配置i18n项" },
    { field: "title", title: "配置i18n项" },
    { field: "component", title: "组件" },
    { field: "path", title: "路径" },
    { field: "sortOrder", title: "排序" },
    { title: "操作", width: 200, slots: { default: "action" } },
  ],
  keepSource: false,
  proxyConfig: {
    ajax: {
      query: async (
        { page }: { page: { currentPage: number; pageSize: number } },
        formValues: Record<string, any>
      ) => {
        const data = await getAllMenusPage({
          page: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
        });
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

const formData = reactive({
  cnTitle: "",
  path: "",
  component: "",
  sortOrder: 0,
});

const [Grid] = useVbenVxeGrid({ formOptions, gridOptions });

const handleAdd = () => {
  ElMessageBox.confirm({
    title: "新增菜单",
    message: h("div", {}, [
      h("el-form", { model: formData }, [
        h("el-form-item", { label: "菜单名称" }, [
          h("el-input", {
            modelValue: formData.cnTitle,
            "onUpdate:modelValue": (val) => (formData.cnTitle = val),
          }),
        ]),
        h("el-form-item", { label: "路径" }, [
          h("el-input", {
            modelValue: formData.path,
            "onUpdate:modelValue": (val) => (formData.path = val),
          }),
        ]),
        h("el-form-item", { label: "组件" }, [
          h("el-input", {
            modelValue: formData.component,
            "onUpdate:modelValue": (val) => (formData.component = val),
          }),
        ]),
        h("el-form-item", { label: "排序" }, [
          h("el-input-number", {
            modelValue: formData.sortOrder,
            "onUpdate:modelValue": (val) => (formData.sortOrder = val),
          }),
        ]),
      ]),
    ]),
    showCancelButton: true,
    confirmButtonText: "提交",
    cancelButtonText: "取消",
    beforeClose: (action, instance, done) => {
      if (action === "confirm") {
        addMenu(formData).then(() => {
          done();
          // 刷新菜单列表
          gridOptions.proxyConfig.ajax.query(
            { page: { currentPage: 1, pageSize: 10 } },
            {}
          );
        });
      } else {
        done();
      }
    },
  });
};

const handleView = (row) => {
  ElMessageBox.alert(
    `<div class="detail-container">
      <div class="detail-item"><span>菜单名称：</span>${row.cnTitle}</div>
      <div class="detail-item"><span>路径：</span>${row.path}</div>
      <div class="detail-item"><span>组件：</span>${row.component}</div>
      <div class="detail-item"><span>排序：</span>${row.sortOrder}</div>
    </div>`,
    {
      title: "菜单详情",
      dangerouslyUseHTMLString: true,
      customClass: "menu-detail-dialog",
    }
  );
};

const handleDelete = (row) => {
  // 调用删除菜单API
  console.log("删除菜单:", row);
  // TODO: 调用删除菜单API
  deleteMenu(row.id).then(() => {
    // 刷新菜单列表
  });
};
</script>

<template>
  <div class="w-full">
    <Grid>
      <template #toolbar-tools>
        <el-button plain type="primary" @click="handleAdd">新增</el-button>
      </template>
      <template #action>
        <el-button-group size="small" mode="text" @click="clickEvent">
          <el-button @click="handleView(scope.row)">查看</el-button>
          <el-button
            type="danger"
            name="error"
            @click="handleDelete(scope.row)"
          >
            删除
          </el-button>
        </el-button-group>
      </template>
    </Grid>
  </div>
</template>
