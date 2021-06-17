<template>
    <div id="app">
        我的名字是 ：{{name}}
        <span v-html="name2"></span>
        <hr/>
        <button>Button</button>
        <br/>
        <button v-bind:disabled="flag">Button</button>
        <br/>
        <button :disabled="flag">Button</button>

        <br/>
        <button v-bind:disabled="!flag">Button</button>
        <br/>
        <button :disabled="!flag">Button</button>

        <hr/>
        <div v-if="flag">这里是为true的结果</div>
        <div v-else>这里是为false的结果</div>


        <div v-if=" value == 0">值为 0</div>
        <div v-else-if=" value == 1">值为 1</div>
        <div v-else>值为其它</div>
        <hr/>
        <div :class="{ 'red': flag  , 'blue': flag2}" class="text">class绑定</div>

        <hr/>
        <p>number的值为：{{number}}</p>
        <p>计算属性返回的值为：{{monitorData}}</p>

        <hr/>

        <button v-on:click="handleBtn">触发事件V-on</button>
        <button @click="handleBtn2">触发事件@</button>
        <button v-on:click="number = 3">触发事件v-on</button>

        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                name: "HANXU2018",
                name2: "<br><span style='color:red'> HANXU2018 </span></br>",
                flag: true,
                flag2: true,
                value: 3,
                number: 2
            };
        },
        computed: {
            monitorData() {
                return this.number * 10;
            }
        },
        watch: {
            number: {
                handler: function (newValue, oldValue) {
                    // 首次执行没有旧值 oldValue 的值将为 undefined
                    console.log('旧的属性值：' + oldValue);
                    console.log('新的属性值：' + newValue * 2);
                },
                immediate: true,
                deep: true
            }
        },
        // 调用生命周期函数
        mounted() {
            alert('直接输出值');
            this.handleBtn();
        },
        methods: {
            handleBtn() {
                alert("按钮")
                alert(this.number+"按钮被按下");
            },
            handleBtn2() {
                alert(this.number);
            }
        }
    }
</script>

<style lang="scss">
    .text {
        font-size: 46px;
    }

    .red {
        color: red;
    }

    .blue {
        color: lightskyblue;
    }
</style>
