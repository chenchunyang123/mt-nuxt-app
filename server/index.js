import Koa from "koa";
import consola from "consola";
import { Nuxt, Builder } from "nuxt";

// nuxt本没有的包
import mongoose from "mongoose";
import bodyParser from "koa-bodyparser";
import session from "koa-generic-session";
import Redis from "koa-redis";
import json from "koa-json";
import dbConfig from "./dbs/config";
import passport from "./interface/utils/passport";
import users from "./interface/users";

// 实例化
const app = new Koa();

// 进行一些设置
app.keys = ["mt", "keys"];
app.proxy = true;
app.use(
    session({
        key: "mt",
        prefix: "mt:uid",
        store: new Redis()
    })
);
app.use(
    bodyParser({
        extendTypes: ["json", "form", "text"]
    })
);
app.use(json());

// 连接数据库
mongoose.connect(dbConfig.dbs, { useNewUrlParser: true });
// passport初始化操作
app.use(passport.initialize());
app.use(passport.session());

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = app.env !== "production";

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config);

    const { host = process.env.HOST || "127.0.0.1", port = process.env.PORT || 3000 } = nuxt.options.server;

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    app.use(users.routes()).use(users.allowedMethods()); // 配置路由

    app.use(ctx => {
        ctx.status = 200;
        ctx.respond = false; // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res);
    });

    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

start();
