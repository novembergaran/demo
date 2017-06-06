<template>
<div id="Foooter" class="foooter">
        <tabbar>
      <tabbar-item class="tabbar">
        <img class="icon" src="../assets/Home.png">
        <p class="label">Home</p>
      </tabbar-item>
      <tabbar-item class="tabbar">
        <img class="icon" src="../assets/Music.png">
        <p class="label">Music</p>
      </tabbar-item>
      <tabbar-item class="tabbar" @click="goToRouter">
        <img class="icon" src="../assets/TV.png">
        <p class="label">Video</p>
      </tabbar-item>
    </tabbar>
    </div>
</template>
<script>
    export default{
        props: {
            id:{
                type:String
            },
            isRouter:{
                type:Boolean,
                default:false
            }
        },
        computed: {
           isActive(){
               if(this.$parent.value===this.id){
                   return true;
               }
           }
        },
        methods:{
            goToRouter(){
                this.$parent.$emit('input',this.id)
                        //判断是否为路由跳转
                if(this.isRouter){
                                //根据id跳转到对应的路由页面
                    this.$router.push(this.id)
                }
            }
        }
    }
</script>
<style>
.tabbar{
  text-align: center;
  float: left;
  display: block;
  background-color: pink;
  width:33.3333%;
  height:100%;
}
.foooter{
  display: block;
  position: fixed;
  bottom:0px;
  left:0px;
  height:7%;
  width:100%;
  background-color: #66ccff;
}
.icon{
  width:20px;
  margin-top:5px;
}
.label{
  font-size: 20px;
  margin-top:0px; 
}
</style>
