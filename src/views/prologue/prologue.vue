<template>
    <div class="home" @click="stamp">
        <div id="scene" class="background">
            <div data-depth="0.2">
                <img src="../../assets/img/background/background.jpg" alt=""/>
            </div>
        </div>
        <div class="stamp" :style="{opacity: isStamp ? 1 : 0}"><img src="./../../assets/img/stamp/haitang.svg" alt="">
        </div>
        <div class="preface">
            <div class="preface_block block_1">
                <div class="font_1_1">十</div>
                <div class="font_1_2">年</div>
                <div class="font_1_3">如</div>
                <div class="font_1_4">一</div>
                <div class="font_1_5">夢</div>
            </div>
            <div class="preface_block block_2">
                <div class="font_2_1">滄</div>
                <div class="font_2_2">海</div>
                <div class="font_2_3">曠</div>
                <div class="font_2_4">浮</div>
                <div class="font_2_5">生</div>
            </div>
            <div class="preface_block block_3">
                <div class="font_3_1">不</div>
                <div class="font_3_2">知</div>
                <div class="font_3_3">海</div>
                <div class="font_3_4">棠</div>
                <div class="font_3_5">處</div>
            </div>
            <div class="preface_block block_4">
                <div class="font_4_1">風</div>
                <div class="font_4_2">雪</div>
                <div class="font_4_3">二</div>
                <div class="font_4_4">三</div>
                <div class="font_4_5">更</div>
            </div>
        </div>

    </div>
</template>

<script>
    import Parallax from 'parallax-js'

    export default {
        name: 'prologue',
        data() {
            return {
                isStamp: false
            }
        },
        methods: {
            stamp() {
                this.isStamp = true
            }
        },
        mounted() {
            var scene = document.getElementById("scene");
            var parallaxInstance = new Parallax(scene);
        },
        created() {
        }
    }
</script>

<style lang="less">
    @import "./../../assets/font/prologue.css";

    .home {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #000000;
        overflow: hidden;
        user-select: none;
        /*background-image: url("./../../assets/img/background/background.jpg");*/
        /*background-size: 100%;*/
        /*background-repeat: no-repeat;*/
    }

    .background{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        left: 0;
        top: 0;
    }

    .background img{
        width: 100%;
        height: 100%;
    }

    .preface {
        position: absolute;
        height: 100vh;
        width: 60%;
        left: 20%;
        overflow: hidden;
        cursor: default;
        color: white;
    }

    .loaded .stamp:after {
        opacity: .75;
        transform: rotate(-15deg) scale(1);
        z-index: -1;
    }

    .preface_block {
        position: relative;
        float: right;
        width: 25%;
        height: 60vh;
        top: 20vh;
        font-family: prologue_font, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: 80px;
    }

    .stamp {
        position: absolute;
        width: 150px;
        height: 150px;
        left: 10%;
        bottom: 30vh;
        opacity: 0;
    }

    .stamp img {
        width: 100%;
        height: 100%;
    }
</style>
