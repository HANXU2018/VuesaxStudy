<template>
    <div>
        <div id="DynamicData" style="width:300px;height: 300px">
            <dv-border-box-1>
                <div class="content">
                    <dv-digital-flop :config="config" />
                </div>
                <dv-loading>Loading...</dv-loading>
            </dv-border-box-1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                number: 100,
                config: {
                    number: [100],
                    toFixed: 2,
                    content: '{nt}个',
                },
            };
        },
        mounted() {
            // 在生命周期中调用定时函数
            this.timingFn();
        },
        beforeDestroy() {
            // 在组件销毁的时候清除定时函数
            clearInterval(this.timeFn);
        },
        methods: {
            timingFn() {
                this.timeFn = setInterval(() => {
                    // 每间隔 2S 就把数据 +1
                    this.number = this.number + getRandomInt(100);
                    this.config.number[0] = this.number;
                    // 强制进行更新
                    this.config = { ...this.config };
                }, 2000);
            },
        },
    };
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
</script>

<style lang="scss" scoped>
    #DynamicData {
        margin: 20px;
        padding: 20px;
        background-color: #282c34;
        border-radius: 10px;
        .content {
            display: flex;
            align-items: center;
        }
    }
</style>
