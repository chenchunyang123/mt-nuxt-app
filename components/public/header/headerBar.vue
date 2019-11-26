<template>
    <div class="h-wrap">
        <el-row
            :gutter="0"
            type="flex"
            align="middle"
            class="h-header inner"
        >
            <el-col :span="4">
                <geo />
            </el-col>
            <el-col :span="6">
                <user />
            </el-col>
            <el-col :span="14">
                <navbar />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Geo from "./geo";
import User from "./user";
import Navbar from "./nav";
export default {
    components: {
        Geo,
        User,
        Navbar
    }
};
</script>

<style lang="less">
.h-wrap {
    color: #999;
    .h-header {
        height: 40px;
    }
}
</style>
