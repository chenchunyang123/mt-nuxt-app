<template>
    <div class="s-wrap">
        <div class="inner">
            <div class="s-logo">
                <h1 style="visibility: hidden">美团</h1>
                <img src="~/assets/img/logo.png" />
            </div>
            <!-- 搜索框 -->
            <div class="s-search">
                <el-input
                    v-model="searchValue"
                    placeholder="搜索商家或地点"
                    @focus="focus"
                    @blur="blur"
                >
                    <el-button
                        slot="append"
                        icon="el-icon-search"
                    ></el-button>
                </el-input>
                <!-- 没输入只是获取焦点时候的热门搜索 -->
                <dl
                    class="s-hotSearch"
                    v-show="hotSearchVisible"
                >
                    <dt>热门搜索</dt>
                    <dd>华莱士炸鸡汉堡</dd>
                    <dd>华莱士炸鸡汉堡</dd>
                    <dd>华莱士炸鸡汉堡</dd>
                    <dd>华莱士炸鸡汉堡</dd>
                    <dd>华莱士炸鸡汉堡</dd>
                </dl>
                <!-- 输入后的搜索结果 -->
                <ul
                    class="s-result"
                    v-show="resultVisible"
                >
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                    <li>结果</li>
                </ul>
                <!-- 下部推荐 -->
                <ul class="s-recommend">
                    <li>华莱士炸鸡汉堡</li>
                    <li>华莱士炸鸡汉堡</li>
                    <li>华莱士炸鸡汉堡</li>
                    <li>华莱士炸鸡汉堡</li>
                    <li>华莱士炸鸡汉堡</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: "", // 输入的值
            isFocus: false // 是否获取了搜索框的焦点
        };
    },
    computed: {
        resultVisible() {
            return this.isFocus && this.searchValue;
        },
        hotSearchVisible() {
            return this.isFocus && !this.searchValue;
        }
    },
    methods: {
        focus() {
            this.isFocus = true;
        },
        blur() {
            this.isFocus = false;
        }
    }
};
</script>

<style lang="less" scoped>
.searchBox {
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 40px;
    left: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid rgb(222, 222, 222);
}
.s-wrap {
    height: 160px;
    background-color: #fff;
    .s-logo {
        width: 280px;
        img {
            width: 126px;
            height: 46px;
        }
    }
    .s-search {
        width: 550px;
        height: 65px;
        position: absolute;
        left: 320px;
        top: 30px;
        z-index: 999;
        .s-hotSearch {
            .searchBox;
            height: 60px;
            dt {
                padding: 10px 10px;
                color: #999;
                font-weight: bold;
            }
            dd {
                float: left;
                margin-left: 12px;
                color: #666;
            }
        }
        .s-result {
            .searchBox;
            li {
                height: 24px;
                line-height: 24px;
                padding-left: 14px;
                cursor: pointer;
                &:hover {
                    background-color: #eee;
                    color: #fe8c00;
                }
            }
        }
        .s-recommend {
            display: flex;
            padding-left: 10px;
            padding-top: 6px;
            li {
                color: #999;
                margin-right: 8px;
            }
        }
    }
}
</style>
