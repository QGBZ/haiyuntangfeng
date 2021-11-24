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
                <div class="font_1_1 font_style" :class="{'font_anim':showFontIndex >= 0 }">十</div>
                <div class="font_1_2 font_style" :class="{'font_anim':showFontIndex >= 1 }">年</div>
                <div class="font_1_3 font_style" :class="{'font_anim':showFontIndex >= 2 }">如</div>
                <div class="font_1_4 font_style" :class="{'font_anim':showFontIndex >= 3 }">一</div>
                <div class="font_1_5 font_style" :class="{'font_anim':showFontIndex >= 4 }">夢</div>
            </div>
            <div class="preface_block block_2">
                <div class="font_2_1 font_style" :class="{'font_anim':showFontIndex >= 5 }">滄</div>
                <div class="font_2_2 font_style" :class="{'font_anim':showFontIndex >= 6 }">海</div>
                <div class="font_2_3 font_style" :class="{'font_anim':showFontIndex >= 7 }">曠</div>
                <div class="font_2_4 font_style" :class="{'font_anim':showFontIndex >= 8 }">浮</div>
                <div class="font_2_5 font_style" :class="{'font_anim':showFontIndex >= 9 }">生</div>
            </div>
            <div class="preface_block block_3">
                <div class="font_3_1 font_style" :class="{'font_anim':showFontIndex >= 10 }">不</div>
                <div class="font_3_2 font_style" :class="{'font_anim':showFontIndex >= 11 }">知</div>
                <div class="font_3_3 font_style" :class="{'font_anim':showFontIndex >= 12 }">海</div>
                <div class="font_3_4 font_style" :class="{'font_anim':showFontIndex >= 13 }">棠</div>
                <div class="font_3_5 font_style" :class="{'font_anim':showFontIndex >= 14 }">處</div>
            </div>
            <div class="preface_block block_4">
                <div class="font_4_1 font_style" :class="{'font_anim':showFontIndex >= 15 }">風</div>
                <div class="font_4_2 font_style" :class="{'font_anim':showFontIndex >= 16 }">雪</div>
                <div class="font_4_3 font_style" :class="{'font_anim':showFontIndex >= 17 }">二</div>
                <div class="font_4_4 font_style" :class="{'font_anim':showFontIndex >= 18 }">三</div>
                <div class="font_4_5 font_style" :class="{'font_anim':showFontIndex >= 19 }">更</div>
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
                isStamp: false,
                showFontIndex: 0
            }
        },
        methods: {
            stamp() {
                if (this.isStamp) {
                    console.log('到时间了可以触发了')
                }
            }
        },
        mounted() {
            const scene = document.getElementById("scene");
            const parallaxInstance = new Parallax(scene);
        },
        created() {

                setInterval(() => {
                    if (this.showFontIndex  < 20) {
                        this.showFontIndex += 1;
                    } else {
                        this.isStamp = true
                    }
                },300)

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
        transition: opacity 2s;
    }

    .stamp img {
        width: 100%;
        height: 100%;
    }

    .font_style{
        opacity: 0;
    }

    .font_anim{
        animation: show 1s;
        animation-fill-mode: forwards;
        transition: opacity 1s initial;
    }
    @keyframes show {
        from {opacity: 0}
        to  {opacity: 1}
    }
</style>
