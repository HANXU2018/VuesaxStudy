<template>
    <div id="app">
<!--        <Notification/>-->
<!--        <Slidebar/>-->
<!--        <VuesaxDemo/>-->
<!--        <VuesaxContent/>-->
<!--        <vs-button>-->
<!--            Hello World Vuesax + Nuxtjs-->
<!--        </vs-button>-->

<!--        <p class="app-text">{{data1}}</p>-->
<!--        <Chart />-->

<!--        <DataV />-->

<!--        <DynamicData/>-->
        <Card/>
        123
    </div>
</template>

<script>
    import Chart from './components/Chart.vue';
    import DataV from './components/DataV.vue';
    import DynamicData from './components/DynamicData.vue';

    import VuesaxDemo from './components/VuesaxDemo.vue';

    import VuesaxContent from "./components/VuesaxContent";

    import Slidebar from "./components/Slidebar";

    import Notification from "./components/Notification";

    import Card  from "./components/Card";

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
            VuesaxDemo,
            VuesaxContent,
            Slidebar,
            Notification,
            Card,
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
