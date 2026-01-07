<template>
    <n-grid x-gap="12" y-gap="12" :cols="2">
        <n-gi>
            <base-card title="Basic">
                <n-space vertical :size="12">
                    <n-alert title="Default Text" type="default">
                        <template #icon>
                            <n-icon>
                                <IconPlane />
                            </n-icon>
                        </template>
                        Gee it's good to be back home
                    </n-alert>
                    <n-alert title="Info Text" type="info">
                        Gee it's good to be back home
                    </n-alert>
                    <n-alert title="Success Text" type="success">
                        Leave it till tomorrow to unpack my case
                    </n-alert>
                    <n-alert title="Warning Text" type="warning">
                        Honey disconnect the phone
                    </n-alert>
                    <n-alert title="Error Text" type="error">   
                        I'm back in the U.S.S.R.
                    </n-alert>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="Closable"> 
                <n-space vertical :size="12">
                    <n-alert title="Default Text" type="default" closable>
                        <template #icon>
                            <n-icon>
                                <IconPlane />
                            </n-icon>
                        </template>
                        Gee it's good to be back home
                    </n-alert>
                    <n-alert title="Info Text" type="info" closable>
                        Gee it's good to be back home
                    </n-alert>
                    <n-alert title="Success Text" type="success" closable>
                        Leave it till tomorrow to unpack my case
                    </n-alert>
                    <n-alert title="Warning Text" type="warning" closable>
                        Honey disconnect the phone
                    </n-alert>
                    <n-alert title="Error Text" type="error" closable>
                        I'm back in the U.S.S.R.
                    </n-alert>
                </n-space>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="No Icon">
                <n-alert :show-icon="false">
                    Yeah I'm back in the U.S.S.R.<br>
                    You don't know how lucky you are boys
                </n-alert>
            </base-card>
        </n-gi>
        <n-gi>
            <base-card title="With Icon">
                <n-alert title="Back in the U.S.S.R.">
                    <template #icon>
                    <n-icon>
                        <IconPlane />
                    </n-icon>
                    </template>
                    Well the Ukraine girls really knock me out<br>
                    They leave the West behind<br>
                    And Moscow girls make me sing and shout<br>
                    That Georgia's always on my mind<br>
                    Aw come on!
                </n-alert>
            </base-card>
        </n-gi>
    </n-grid>
</template>
<script lang="ts" setup>
import BaseCard from '@/components/ui-elements/BaseCard.vue';
import { IconPlane } from '@tabler/icons-vue';
</script>