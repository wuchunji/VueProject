<template>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{path:item.path}" v-for="(item, index) in list" :key="index">
            {{item.meta.title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            list:[]
        }
    },
    created() {
        // console.log(this.$route.matched);
        this.list = this.$route.matched;
    },
    watch: {
        $route(to) {
            // console.log(to.matched);
            this.list = to.matched;
        }
    }
}
</script>

<style scoped>
    .breadcrumb{
        position: absolute;
        top: 30px;
    }
</style>