<template>
    <div class="u-wrap">
        <template>
            <nuxt-link
                to="/login"
                class="u-login"
            >立即登陆</nuxt-link>
            <nuxt-link
                to="/register"
                class="u-register"
            >注册</nuxt-link>
        </template>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.u-wrap {
    display: flex;
    padding-left: 20px;
    .u-login {
        margin-right: 10px;
    }
    .u-register {
        color: #999;
        &:hover {
            color: #fe8c00;
        }
    }
}
</style>
