<script setup lang="ts">
import { computed } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import Sidebar from '@/layouts/Sidebar/index.vue';
import Header from '@/layouts/Header/index.vue'

const customizerStore = useCustomizerStore();

const borderedSkin = computed(() => customizerStore.skin === 'bordered');

</script>

<template>
  <n-layout has-sider class="admin-layout layout-bg">
    <n-layout-sider :inverted="customizerStore.inverted" :collapsed="customizerStore.menuCollapsed"
      :class="['layout-sidebar  skin-default', { 'skin-bordered': borderedSkin }]" width="var(--layout-sidebar-width)"
      content-style="padding: 12px;" show-trigger collapsed-width="var(--layout-sidebar-collapsed-width)"
      collapse-mode="width" @collapse="customizerStore.onMenuCollapsed" @expand="customizerStore.onMenuExpanded">
      <Sidebar />
    </n-layout-sider>
    <n-layout class="layout-bg">
      <n-layout-header :class="['layout-header skin-default', { 'skin-bordered': borderedSkin }]">
        <Header />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;" class="content-layout">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<style lang="scss">
.layout-sidebar {
  clear: both;
  // z-index: 0
}

.layout-header {
  height: var(--layout-header-height);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px;
  width: calc(100% - 48px);
}

.content-layout {
  border-radius: 28px;
  background-color: transparent;
}

.skin-bordered {
  border-radius: 0 !important;
  margin: 0 !important;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;
  width: 100%;
}

.skin-default {
  border-radius: 28px;
  margin: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
</style>
