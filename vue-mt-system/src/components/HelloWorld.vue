<template>
    <div class="color-red">这里是子组件的内容
        {{name}}

        <span>子组件接收到的数据为： {{name}}</span>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {};
        }, props: {
            name: {
                type: String, // 定义了传入值的类型
                default: null, // 定义默认值
            },
        },
    };
</script>

<style lang="scss">
    .color-red {
        background: red;
    }
</style>
