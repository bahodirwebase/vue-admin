<script lang="ts" setup>
import { ref } from 'vue'
import { IconSettings } from '@tabler/icons-vue'
import { useCustomizerStore } from '@/stores/customizer'

const show = ref(false)

const customizerStore = useCustomizerStore()
</script>
<template>
    <div class="theme-customizer" @click="show = true">
        <icon-settings class="infinite-rotate" />
    </div>
    <n-drawer v-model:show="show" :width="360" :show-mask="false">
        <n-drawer-content title="Stoner" closable>
            <n-switch :value="customizerStore.isDark" @update:value="customizerStore.toggleTheme">
                Dark
            </n-switch>
            <div>
                <div @click="customizerStore.setSkin('default')">Default</div>
                <div @click="customizerStore.setSkin('bordered')">Bordered</div>
            </div>
            <n-switch :value="customizerStore.inverted" @update:value="customizerStore.toggleInverted">
                Dark
            </n-switch>
            {{ customizerStore.skin }}
        </n-drawer-content>
    </n-drawer>
</template>
<style lang="scss">
.theme-customizer {
    position: fixed;
    top: 200px;
    right: 0;
    background-color: var(--header-bg);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.infinite-rotate{
    animation: infiniteRotate 1.5s linear infinite;
}
@keyframes infiniteRotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>