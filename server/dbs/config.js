export default {
    dbs: "mongodb://127.0.0.1:27017/meituan",
    redis: {
        get host() {
            return "127.0.0.1";
        },
        // redis的默认端口号
        get port() {
            return 6379;
        }
    },
    smtp: {
        get host() {
            return "smtp.qq.com";
        },
        get user() {
            return "274002525@qq.com";
        },
        // 授权码（从自己的QQ邮箱中生成）
        get pass() {
            return "sgmafdbthsmmbhei";
        },
        // 获取验证码
        get code() {
            return () => {
                return Math.random()
                    .toString(16)
                    .slice(2, 6)
                    .toUpperCase();
            };
        },
        // 获取过期时间
        get expire() {
            return () => {
                return new Date().getTime() + 60 * 60 * 1000;
            };
        }
    }
};
