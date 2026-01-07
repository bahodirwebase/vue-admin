
<template>
  <n-card v-bind="$attrs">
    <slot />
  </n-card>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>
