<template>
    <div class="common-layout">
        <el-container style="height: 500px">
            <el-header>
                <BaseHeader />
            </el-header>

            <el-container>
                <el-aside width="200px">
                    <BaseSide />
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseSide from './BaseSide.vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
  
<style>
#app {
    text-align: center;
    color: var(--ep-text-color-primary);
}

.element-plus-logo {
    width: 50%;
}
</style>  