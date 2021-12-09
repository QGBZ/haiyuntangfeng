<template>
        <div class="back_top" :style="{top: scrollTop < 200 ? '-900' + 'px' : '-200' + 'px'}"  @click="backTop">
            <img src="./../assets/img/global/scroll.png" alt="">
        </div>
</template>

<script>
    export default {
        name: "backToTop",
        data() {
            return {
                scrollTop: 0,
            }
        },
        methods:{
            backTop () {
                let timer = setInterval(() => {
                    let speed = Math.floor(-this.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + speed
                    if (this.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            scrollToTop () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        created() {
            console.log('->>>>', window)
        }
    }
</script>

<style scoped>
.back_top{
    position: fixed;
    right: 0;
    top: -200px;
    transition: top .5s;
}
</style>
