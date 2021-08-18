<template>
    <div>
        <!-- 无子级 -->
        <el-menu-item :index="nav.url" v-if="!nav.children">
            <i class="el-icon-location"></i>
            <span slot="title">{{nav.name}}</span>
        </el-menu-item>

        <!-- 有子级 -->
        <el-submenu :index="nav.url" v-else>
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{nav.name}}</span>
            </template>
            <el-menu-item-group>
                <nav-item v-for="navChild in nav.children" :key="navChild.id" :nav="navChild"/>
            </el-menu-item-group>
        </el-submenu>

    </div>
</template>

<script>
    export default {
        name: 'NavItem',
        props: ['nav'],
        data() {
            return {
                
            }
        },
    }
</script>

<style>

</style>