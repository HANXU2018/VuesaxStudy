<template>
    <div id="app">
        这里是父组件
        <HelloWorld :name="name"></HelloWorld>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'App',
        data() {
            return {
                name: '小明',
            };
        },
        components: {
            HelloWorld,
        },
    }
</script>

<style lang="scss">

</style>
