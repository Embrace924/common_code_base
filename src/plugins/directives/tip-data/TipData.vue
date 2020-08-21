<!--LongStrCut-->
<template>
    <div class="long-str-cut">
        <div class="top"
             v-long-str-cut="{line:2}">
            Vue2代码库中的设计和体系架构存在一定的问题，所以不得不对其进行更正现在的主流浏览器对 JavaScript
            语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div style="bottom: 100px;"
             v-long-str-cut>那么Vue3到底更新了什么呢？它有哪些新的特性？它相对于Vue2的优势是什么？Vue3如何进行使用现在的主流浏览器对 JavaScript
            语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能？
        </div>
        <div class="bottom"
             v-long-str-cut>现在的主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div style="right: 0; bottom: 0;"
             v-long-str-cut>现在的主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div style="right: 0;"
             v-long-str-cut>现在的主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div style="top: 0; right: 0;"
             v-long-str-cut>现在的主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
            JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能
        </div>
        <div ref="test"
             style="right: 200px; bottom: 200px;"
             v-long-str-cut>现在的主流浏览器对 JavaScript 语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能现在的主流浏览器对
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
                this.$refs.test.innerHTML = '语言已经有了非常好的支持，其中包括了后来ES6更新的语法，而Vue2使用的大多都是ES6之前的语法，所以现在可以通过利用新的语法对Vue框架进行更新，以提高性能？'
            }, 5000)
        }
    },
};
</script>

<style lang="less"
       scoped>
.long-str-cut {
    > div {
        position: absolute;
        width: 200px;
        height: 45px;
    }

    .top {
        top: 0;
    }

    .bottom {
        bottom: 0;
    }
}
</style>
 