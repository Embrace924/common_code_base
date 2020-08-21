<template>
    <div class="about">
        <el-input
            v-model="value"
            v-number="{ min: -8, max: 100, precision: 2 }"
            size="small"
        ></el-input>
        <el-button size="small" @click="click">失去焦点按钮 </el-button>
    </div>
</template>
<script>
export default {
    name: "OnlyNumber",
    data() {
        return {
            value: -1,
            value2: 2
        };
    },
    watch: {
        value() {
            console.log(typeof this.value);
        }
    },
    methods: {
        click() {
            console.log(typeof this.value === "number");
        }
    }
};
</script>
