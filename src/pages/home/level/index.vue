<template>
    <div class="level">
        <h2>医院</h2>
        <div class="level-box">
            <h3>等级：</h3>
            <ul class="level-list">
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级乙等</li>
            </ul>
        </div>
        <div class="level-box">
            <h3>地区：</h3>
            <ul class="level-list">
                <li class="active">全部</li>
                <li v-for="item in 20">怀柔区</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="scss" scoped>
.level {
    width: 1000px;
    color: $secondary-color;
    h2 {
        font-size: 20px;
        line-height: 30px;
    }
    .level-box {
        display: flex;
        line-height: 38px;
        margin: 16px 0;
        h3 {
            font-weight: 600;
            margin-right: 20px;
            white-space: nowrap;
        }
        .level-list {
            display: flex;
            flex-wrap: wrap;
            li {
                margin-right: 16px;
                &:hover {
                    color: $primary-color;
                    cursor: pointer;
                }
                &.active {
                    color: $primary-color;
                }
            }
        }
    }
}
</style>