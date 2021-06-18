<template>
    <div class="color-red">这里是子组件的内容
        {{name}}

        <span>子组件接收到的数据为： {{name}}</span>


        <p>子组件使用watch接收到的数据为：{{wnum}}</p>
        <p>子组件使用computed接收到的数据为：{{cnum}}</p>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                ege: 12,
                wnum: null
            };
        }, props: {
            name: {
                type: String, // 定义了传入值的类型
                default: null, // 定义默认值
            },
            number: {
                type: Number,
                default: null
            }
        }, // 在 mounted 生命周期里直接传递数据到父组件中
        mounted() {
            // 参数允许传入多个
            this.$emit('egeFn', this.ege);
        },
        watch: {
            number: {
                handler(data) {
                    this.wnum = data + 1;
                },
                immediate: true
            }
        },
        computed: {
            cnum() {
                return this.number * 2;
            }
        }
    };
</script>

<style lang="scss">
    .color-red {
        background: powderblue;
    }
</style>
