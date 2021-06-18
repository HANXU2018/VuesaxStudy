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
            return {
                ege: 12,
            };
        }, props: {
            name: {
                type: String, // 定义了传入值的类型
                default: null, // 定义默认值
            },
        }, // 在 mounted 生命周期里直接传递数据到父组件中
        mounted() {
            // 参数允许传入多个
            this.$emit('egeFn', this.ege);
        },
    };
</script>

<style lang="scss">
    .color-red {
        background: red;
    }
</style>
