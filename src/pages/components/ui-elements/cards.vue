<template>
    <n-grid x-gap="12" y-gap="12" :cols="2">
        <n-gi>
            <base-card title="Basic">
                <base-card title="Card">
                    Card Content
                </base-card>
            </base-card>
            <base-card title="Hoverable" style="margin-top: 12px;">
                <base-card title="Card" hoverable>
                    Card Content
                </base-card>
            </base-card>
            <base-card title="Slots" style="margin-top: 12px;">
                <n-card title="Card Slots Demo">
                    <template #header-extra>
                        #header-extra
                    </template>
                    Card Content
                    <template #footer>
                        #footer
                    </template>
                    <template #action>
                        #action
                    </template>
                </n-card>
            </base-card>
            <base-card style="margin-top: 12px;" title="Closable">
                <n-card title="Card" v-if="closable" closable @close="handleClose">
                    Card Content
                </n-card>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Card Sizes">
                <n-space vertical>
                    <base-card title="Small Card" size="small">
                        Card Content
                    </base-card>
                    <base-card title="Medium Card" size="medium">
                        Card Content
                    </base-card>
                    <base-card title="Large Card" size="large">
                        Card Content
                    </base-card>
                    <base-card title="Huge Card" size="huge">
                        Card Content
                    </base-card>
                </n-space>
            </base-card>
            <base-card title="Borderless" style="margin-top: 12px;">
                <n-card :bordered="false" title="Borderless Card">
                    Card Content
                </n-card>
            </base-card>
            <base-card title="Loading State" style="margin-top: 12px;">
                <n-space vertical>
                    <n-switch v-model:value="loading" />
                    <n-card>
                        <template #header>
                            <n-skeleton v-if="loading" text width="60%" />
                            <template v-else>
                                Lorem Ipsum
                            </template>
                        </template>
                        <n-skeleton v-if="loading" text :repeat="6" />
                        <template v-else>
                            Lorem ipsum dolor sit amet,<br>
                            consectetur adipiscing elit,<br>
                            sed do eiusmod tempor incididunt<br>
                            ut labore et dolore magna aliqua.<br>
                            Ut enim ad minim veniam,<br>
                            quis nostrud exercitation ullamco
                        </template>
                    </n-card>
                </n-space>
            </base-card>
        </n-gi>
    </n-grid>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMessage } from 'naive-ui'

const message = useMessage()
const closable = ref(true);
const loading = ref(true)

function handleClose() {
    closable.value = false;
    message.info('Card Close')
}

</script>