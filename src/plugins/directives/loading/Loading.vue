<template>
    <div>
        <div v-segma-loading="loading"
             class="segma-loading"
             segma-loading-background="rgba(0,0,0,0.2)"
             segma-loading-text="加载中"></div>
        <div @click="loading=!loading">loading</div>
    </div>

</template>

<script>
export default {
    name: "SegmaLoading",
    data() {
        return {
            loading: false
        }
    },
}
</script>

<style scoped>
.segma-loading {
    margin: 0 auto;
    width: 200px;
    height: 500px;
    background-color: #eeeeee;
}

</style>
