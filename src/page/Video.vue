<template>
    <div>
    <div class="vbox">
        <div class="v">
            </div>
            <span class="vt">小米MAX 2超耐久直播第二季-第15天</span>
        </div>
    <div class="vbox">
        2
        </div>
    <div class="vbox">
        3
        </div>
    <div class="vbox">
        4
        </div>
    <div class="vbox">
        5
        </div>
    <div class="vbox">
        6
        </div>
    <div class="vbox">
        7
        </div>
    <div class="vbox">
        8
        </div>
    </div>
</template>
<script>
    export default {
        props: ['value']
    }
</script>
<style>
    .vbox {
        display: block;
        width:45%;
        float: left;
        margin-left:2.5%;
        margin-right:2.5%;
        margin-top:2.5%;
        background-color: red;
        margin-bottom: 1%;
        height: 8rem;
    }
    .v {
        display: block;
        background-color: pink;
        width:100%;
        height:73%;
        margin:0 auto;     
    }
    .vt {
        display: block;
        width:100%;
        height:27%;        
        font-size: 10px;
    }
</style>