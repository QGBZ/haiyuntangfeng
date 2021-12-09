<template>
    <div class="home" @cdivck="stamp">
        <div id="scene" class="background">
            <div data-depth="0.2" class="background_style"></div>
            <div data-depth="0.8" class="moon"></div>
            <div data-depth="0.3" class="layer paint depth-30"></div>
            <div data-depth="0.4" class="layer plain depth-40"></div>
            <div data-depth="0.5" class="layer paint depth-50"></div>
            <div data-depth="0.6" class="layer plain depth-60"></div>
            <div data-depth="0.8" class="layer paint depth-70"></div>
            <div data-depth="1" class="layer plain depth-80"></div>
        </div>
        <div class="login">
            <img class="skip_block" src="./../../assets/img/stamp/luochuan.svg" alt="">
<!--                <div v-if="isStamp" class="skip_block" >登入</div>-->
<!--                <div v-else class="skip_block" @click="skip">跳過</div>-->
        </div>
        <div class="stamp" :style="{opacity: isStamp ? 1 : 0}"><img src="./../../assets/img/stamp/haitang.svg" alt=""></div>
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
                <div class="font_2_3 font_style" :class="{'font_anim':showFontIndex >= 7 }">任</div>
                <div class="font_2_4 font_style" :class="{'font_anim':showFontIndex >= 8 }">浮</div>
                <div class="font_2_5 font_style" :class="{'font_anim':showFontIndex >= 9 }">生</div>
            </div>
            <div class="preface_block block_3">
                <div class="font_3_1 font_style" :class="{'font_anim':showFontIndex >= 10 }">不</div>
                <div class="font_3_2 font_style" :class="{'font_anim':showFontIndex >= 11 }">見</div>
                <div class="font_3_3 font_style" :class="{'font_anim':showFontIndex >= 12 }">舊</div>
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
            },
            skip() {
                this.isStamp = true
                this.showFontIndex = 20
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
            console.log("%c ")
            console.log("%c ", "padding:50px 300px;line-height:120px;background:url('https://images.cnblogs.com/cnblogs_com/miluluyo/1493340/o_a.gif') no-repeat;");

        }
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/font/prologue.css";

    .home {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #000000;
        font-family: prologue_font, Avenir, Helvetica, Arial, sans-serif;
        overflow: hidden;
        user-select: none;
        -webkit-user-drag: none;
    }

    .background{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        left: 0;
        top: 0;
    }

    .background_style{
        position: absolute;
        width: 120%;
        height: 100%;
        overflow: hidden;
        left: -10% !important;
        top: -25% !important;
        background-image: url("./../../assets/img/background/background.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .moon{
        position: absolute;
        width: 10%;
        height: 10vw;
        overflow: hidden;
        left: 80%!important;
        top: 10% !important;
        background-image: url("./../../assets/img/background/sun.png");
        background-size: 100%;
        background-repeat: no-repeat;
        animation: moon 10s 0.1s infinite linear;
    }

    /*海浪*/

    .layer {
        position: absolute;
        height: 30vh;
        width: 200% !important;
        left: -50% !important;
        top: 70vh!important;
        padding: 0;
        margin: 0;
    }

    .layer img {
        width: 100%;
        height: 100%;
    }


    .wave {
        background: transparent repeat-x;
        position: absolute;
        width: 300%;
        left: -100%;
        bottom: 0;
    }
    .plain {
        background-image: url(../../assets/img/background/wave-plain.png); }
    .paint {
        background-image: url(../../assets/img/background/wave-paint.png); }



    .depth-30 {
        animation: wave 7.11111s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 10vh;
        top: 70vh!important;
    }

    .depth-40 {
        animation: wave 6.66667s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 12vh;
        top: 72.5vh!important;
        margin-left: 5%;
    }

    .depth-50 {
        animation: wave 6.22222s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 14vh;
        top: 75vh!important;
    }

    .depth-60 {
        animation: wave 5.77778s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 16vh;
        top: 77.5vh!important;
        margin-left: 5%;

    }
    .depth-70 {
        animation: wave 5.33333s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 18vh;
        top: 80vh!important;
    }
    .depth-80 {
        animation: wave 4.88889s 0.1s infinite linear;
        background-position: center bottom;
        background-size: auto 101%;
        height: 20vh;
        top: 82.5vh!important;
        margin-left: 5%;
    }


    @keyframes wave {
        0% {
            -webkit-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
            -moz-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
            transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg); }
        100% {
            -webkit-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
            -moz-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
            transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg); }
    }

    @keyframes moon {
        0% {
            transform: rotateZ(0deg) translate3d(0,5%,0) rotateZ(0deg); }
        100% {
            transform: rotateZ(-360deg) translate3d(0,5%,0) rotateZ(360deg); }
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
        -moz-osx-font-smoothing: grayscale;
        font-size: 80px;
    }

    .stamp {
        position: absolute;
        width: 150px;
        height: 150px;
        left: 7.5%;
        top: 55vh;
        opacity: 0;
        transition: opacity 2s;
    }

    .stamp img {
        width: 100%;
        height: 100%;
    }

    .font_style{
        opacity: 0;
        text-align: center;
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

    /*登入*/
    .login{
        position: absolute;
        left: 5%;
        top: 4vh;
        /*width: 200px;*/
        /*height: 70px;*/
        /*background-image: url("./../../assets/img/background/background_login.png");*/
        /*background-repeat: no-repeat;*/
        /*background-size: 100%;*/
    }

    .login_block, .skip_block{
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 70px;
        color: white;
        font-weight: bold;
        font-size: 36px;
        cursor: pointer;
    }

    /*.login_block{*/
    /*    opacity: 0;*/
    /*    transition: opacity 1s;*/
    /*}*/



    @media screen and (max-width: 700px) {
        .home{
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
        }
    }
</style>
