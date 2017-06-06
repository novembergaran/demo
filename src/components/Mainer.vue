<template>
  <div id="Mainer" class="main">
                <!-- 放大图片 -->
        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
    <div class="picbox">
      <img src="./../assets/zhuye/1.jpg" @click="clickImg($event)">
      </div>
    <div class="picbox">
      <img src="./../assets/zhuye/2.jpg" @click="clickImg($event)">
      </div>
    <div class="picbox">
      <img src="./../assets/zhuye/3.jpg" @click="clickImg($event)">
      </div>
    <div class="picbox">
      <img src="./../assets/zhuye/4.jpg" @click="clickImg($event)">
      </div>
    <div class="picbox">
      <img src="./../assets/zhuye/5.jpg" @click="clickImg($event)">
      </div>
    <div class="picbox">
      <img src="./../assets/zhuye/6.jpg" @click="clickImg($event)">
      </div>
      <div style="clear:both"></div>
  </div>
</template>
 
<script type="text/javascript">
import BigImg from './fade.vue';
    export default {
        data() {
            return {        
                showImg:false,
                imgSrc: ''
            }
        },
        components: {
            'big-img':BigImg
        },
        methods: {
            clickImg(e) {
                this.showImg = true;
                // 获取当前图片地址
                this.imgSrc = e.currentTarget.src;
            },
            viewImg(){
                this.showImg = false;
            },
        }
    }
</script>
 
<style>
  .main{
    text-align:center;
    margin:0 auto;
    max-width:100%;
    height:80%;
  }
  .picbox{
    margin-left:2.5%;
    margin-right:2.5%;
    margin-top:2.5%;
    float:left;
    backgroudn:red;
    max-width:45%;
    height:auto;

    
  }
  .picbox img{
    width:100%;
    box-shadow: 3px 5px 10px #888888;
  }
</style>