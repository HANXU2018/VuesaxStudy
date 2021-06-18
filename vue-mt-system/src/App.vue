<template>
    <div id="app">
        这里是父组件
        <!-- 传入了 number 值给子组件 -->
        <HelloWorld :number="number"></HelloWorld>

        <span>父组件接收到的值为：{{age}}</span>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'App',
        data() {
            return {
                name: '小明',
                age: null,
                number:10,
            };
        },
        components: {
            HelloWorld,
        }, methods: {
            egeParent(data) {
                // 这里参数就是子组件的值
                this.age = data;
            },
        },
    }
</script>

<style lang="scss">

</style>
