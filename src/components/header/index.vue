<template>
    <div class="header">
        <div class="left">
            <h1>医疗系统-预约挂号平台</h1>
        </div>
        <div class="right">
            <div class="header-item">帮助中心</div>
            <div class="header-item">登录/注册</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: $header-height;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $primary-background-color;
    box-shadow: 5px 5px 20px $primary-background-color;
    position: fixed;
    z-index: 1;
    top: 0;
    background-color: #fff;
    .left {
        h1 {
            font-size: 30px;
            color: $primary-color;
        }
    }
    .right {
        display: flex;
        .header-item {
            margin-left: 30px;
        }
    }
}
</style>