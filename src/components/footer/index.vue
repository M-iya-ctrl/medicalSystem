<template>
    <div class="footer">
        <div class="left">
            <div class="footer-item">京ICP备 130709173241</div>
            <div class="footer-item">电话固话 028-88524524</div>
        </div>
        <div class="right">
            <div class="footer-item">联系我们</div>
            <div class="footer-item">合作伙伴</div>
            <div class="footer-item">用户协议</div>
            <div class="footer-item">隐私协议</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 50px;
    color: $secondary-color;
    background-color: $primary-background-color;
    .left, .right {
        display: flex;
        .footer-item {
            margin-right: 6px;
        }
    }
}
</style>