<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <vs-button>Hello World</vs-button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

<style lang="stylus">
    .examplex
        display: flex;
        align-items: center;
        justify-content: center;
        button
            margin: 0px !important;
            &.btnx
                margin-left: 10px !important;
                border-radius: 5px 0px 0px 5px;
            &.btn-drop
                border-radius: 0px 5px 5px 0px;
                border-left: 1px solid rgba(255, 255, 255, .2);
</style>
