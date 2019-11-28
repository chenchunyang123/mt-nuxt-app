<template>
    <el-container class="r-wrap">
        <el-header>
            <div class="r-inner r-flex">
                <nuxt-link to="/">美团</nuxt-link>
                <div class="r-login">
                    已有美团账号?
                    <div class="r-btn">登陆</div>
                </div>
            </div>
        </el-header>
        <el-main>
            <div class="r-inner">
                <register-form />
            </div>
        </el-main>
        <el-footer>©️meituan.com 京ICP证070791号 京公网安备11010502025545号</el-footer>
    </el-container>
</template>

<script>
import registerForm from "~/components/register/registerForm";
export default {
    layout: "blank",
    components: {
        registerForm
    }
};
</script>

<style lang="less" scoped>
.r-inner {
    width: 980px;
    margin: 0 auto;
}
.r-flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.r-wrap {
    width: 100%;
    .el-header {
        height: 62px;
        border-bottom: 2px solid #d8d8d8;
        a {
            width: 100px;
            height: 36px;
            text-indent: -1000px;
            background-image: url("../assets/img/logo.png");
            background-size: 100% 100%;
        }
        .r-login {
            color: #666;
            font-size: 14px;
            display: flex;
            align-items: flex-end;
            .r-btn {
                width: 46px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
                box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
                color: #222;
                font-size: 12px;
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }
    .el-main {
    }
    .el-footer {
        color: #999;
        font-size: 13px;
        text-align: center;
        border-top: 1px solid #eee;
        padding-top: 20px;
    }
}
</style>
