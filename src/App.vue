<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'
import { useCustomizerStore } from '@/stores/customizer'
import Customizer from '@/layouts/Customizer.vue'
import { themeOverrides } from './utils/theme'

const customizerStore = useCustomizerStore()

const isDark = computed(() => customizerStore.isDark)


</script>
<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme" :theme-overrides="themeOverrides">
    <router-view />
    <Customizer />
  </n-config-provider>
</template>
