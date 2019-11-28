<template>
    <div class="b-wrap">
        <!-- 导航栏 -->
        <nav>
            <ul>
                <li
                    v-for="(item, idx) in navList"
                    :class="[`color${idx}`]"
                    :key="idx"
                >{{item}}</li>
            </ul>
        </nav>
        <!-- banner -->
        <div class="b-bannerbox">
            <!-- 第一层banner -->
            <div class="b-bannerOne">
                <div>
                    <Carousel />
                </div>
                <div></div>
                <div>
                    <img :src="require('~/assets/img/avatar.jpg')" />
                    <p>Hi！你好</p>
                    <div class="b-registe">注册</div>
                    <div class="b-login">立即登陆</div>
                </div>
            </div>
            <!-- 第二层banner -->
            <div class="b-bannerTwo">
                <div></div>
                <div></div>
                <div></div>
                <!-- 上面3张背景图, 下面二维码-->
                <div>
                    <img
                        src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                        alt="二维码"
                    />
                    <p>美团APP手机版</p>
                    <p>
                        <span>1元起</span>
                        吃喝玩乐
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from "~/components/index/carousel";
export default {
    components: {
        Carousel
    },
    data() {
        return {
            navList: [
                "美团外卖",
                "猫眼电影",
                "美团酒店",
                "民宿 / 公寓",
                "商家入驻",
                "美团公益"
            ]
        };
    }
};
</script>

<style lang="less" scoped>
// btn样式
.btn {
    width: 118px;
    height: 38px;
    border: 1px solid #e5e5e5;
    border-radius: 40px;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
        background-color: #f6f6f6;
    }
}
.b-wrap {
    flex: 1;
    margin-left: 10px;
    nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        ul {
            display: flex;
            padding-left: 30px;
            li {
                color: #222;
                font-size: 16px;
                font-weight: 700;
                padding: 0 20px;
                cursor: pointer;
            }
        }
    }
    .b-bannerbox {
        width: 100%;
        height: 414px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
        .b-bannerOne {
            height: 240px;
            display: flex;
            justify-content: space-between;
            > div:nth-child(1) {
                width: 550px;
            }
            > div:nth-child(2) {
                width: 150px;
                background-image: url("../../assets/img/banner1-2.jpg");
                background-size: 100% 100%;
            }
            > div:nth-child(3) {
                width: 240px;
                height: 240px;
                background-color: #fff;
                border: 1px solid #e5e5e5;
                text-align: center;
                padding-top: 30px;
                img {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    border: 4px solid #e5e5e5;
                }
                p {
                    color: #222;
                    font-size: 16px;
                    font-weight: 500;
                }
                .b-registe {
                    .btn;
                    margin: 12px auto;
                }
                .b-login {
                    .btn;
                    margin: 0 auto;
                }
            }
        }
        .b-bannerTwo {
            height: 165px;
            display: flex;
            justify-content: space-between;
            > div:nth-child(1) {
                width: 270px;
                background-image: url("../../assets/img/banner2-1.png");
                background-size: 100% 100%;
            }
            > div:nth-child(2) {
                width: 270px;
                background-image: url("../../assets/img/banner2-2.jpg");
                background-size: 100% 100%;
            }
            > div:nth-child(3) {
                width: 150px;
                background-image: url("../../assets/img/banner2-3.jpg");
                background-size: 100% 100%;
            }
            > div:nth-child(4) {
                // 二维码盒子
                width: 240px;
                height: 167px;
                text-align: center;
                background-color: #fff;
                border: 1px solid #e5e5e5;
                font-weight: 500;
                img {
                    width: 95px;
                    height: 95px;
                    margin-top: 5px;
                }
                p:nth-child(2) {
                    color: #222;
                    font-size: 16px;
                }
                p:nth-child(3) {
                    font-size: 12px;
                    color: #3f3f3f;
                    span {
                        color: #ec5330;
                    }
                }
            }
        }
    }
}
// 6种导航hover颜色(按顺序)
.color0:hover {
    color: #fbc700;
}
.color1:hover {
    color: #ed1e24;
}
.color2:hover {
    color: #f04d4e;
}
.color3:hover {
    color: #fdc411;
}
.color4:hover {
    color: #fe8c00;
}
.color5:hover {
    color: #f04d4e;
}
</style>
