<template>
    <div>
        <div id="DataV" style="width:2000px;height: 300px">
            <!-- 引入边框组件 -->
            <dv-border-box-1 title="炫酷的边框">
                <div class="content">

                    <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
                    <!-- 添加动态环图 -->
                    <dv-active-ring-chart
                            :config="config"
                            style="width:300px;height:300px"
                    />
                    <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
                    <dv-decoration-12 style="width:150px;height:150px;"/>
                    <!-- 添加胶囊柱图 -->
                    <dv-capsule-chart :config="config" style="width:300px;height:200px"/>
                    <!-- 添加水位图 -->
                    <dv-water-level-pond
                            :config="pond"
                            style="width:150px;height:200px"
                    />

                    <dv-scroll-board :config="config2" style="width:500px;height:220px"/>


                </div>
            </dv-border-box-1>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pond: {
                    data: [66],
                },
                config: {
                    data: [
                        {
                            name: '周口',
                            value: 55,
                        },
                        {
                            name: '南阳',
                            value: 120,
                        },
                        {
                            name: '西峡',
                            value: 78,
                        },
                        {
                            name: '驻马店',
                            value: 66,
                        },
                        {
                            name: '新乡',
                            value: 80,
                        },
                    ],
                    header: ['列1', '列2', '列3'],
                    showOriginValue: true,
                    showValue: true,
                    index: true,
                    waitTime: 1000,
                    rowNum: 3,
                },
                config2: {
                    data: [
                        ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
                        ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
                        ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
                        ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
                        ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
                        ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
                        ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
                        ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
                        ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
                        ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
                    ],
                    header: ['列1', '列2', '列3'],
                    showOriginValue: true,
                    showValue: true,
                    index: true,
                },
            };
        },
        methods: {},
    };
</script>

<style lang="scss" scoped>
    #DataV {
        padding: 20px;
        background-color: #282c34;
        border-radius: 10px;

        .content {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>
