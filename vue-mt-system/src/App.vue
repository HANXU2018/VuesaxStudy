<template>
    <div id="app">
        <p class="app-text">{{data1}}</p>
        <Chart />

        <DataV />

        <DynamicData/>
    </div>
</template>

<script>
    import Chart from './components/Chart.vue';
    import DataV from './components/DataV.vue';
    import DynamicData from './components/DynamicData.vue';

    export default {
        name: 'App',
        data() {
            return{
                data1 : 'P标签'
            }
        },
        components: {
            Chart,
            DataV,
            DynamicData,
        },
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
