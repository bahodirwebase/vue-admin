<script lang="ts" setup>
import { type MenuOption } from 'naive-ui'
import { IconSettings, IconUser, IconCircleCheck, IconBook } from '@tabler/icons-vue';
import { useRender } from '@/composables/useRender';
import { useCustomizerStore } from '@/stores/customizer';

const { renderIcon, renderLabelWithBadge } = useRender()
const customizerStore = useCustomizerStore();


const menuOptions: MenuOption[] = [
    {
        label: 'Hear the Wind Sing',
        key: 'hear-the-wind-sing',
        icon: renderIcon(IconSettings)
    },
    {
        label: renderLabelWithBadge('Pinball 1973', { value: 5, type: 'info' }),
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
        label: renderLabelWithBadge('Pinball 1973', { value: 5, type: 'info' }),
        key: 'a-wild-sheep-chase',
        disabled: false,
        icon: renderIcon(IconCircleCheck)
    },
    {
        label: 'Dance Dance Dance',
        key: 'Dance Dance Dance',
        icon: renderIcon(IconBook),
        children: [
            {
                type: 'group',
                label: 'People',
                key: 'people',
                children: [
                    {
                        label: 'Narrator',
                        key: 'narrator',
                        icon: renderIcon(IconBook)
                    },
                    {
                        label: 'Sheep Man',
                        key: 'sheep-man',
                        icon: renderIcon(IconBook)
                    }
                ]
            },
        ]
    }
]

</script>
<template>
    <div class="app-brand">
        <img src="@/assets/vue.svg" alt="Logo" class="app-brand__logo" />

        <span class="app-brand__name" v-if="!customizerStore.menuCollapsed">
            Admin Template
        </span>
    </div>
    <n-menu  
         collapsed-width="var(--layout-sidebar-collapsed-width)"
        :indent="20" :options="menuOptions" :collapsed-icon-size="24" />
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

.n-menu--collapsed .n-menu-item-expand-icon {
    display: none !important;
}
</style>