<script lang="ts" setup>
import { ref } from 'vue'
import { IconArrowsMaximize, IconArrowsMinimize } from '@tabler/icons-vue';
import { NIcon } from 'naive-ui'


const isFullscreen = ref(false)

const toggle = async () => {
    const el: HTMLElement = document.documentElement
    if (!document.fullscreenElement) {
        await el.requestFullscreen()
        isFullscreen.value = true
    }
    else{
        await document.exitFullscreen()
        isFullscreen.value = false
    }
}

</script>
<template>
    <n-icon size="24" class="cursor-pointer" @click="toggle">
        <IconArrowsMaximize v-if="!isFullscreen" />
        <IconArrowsMinimize v-else />
    </n-icon>
</template>