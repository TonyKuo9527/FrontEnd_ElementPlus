<template>
    <el-menu router>
        <template v-for="item in items" :key="item.url">
            <el-menu-item :router="item.url" :index="item.url">
                <template #title>
                    <router-link :to="item.url" />
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    {{item.name}}
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>
  
<script>
import { admin, user } from '/src/_nav.js';
export default ({
    name: 'BaseSide',
    component: {
        admin,
        user
    },
    setup() {
        console.log(admin);
        console.log(user)
        return {
            items: admin
        }
    }
})
</script>

<style>
.el-menu {
    border-right: solid 0px var(--el-menu-border-color);
}
</style>