<template>
    <el-container>
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
.el-header {
    padding: 0;
}
</style>>
