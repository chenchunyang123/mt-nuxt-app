import passport from "koa-passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../../dbs/models/users";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        const where = {
            username
        };
        const result = await UserModel.findOne(where);
        if (result !== null) {
            if (result.password === password) {
                return done(null, result);
            } else {
                return done(null, false, "密码错误");
            }
        } else {
            return done(null, false, "用户不存在");
        }
    })
);

// 在用户登录验证成功以后将会把用户的数据存储到 session 中
passport.serializeUser((user, done) => {
    done(null, user);
});

// 请求的时候去session中找
passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
