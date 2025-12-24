<script lang="ts" setup>
import { h } from 'vue'
import { IconEdit, IconLogout, IconUser } from '@tabler/icons-vue';
import { NAvatar, NText } from 'naive-ui'
import { useRender } from '@/composables/useRender';

const { renderIcon } = useRender()
const options = [
    {
        key: 'header',
        type: 'render',
        render: renderCustomHeader
    },
    {
        label: 'User Profile',
        key: 'profile',
        icon: renderIcon(IconUser)
    },
    {
        label: 'Edit Profile',
        key: 'editProfile',
        icon: renderIcon(IconEdit)
    },
    {
        key: 'header-divider',
        type: 'divider'
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: renderIcon(IconLogout)
    }
]
function renderCustomHeader() {
    return h(
        'div',
        {
            style: 'display: flex; align-items: center; padding: 8px 12px;'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right: 12px;',
                src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
            }),
            h('div', null, [
                h('div', null, [
                    h(NText, { depth: 2 }, { default: () => 'Office Worker' })
                ]),
                h('div', { style: 'font-size: 12px;' }, [
                    h(
                        NText,
                        { depth: 3 },
                        {
                            default: () =>
                                'No doubt, you are the brightest '
                        }
                    )
                ])
            ])
        ]
    )
}
</script>
<template>
    <n-dropdown :options="options" placement="bottom-end">
        <n-avatar round class="cursor-pointer"  src="https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG" />
    </n-dropdown>
</template>