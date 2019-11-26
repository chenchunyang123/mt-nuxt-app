<template>
    <div class="i-wrap">
        <header-bar />
        <search-bar />
    </div>
</template>

<script>
import headerBar from "~/components/public/header/headerBar";
import searchBar from "~/components/public/header/searchBar";
export default {
    components: {
        headerBar,
        searchBar
    }
};
</script>

<style lang="less" scoped>
.i-wrap {
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
</style>
