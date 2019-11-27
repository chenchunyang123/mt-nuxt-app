<template>
    <el-carousel height="240px">
        <el-carousel-item
            v-for="(item, idx) in 5"
            :key="item"
        >
            <div :class="[`c-bg${idx}`]"></div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    data() {
        return {
            carouselBg: []
        };
    }
};
</script>

<style lang="less" scoped>
.bg {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    cursor: pointer;
}
// 图片地址
.c-bg0 {
    .bg;
    background-image: url("../../assets/img/carousel1.jpg");
}
.c-bg1 {
    .bg;
    background-image: url("../../assets/img/carousel2.jpg");
}
.c-bg2 {
    .bg;
    background-image: url("../../assets/img/carousel3.jpg");
}
.c-bg3 {
    .bg;
    background-image: url("../../assets/img/carousel4.jpg");
}
.c-bg4 {
    .bg;
    background-image: url("../../assets/img/carousel5.png");
}
</style>
