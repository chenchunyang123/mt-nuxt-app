module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "@nuxtjs",
        "prettier",
        "prettier/vue",
        "plugin:prettier/recommended",
        "plugin:nuxt/recommended"
    ],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        "nuxt/no-cjs-in-config": 0,
        indent: [2, 4] // 四个空格缩进
    }
};
