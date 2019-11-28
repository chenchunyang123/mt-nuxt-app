import mongoose from "mongoose";
const { Schema, model } = mongoose; // 引入schema
// 实例化
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});
// 导出
export default model("User", UserSchema);
