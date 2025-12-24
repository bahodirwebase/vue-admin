<script lang="ts" setup>
import UserNavigation from './UserNavigation.vue';
import FullScreen from './FullScreen.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import SearchComponent from './SearchComponent.vue';



</script>
<template>
    <n-space justify="space-between" align="center" style="width: 100%;">

        <div style="display: flex;align-items: center;">
            <SearchComponent />
        </div>
        <div style="display: flex;align-items: center;">
            <ThemeSwitcher class="mr-2" />
            <FullScreen class="mr-2" />
            <UserNavigation  />
        </div>
    </n-space>
</template>
<style></style>