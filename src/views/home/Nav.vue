<template>
    <el-aside width="200px">
        <el-menu
            :default-active="$route.path" exact
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
        <!-- 第四行代码是为了避免刷新后导航栏选中样式丢失，当导航栏的index值等于这个值时，赋予选中样式 exact是精准匹配 -->
            <nav-item v-for="nav in navList" :key="nav.id" :nav="nav"/>
        </el-menu>
    </el-aside>
</template>

<script>
    import NavItem from './NavItem.vue'

    export default {
        components: { NavItem },
        name: 'Nav',
        data() {
            return {
                navList: [
                    {id:1, name:'首页',url:'/home/index'},
                    {id:2, name:'数据统计',url:'/home/stats'},
                    {id:3, name:'信息管理',url:'/home/wms',children:[{id:31,name:'库存管理',url:'/home/wms/list'},{id:32,name:'订单管理',url:'/home/wms/order'}]},
                    {id:4, name:'用户管理',url:'/home/user',children:[{id:41,name:'用户统计',url:'/home/user/users'},{id:42,name:'角色统计',url:'/home/user/role'}]}
                ]
            }
        },
    }
</script>

<style>

</style>