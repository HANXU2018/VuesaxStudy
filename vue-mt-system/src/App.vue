<template>
    <div id="app">
        <p class="app-text">{{data1}}</p>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return{
                data1 : 'P标签'
            }
        }
    }
</script>

<style lang="scss">
    @import "./style/style";
    $mainColor:blue;
    .text{
        color: $mainColor;
        padding-left: (300px+7px)*2/5;
    }
</style>
