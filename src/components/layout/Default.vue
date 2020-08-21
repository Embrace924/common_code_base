<!-- 默认布局 -->
<template>
    <div class="layout-default">
        <div id="nav">
            <router-link :to="`/${item}`"
                         :key="item"
                         v-for=" item in arr"> {{item}}|
            </router-link>
        </div>
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>
<script>

export default {
    name: 'DefaultLayout',
    components: {},
    data() {
        return {
            arr: ['TipData']

        }
    },
};
</script>
<style lang="less"
       scoped>
.layout-default {
    overflow-x: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

