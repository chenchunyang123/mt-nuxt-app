<template>
    <div class="p-index inner">
        <div class="p-banner">
            <Menu />
            <Banner />
        </div>
        <div>3</div>
    </div>
</template>

<script>
import Menu from "~/components/index/menu";
import Banner from "~/components/index/banner";
export default {
    components: {
        Menu,
        Banner
    }
};
</script>

<style lang="less">
.p-index {
    .p-banner {
        display: flex;
        position: relative;
        top: -72px;
        z-index: 999;
    }
}
</style>
