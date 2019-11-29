<template>
    <div class="l-wrap">
        <div class="l-inner">
            <header>
                <nuxt-link to="/"></nuxt-link>
            </header>
            <main>
                <div class="l-img">
                    <img
                        :src="require('../assets/img/loginbg.jpeg')"
                        alt="图片"
                    />
                </div>
                <div class="l-form">
                    <div class="l-text">账号登陆</div>
                    <el-form>
                        <el-form-item>
                            <el-input v-model="username">
                                <template slot="prefix">
                                    <i class="el-icon-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                v-model="password"
                                show-password
                            >
                                <template slot="prefix">
                                    <i class="el-icon-lock"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button
                                class="l-btn"
                                @click="login"
                            >登陆</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </main>
            <footer>
                <div class="l-line1">
                    <a href="javascript:void(0)">关于美团</a>
                    <i></i>
                    <a href="javascript:void(0)">加入我们</a>
                    <i></i>
                    <a href="javascript:void(0)">商家入驻</a>
                    <i></i>
                    <a href="javascript:void(0)">帮助中心</a>
                    <i></i>
                    <a href="javascript:void(0)">美团手机版</a>
                </div>
                <div class="l-line2">©️2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
            </footer>
        </div>
    </div>
</template>

<script>
import md5 from "md5";
export default {
    layout: "blank",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            this.$axios
                .post("/users/signin", {
                    username: window.encodeURIComponent(this.username),
                    password: md5(this.password)
                })
                .then(({ status, data }) => {
                    if (status === 200) {
                        if (data && data.code === 0) {
                            this.$message({ message: "登陆成功", type: "success" });
                            setTimeout(() => {
                                location.href = "/";
                            }, 1000);
                        } else {
                            this.$message.error(`${data.msg}`);
                        }
                    } else {
                        this.$message.error("服务器出错");
                    }
                });
        }
    }
};
</script>

<style lang="less" scoped>
.l-wrap {
    .l-inner {
        width: 980px;
        margin: 0 auto;
        header {
            width: 100%;
            height: 47px;
            margin: 40px 0 30px;
            a {
                float: left;
                width: 130px;
                height: 100%;
                background-image: url("../assets/img/logo.png");
                background-size: 100% 100%;
            }
        }
        main {
            width: 100%;
            height: 370px;
            margin-bottom: 70px;
            .l-img {
                width: 480px;
                height: 370px;
                float: left;
                margin-right: 115px;
            }
            .l-form {
                width: 280px;
                float: left;
                margin-top: 60px;
                .l-text {
                    font-size: 14px;
                    color: #333;
                    margin-bottom: 10px;
                }
                .l-btn {
                    width: 100%;
                }
            }
        }
        footer {
            font-size: 12px;
            color: #999;
            .l-line1 {
                width: 100%;
                height: 48px;
                line-height: 48px;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                a {
                    color: #999;
                }
                i {
                    border-left: 1px solid #eee;
                    margin: 0 20px;
                }
            }
            .l-line2 {
                padding: 20px 0;
            }
        }
    }
}
</style>
