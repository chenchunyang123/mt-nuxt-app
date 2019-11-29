<template>
    <div class="rf-wrap">
        <el-form
            label-width="120px"
            :model="formLabel"
            :rules="rules"
            ref="myForm"
        >
            <el-form-item
                label="昵称"
                prop="name"
            >
                <el-input v-model="formLabel.name"></el-input>
            </el-form-item>
            <el-form-item
                label="邮箱"
                prop="email"
            >
                <el-input v-model="formLabel.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="sendMsg">发送验证码</el-button>
                <span>{{statusMsg}}</span>
            </el-form-item>
            <el-form-item
                label="验证码"
                prop="code"
            >
                <el-input v-model="formLabel.code"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="pwd"
            >
                <el-input
                    v-model="formLabel.pwd"
                    show-password
                ></el-input>
            </el-form-item>
            <el-form-item
                label="确认密码"
                prop="rpwd"
            >
                <el-input
                    v-model="formLabel.rpwd"
                    show-password
                ></el-input>
                <div>{{error}}</div>
            </el-form-item>
            <el-form-item size="large">
                <el-button @click="register">同意以下协议并注册</el-button>
                <div>
                    <a>《美团网用户协议》</a>
                    <a>《美团网隐私协议》</a>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import md5 from "md5";
export default {
    data() {
        return {
            formLabel: {
                name: "",
                email: "",
                code: "",
                pwd: "",
                rpwd: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        type: "string",
                        message: "请输入昵称",
                        trigger: "blur"
                    }
                ],
                email: [
                    {
                        required: true,
                        message: "请输入邮箱",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "请输入正确的邮箱格式",
                        trigger: "blur"
                    }
                ],
                code: [
                    {
                        required: true,
                        type: "string",
                        message: "请输入验证码",
                        trigger: "blur"
                    }
                ],
                pwd: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }
                ],
                rpwd: [
                    {
                        validator: (rule, value, callback) => {
                            if (value === "") {
                                callback(new Error("请再次输入密码"));
                            } else if (value !== this.formLabel.pwd) {
                                callback(new Error("两次输入密码不一致"));
                            } else {
                                callback();
                            }
                        },
                        required: true,
                        trigger: "blur"
                    }
                ]
            },
            statusMsg: "",
            error: ""
        };
    },
    methods: {
        sendMsg() {
            let namePass;
            let emailPass;
            if (this.timerid) {
                return false;
            }
            // err是错误信息, 正确的话就为空字符串
            this.$refs["myForm"].validateField("name", err => {
                namePass = err;
            });
            this.statusMsg = "";
            if (namePass) {
                return false;
            }
            this.$refs["myForm"].validateField("email", err => {
                emailPass = err;
            });
            if (!namePass && !emailPass) {
                this.$axios
                    .post("/users/verify", {
                        username: encodeURIComponent(this.formLabel.name),
                        email: this.formLabel.email
                    })
                    .then(({ status, data }) => {
                        if (status === 200 && data && data.code === 0) {
                            let count = 60;
                            this.statusMsg = `验证码已发送，剩余${--count}秒`;
                            this.timerid = setInterval(() => {
                                this.statusMsg = `验证码已发送，剩余${--count}秒`;
                                if (count === 0) {
                                    clearInterval(this.timerid);
                                    this.statusMsg = "";
                                }
                            }, 1000);
                        } else {
                            this.statusMsg = data.msg;
                        }
                    });
            }
        },
        register() {
            this.$refs["myForm"].validate(isPass => {
                if (isPass) {
                    this.$axios
                        .post("/users/signup", {
                            username: window.encodeURIComponent(this.formLabel.name),
                            password: md5(this.formLabel.pwd),
                            email: this.formLabel.email,
                            code: this.formLabel.code
                        })
                        .then(({ status, data }) => {
                            if (status === 200) {
                                if (data && data.code === 0) {
                                    location.href = "/login";
                                } else {
                                    this.error = data.msg;
                                }
                            } else {
                                this.error = `服务器出错：错误码:${status}`;
                            }
                            setTimeout(() => {
                                this.error = "";
                            }, 1500);
                        });
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.rf-wrap {
    width: 400px;
    margin-top: 20px;
    a {
        font-size: 13px;
        color: #fe8c00;
        cursor: pointer;
    }
}
</style>
