<template>
    <div class="p-index inner">
        <el-row>
            <el-col :span="6">
                <Menu />
            </el-col>
            <el-col :span="18">2</el-col>
        </el-row>
        <el-row :span="24">3</el-row>
    </div>
</template>

<script>
import Menu from "~/components/index/menu.vue";
export default {
    components: {
        Menu
    }
};
</script>

<style lang="less">
</style>
