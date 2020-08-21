<!--LongStrCut-->
<template>
    <div class="tip-data">
        <div v-tip-data="{line:3,text:'提示'}"
             class="top"
             style="height: 65px;">
            Vue2代码库中的设计和体系架构存在一定的问题，所以不得不对其进行更正现在的主流浏览器对 JavaScript
            语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div v-tip-data="{text:'测试'}"
             style="bottom: 100px">那么Vue3到
        </div>
        <div v-tip-data
             class="bottom"> JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div v-tip-data
             style="right: 0;bottom:0;"> 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>

        <div v-tip-data
             style="right: 0;top:0;"> 主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div ref="test"
             v-tip-data
             style="right:200px;bottom:200px;"> 浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
    </div>

</template>

<script>
export default {
    name: 'LongStrCut',
    mounted() {
        this.change()
    },
    methods: {
        change() {
            setTimeout(() => {
                this.$refs.test.innerHTML = ' 其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能？'
            }, 5000)
        }
    },
};
</script>

<style lang="less"
       scoped>
.tip-data {
    position: relative;
    margin-top: 80px;
    width: 100%;
    height: calc(100% - 100px);
    > div {
        position: absolute;
        width: 200px;
        height: 30px;
    }
    .top {
        top: 0;
    }
    .bottom {
        bottom: 0;
    }
}
</style>
 