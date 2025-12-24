<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { IconSettings, IconUser, IconCircleCheck } from '@tabler/icons-vue';
import { ref } from 'vue';
import { useRender } from '@/composables/useRender';

const { renderIcon } = useRender()
const collapsed = ref<boolean>(false)
const activeKey = ref<string | null>(null)

const menuOptions: MenuOption[] = [
    {
        label: 'Hear the Wind Sing',
        key: 'hear-the-wind-sing',
        icon: renderIcon(IconSettings)
    },
    {
        label: 'Pinball 1973',
        key: 'pinball-1973',
        icon: renderIcon(IconUser),
        disabled: false,
        children: [
            {
                label: 'Rat',
                key: 'rat'
            }
        ]
    },
    {
        label: 'A Wild Sheep Chase',
        key: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(IconCircleCheck)
    },
]
</script>
<template>
    <div class="app-brand">
        <img src="@/assets/vue.svg" alt="Logo" class="app-brand__logo" />

        <span class="app-brand__name">
            My Admin Template
        </span>
    </div>
    <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
        :indent="20" :options="menuOptions" />
</template>
<style lang="scss">
.app-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    height: calc(var(--layout-header-height) - 24px);
    padding-left: 12px;

    &__logo {
        width: 36px;
        height: 36px;
        object-fit: contain;
    }

    &__name {
        font-size: 18px;
        font-weight: 600;
        color: #1f2937; // dark gray
        white-space: nowrap;
    }
}

.n-menu-item.n-menu-item--selected {
    border-radius: 20px !important;
    margin: 4px 8px;
}

/* Ichidagi content */
.n-menu-item.n-menu-item--selected .n-menu-item-content {
    border-radius: 20px !important;
}
</style>