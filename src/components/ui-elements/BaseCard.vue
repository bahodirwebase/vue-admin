
<template>
  <n-card v-bind="$attrs">
    <!-- <template
      v-for="(_, name) in $slots"
      :key="name"
      #[name]="slotProps"
    >
      <slot :name="name" v-bind="slotProps" />
    </template> -->
    <slot></slot>
  </n-card>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>
