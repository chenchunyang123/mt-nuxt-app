<template>
    <div class="u-wrap">
        <template v-if="user">
            <span class="u-name">{{user}}</span>
            <nuxt-link to="/exit">退出</nuxt-link>
        </template>
        <template v-else>
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
export default {
    data() {
        return {
            user: ""
        };
    },
    async mounted() {
        const {
            status,
            data: { user }
        } = await this.$axios.get("/users/getUser");
        if (status === 200) {
            this.user = user;
        }
    }
};
</script>

<style lang="less" scoped>
.u-wrap {
    display: flex;
    padding-left: 20px;
    .u-name {
        margin-right: 10px;
        color: #fe8c00;
    }
    a {
        color: #999;
        &:hover {
            color: #fe8c00;
        }
    }
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
