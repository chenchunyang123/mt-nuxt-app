<template>
    <div class="m-wrap">
        <div class="m-title">全部分类</div>
        <ul
            class="m-list"
            @mouseleave="leave"
        >
            <li
                v-for="(item, idx) in navMap"
                :key="idx"
                @mouseenter="enter"
            >
                <i :class="['iconfontNew', item.iconName]"></i>
                <span>{{item.text}}</span>
                <i class="rightArrow"></i>
            </li>
        </ul>
        <!-- 分类详情 -->
        <div
            class="m-detail"
            v-show="displayNavDetail"
            @mouseenter="enterDetail"
            @mouseleave="leaveDetail"
        >
            <template v-for="(item, idx) in currentDetail">
                <dl>
                    <dt>
                        {{item.title}}
                        <div class="m-more">
                            更多
                            <i class="rightArrow"></i>
                        </div>
                    </dt>
                    <dd v-for="(item, idx) in item.list">{{item}}</dd>
                </dl>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayNavDetail: "", // 显示的栏目
            timer: null, // 延迟消失定时器
            navMap: [
                {
                    iconName: "hc-icon-foodNew",
                    text: "美食",
                    detail: [
                        {
                            title: "美食",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-waimaiNew",
                    text: "外卖",
                    detail: [
                        {
                            title: "外卖",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-hotelNew",
                    text: "酒店",
                    detail: [
                        {
                            title: "酒店",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-zhenguoNew",
                    text: "榛果民宿",
                    detail: [
                        {
                            title: "榛果民宿",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-maoyanNew",
                    text: "猫眼电影",
                    detail: [
                        {
                            title: "猫眼电影",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-planeNew",
                    text: "机票 / 火车票",
                    detail: [
                        {
                            title: "机票",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-ktvNew",
                    text: "休闲娱乐 / KTV",
                    detail: [
                        {
                            title: "外卖",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-lifeNew",
                    text: "生活服务",
                    detail: [
                        {
                            title: "生活服务",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-beautyNew",
                    text: "丽人 / 美发 / 医学美容",
                    detail: [
                        {
                            title: "丽人",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-marriedNew",
                    text: "结婚 / 婚纱摄影 / 婚宴",
                    detail: [
                        {
                            title: "结婚",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-childNew",
                    text: "亲子 / 儿童乐园 / 幼教",
                    detail: [
                        {
                            title: "亲子",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-sportNew",
                    text: "运动健身 / 健身中心",
                    detail: [
                        {
                            title: "外卖",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-decorateNew",
                    text: "家装 / 建材 / 家居",
                    detail: [
                        {
                            title: "家装",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-educationNew",
                    text: "学习培训 / 音乐培训",
                    detail: [
                        {
                            title: "学习培训",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-medicalNew",
                    text: "医疗健康 / 宠物 / 爱车",
                    detail: [
                        {
                            title: "医疗健康",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                },
                {
                    iconName: "hc-icon-childNew",
                    text: "酒吧 / 密室逃脱",
                    detail: [
                        {
                            title: "酒吧",
                            list: [
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点",
                                "代金劵",
                                "甜点"
                            ]
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        currentDetail() {
            // 没有要显示的栏目返回空数组
            if (!this.displayNavDetail) {
                return [];
            }
            return this.navMap.filter(
                item => item.text === this.displayNavDetail
            )[0].detail;
        }
    },
    methods: {
        // 切换显示导航栏目
        enter(e) {
            this.displayNavDetail = e.target.querySelector("span").innerText;
        },
        leave() {
            this.timer = setTimeout(() => {
                this.displayNavDetail = "";
            }, 150);
        },
        enterDetail() {
            clearTimeout(this.timer);
            this.timer = null;
        },
        leaveDetail() {
            this.displayNavDetail = "";
        }
    }
};
</script>

<style lang="less" scoped>
.m-wrap {
    width: 230px;
    height: 475px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    position: relative;
    .m-title {
        color: #222;
        font-size: 16px;
        font-weight: 700;
        padding: 20px 0 25px 10px;
    }
    .m-list {
        li {
            display: flex;
            width: 100%;
            height: 25px;
            align-items: center;
            padding: 0 12px;
            position: relative;
            span {
                font-size: 13px;
                color: #666;
                margin-left: 12px;
                cursor: pointer;
            }
            i:nth-child(1) {
                position: relative;
                top: -2px;
            }
            i:nth-child(3) {
                position: absolute;
                right: 14px;
                top: 10px;
            }
        }
        li:hover {
            background: rgba(255, 150, 0, 0.08);
            span {
                color: #222;
                font-weight: 700;
            }
            i:nth-child(3) {
                color: #222;
                border-bottom-color: #222;
                border-right-color: #222;
            }
        }
    }
    .m-detail {
        width: 400px;
        height: 404px;
        background-color: #fff;
        position: absolute;
        left: 230px;
        top: 70px;
        z-index: 999;
        dl {
            width: 340px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            dt {
                height: 32px;
                line-height: 22px;
                font-size: 16px;
                color: #222;
                font-weight: 500;
                margin-top: 24px;
                padding-bottom: 10px;
                border-bottom: 1px solid #e5e5e5;
                .m-more {
                    font-size: 12px;
                    color: #999;
                    position: absolute;
                    right: 10px;
                    top: 25px;
                    cursor: pointer;
                    i {
                        position: absolute;
                        left: 26px;
                        top: 8px;
                    }
                }
            }
            dd {
                color: #999;
                font-size: 12px;
                float: left;
                margin-top: 10px;
                margin-right: 16px;
                cursor: pointer;
                &:hover {
                    color: #fe8c00;
                }
            }
        }
    }
}
</style>
