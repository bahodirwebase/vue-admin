<script lang="ts" setup>
import { computed } from 'vue';
import { IconBrightnessUp, IconMoon } from '@tabler/icons-vue';
import { NIcon } from 'naive-ui'
import { useCustomizerStore } from '@/stores/customizer'

const customizerStore = useCustomizerStore()

const isDark = computed(() => customizerStore.isDark)
</script>
<template>
    <n-icon size="24" class="cursor-pointer" @click="customizerStore.toggleTheme">
        <IconBrightnessUp v-if="isDark" />
        <IconMoon v-else />
    </n-icon>
</template>