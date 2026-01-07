<template>
    <n-grid x-gap="12" y-gap="12" :cols="2">
        <n-gi>
            <base-card title="Basic">
                <n-space>
                    <n-button>Default</n-button>
                    <n-button type="tertiary">
                        Tertiary
                    </n-button>
                    <n-button type="primary">
                        Primary
                    </n-button>
                    <n-button type="info">
                        Info
                    </n-button>
                    <n-button type="success">
                        Success
                    </n-button>
                    <n-button type="warning">
                        Warning
                    </n-button>
                    <n-button type="error">
                        Error
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Dashed">
                <n-space>
                    <n-button dashed>
                        Default
                    </n-button>
                    <n-button type="primary" dashed>
                        Primary
                    </n-button>
                    <n-button type="info" dashed>
                        Info
                    </n-button>
                    <n-button type="success" dashed>
                        Success
                    </n-button>
                    <n-button type="warning" dashed>
                        Warning
                    </n-button>
                    <n-button type="error" dashed>
                        Error
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Secondary button">
                <n-space>
                    <n-button strong secondary>
                        Default
                    </n-button>
                    <n-button strong secondary type="tertiary">
                        Tertiary
                    </n-button>
                    <n-button strong secondary type="primary">
                        Primary
                    </n-button>
                    <n-button strong secondary type="info">
                        Info
                    </n-button>
                    <n-button strong secondary type="success">
                        Success
                    </n-button>
                    <n-button strong secondary type="warning">
                        Warning
                    </n-button>
                    <n-button strong secondary type="error">
                        Error
                    </n-button>
                    <n-button strong secondary round>
                        Default
                    </n-button>
                    <n-button strong secondary round type="primary">
                        Primary
                    </n-button>
                    <n-button strong secondary round type="info">
                        Info
                    </n-button>
                    <n-button strong secondary round type="success">
                        Success
                    </n-button>
                    <n-button strong secondary round type="warning">
                        Warning
                    </n-button>
                    <n-button strong secondary round type="error">
                        Error
                    </n-button>
                    <n-button strong secondary circle>
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="primary">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="info">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="success">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="warning">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="error">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Tertiary button">
                <n-space>
                    <n-button tertiary>
                        Default
                    </n-button>
                    <n-button tertiary type="primary">
                        Primary
                    </n-button>
                    <n-button tertiary type="info">
                        Info
                    </n-button>
                    <n-button tertiary type="success">
                        Success
                    </n-button>
                    <n-button tertiary type="warning">
                        Warning
                    </n-button>
                    <n-button tertiary type="error">
                        Error
                    </n-button>
                    <n-button tertiary round>
                        Default
                    </n-button>
                    <n-button tertiary round type="primary">
                        Primary
                    </n-button>
                    <n-button tertiary round type="info">
                        Info
                    </n-button>
                    <n-button tertiary round type="success">
                        Success
                    </n-button>
                    <n-button tertiary round type="warning">
                        Warning
                    </n-button>
                    <n-button tertiary round type="error">
                        Error
                    </n-button>
                    <n-button tertiary circle>
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button tertiary circle type="primary">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button tertiary circle type="info">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button tertiary circle type="success">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button tertiary circle type="warning">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button tertiary circle type="error">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Quaternary button">
                <n-space>
                    <n-button quaternary>
                        Default
                    </n-button>
                    <n-button quaternary type="primary">
                        Primary
                    </n-button>
                    <n-button quaternary type="info">
                        Info
                    </n-button>
                    <n-button quaternary type="success">
                        Success
                    </n-button>
                    <n-button quaternary type="warning">
                        Warning
                    </n-button>
                    <n-button quaternary type="error">
                        Error
                    </n-button>
                    <n-button quaternary round>
                        Default
                    </n-button>
                    <n-button quaternary round type="primary">
                        Primary
                    </n-button>
                    <n-button quaternary round type="info">
                        Info
                    </n-button>
                    <n-button quaternary round type="success">
                        Success
                    </n-button>
                    <n-button quaternary round type="warning">
                        Warning
                    </n-button>
                    <n-button quaternary round type="error">
                        Error
                    </n-button>
                    <n-button quaternary circle>
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle type="primary">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle type="info">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle type="success">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle type="warning">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle type="error">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Shape, Disabled">
                <n-space>
                    <n-button circle>
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button round>
                        Round
                    </n-button>
                    <n-button>Rect</n-button>
                </n-space>
                <n-space style="margin-top : 10px">
                    <n-button disabled>
                        Disabled
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Size">
                <n-space align="baseline">
                    <n-button size="tiny">
                        Tiny
                    </n-button>
                    <n-button size="small">
                        Small
                    </n-button>
                    <n-button size="medium">
                        Medium
                    </n-button>
                    <n-button size="large">
                        Large
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="With Loading">
                <n-space>
                    <n-button :loading="loading" @click="handleClick">
                        <template #icon>
                            <n-icon>
                                <IconCash />
                            </n-icon>
                        </template>
                        Click Me
                    </n-button>
                    <n-button :loading="loading" icon-placement="left" @click="handleClick">
                        Click Me
                    </n-button>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Button Group">
                <n-space>
                    <n-button-group vertical>
                        <n-button round>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Live a
                        </n-button>
                        <n-button ghost>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Sufficient
                        </n-button>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Life
                        </n-button>
                    </n-button-group>
                    <n-button-group vertical size="large">
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            With
                        </n-button>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Enough
                        </n-button>
                        <n-button ghost round>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Happiness
                        </n-button>
                    </n-button-group>
                    <n-button-group size="small">
                        <n-button round>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Life
                        </n-button>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Is
                        </n-button>
                        <n-button>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Good
                        </n-button>
                    </n-button-group>
                    <n-button-group>
                        <n-button ghost>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Eat
                        </n-button>
                        <n-button ghost>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            One More
                        </n-button>
                        <n-button round>
                            <template #icon>
                                <n-icon>
                                    <IconCash />
                                </n-icon>
                            </template>
                            Apple
                        </n-button>
                    </n-button-group>
                </n-space>
            </base-card>
        </n-gi>
    </n-grid>
</template>
<script lang="ts" setup>
import { IconCash } from '@tabler/icons-vue';
import { ref } from 'vue'

const loading = ref(false)
function handleClick() {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 2000)
}
</script>