<template>
    <el-container class="d-wrap">
        <el-header height="200px">
            <my-header />
        </el-header>
        <el-main>
            <nuxt />
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import MyHeader from "~/components/public/header/index";
export default {
    components: {
        MyHeader
    }
};
</script>

<style lang="less" scope>
.d-wrap {
    background-color: rgb(246, 246, 246);
    .el-footer {
        padding: 20px;
        text-align: center;
        border-top: 1px solid #ddd;
    }
    .el-header {
        padding: 0;
    }
}
</style>>
