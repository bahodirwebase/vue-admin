
<template>
  <n-card v-bind="props" v-on="listeners">
    <slot />
  </n-card>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import type { CardProps } from 'naive-ui'

const props = defineProps<CardProps>() 
const attrs = useAttrs() 

const listeners = attrs
</script>
