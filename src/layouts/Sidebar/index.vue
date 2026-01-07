<script lang="ts" setup>
import { type MenuOption } from 'naive-ui'
import { IconStack2, IconForms, IconTable, IconChartSankey, IconIcons, IconLockPassword, IconRocket, IconCalendar, IconMessage, IconDashboard, IconApps, IconComponents, IconFiles, IconCircleDot } from '@tabler/icons-vue';
import { useRender } from '@/composables/useRender';
import { useCustomizerStore } from '@/stores/customizer';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

const { renderIcon, renderCustomizeLabel } = useRender()
const router = useRouter()
const customizerStore = useCustomizerStore();


const menuOptions = ref<MenuOption[]>([
    {
        type: 'group',
        label: 'Dashboards',
        key: 'dashboards',
        icon: renderIcon(IconDashboard),
        children: [
            {
                label: 'First Dashboard',
                key: 'first-dashboard',
                icon: renderIcon(IconDashboard)
            }
        ]
    },
    {
        type: 'group',
        label: 'Apps',
        key: 'apps',
        icon: renderIcon(IconApps),
        children: [
            {
                label: 'Calendar',
                key: 'calendar',
                icon: renderIcon(IconCalendar)
            },
            {
                label: 'Chat',
                key: 'chat',
                icon: renderIcon(IconMessage),
            },
        ]
    },
    {
        type: 'group',
        label: 'Components',
        key: 'components',
        icon: renderIcon(IconComponents),
        children: [
            {
                label: 'UI Elements',
                key: 'ui-elements',
                icon: renderIcon(IconStack2),
                children: [
                    {
                        label: renderCustomizeLabel('Alerts', { name: 'Alerts' }),
                        key: 'Alerts',
                        icon: renderIcon(IconCircleDot)
                    },
                    {
                        label: 'Buttons',
                        key: 'buttons',
                        icon: renderIcon(IconCircleDot),
                    },
                    {
                        label: 'Cards',
                        key: 'cards',
                        icon: renderIcon(IconCircleDot),
                    },
                    {
                        label: 'Dropdowns',
                        key: 'dropdowns',
                        icon: renderIcon(IconCircleDot),
                    },
                    {
                        label: 'Modals',
                        key: 'modals',
                        icon: renderIcon(IconCircleDot),
                    },
                    {
                        label: 'Tabs',
                        key: 'tabs',
                        icon: renderIcon(IconCircleDot),
                    },
                ]
            },
            {
                label: 'Forms',
                key: 'forms',
                icon: renderIcon(IconForms),
                children: [
                    {
                        label: 'Form Elements',
                        key: 'form-elements',
                        icon: renderIcon(IconCircleDot),
                        children: [
                            {
                                label: 'Select',
                                key: 'select',
                                icon: renderIcon(IconCircleDot),
                            },
                        ]
                    },
                ]
            },
            {
                label: 'Tables',
                key: 'tables',
                icon: renderIcon(IconTable),
                children: []
            },
            {
                label: 'Charts',
                key: 'charts',
                icon: renderIcon(IconChartSankey),
                children: []
            },
            {
                label: 'Icons',
                key: 'icons',
                icon: renderIcon(IconIcons),
            }
        ]
    },
    {
        type: 'group',
        label: 'Pages',
        key: 'pages',
        icon: renderIcon(IconFiles),
        children: [
            {
                label: 'Authentication',
                key: 'authentication',
                icon: renderIcon(IconLockPassword),
                children: [
                    {
                        label: 'Authentication',
                        key: 'authentication',
                        icon: renderIcon(IconLockPassword),
                    },
                ]
            },
            {
                label: 'Extra',
                key: 'extra',
                icon: renderIcon(IconRocket),
                children: []
            },
        ]
    },


    // {
    //     label: renderLabelWithBadge('Pinball 1973', { value: 5, type: 'info' }),
    //     key: 'pinball-1973',
    //     icon: renderIcon(IconUser),
    //     disabled: false,
    //     children: [
    //         {
    //             label: 'Rat',
    //             key: 'rat'
    //         }
    //     ]
    // },
])

const menuOptionsComputed = computed<MenuOption[]>(() => {
    if (customizerStore.menuCollapsed) {

        const arr = [] as any[]
        menuOptions.value.forEach(options => {
            if (options.type === 'group' && options.children) {
                arr.push(options.children)
            }
        })
        return arr.flat()
    }
    return menuOptions.value
})

const handleMenuClick = (key: string) => {
    console.log('Menu clicked:', key);
    router.push({ name: key });
}

</script>
<template>
    <div>
        <div class="app-brand">
            <img src="@/assets/vue.svg" alt="Logo" class="app-brand__logo" />

            <span class="app-brand__name" v-if="!customizerStore.menuCollapsed">
                Admin Template
            </span>
        </div>
        <PerfectScrollbar>
            <n-menu  :collapsed-width="60" :indent="20"
                :options="menuOptionsComputed" :collapsed-icon-size="24" @on-update:expanded-keys="handleMenuClick" />
        </PerfectScrollbar>
    </div>
</template>
<style lang="scss" scoped>
.ps{
    height: calc(100vh - var(--layout-header-height) - 48px);
}
.app-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: calc(var(--layout-header-height) - 24px);


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