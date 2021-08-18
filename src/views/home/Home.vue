<template>
    <div>    
      <el-container>
            <!-- 侧边栏 -->
            <Nav/>
            <el-container>
                <!-- 头部 -->
                <el-header>
                  <!-- 面包屑 -->
                  <Breadcrumb/>
                  <el-button type="danger" @click="exitHome" class="exitBtn">退出</el-button>
                </el-header>

                <el-main>
                  <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Breadcrumb from './Breadcrumb.vue'
    import Nav from './Nav.vue'

    export default {
        name: 'Home',
        components: {Breadcrumb, Nav},
        data() {
          return {
            
          }
        },
        methods: {
          exitHome() {
            sessionStorage.removeItem('allow');
            this.$router.push('/login');
          }
        }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: left;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-container {
    height: 976px;
  }
  /* 头部样式 */
  .exitBtn{
    position: absolute;
    right: 50px;
    top: 10px;
  }
</style>