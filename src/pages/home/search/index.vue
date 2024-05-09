<template>
    <div class="search-box">
        <!-- <el-input class="search-input" placeholder="请输入您要搜索的内容" /> -->
        <el-autocomplete class="search-input" placeholder="请输入您要搜索的内容" />
        <el-button class="search-btn" type="primary">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { } from 'vue'
</script>

<style lang="scss" scoped>
.search-box {
    margin: 36px 0;
    display: flex;

    :deep() {
        .search-input {
            width: 500px;
            height: 38px;
            border: 2px solid $primary-color;
            border-right: none;
            overflow: hidden;
            border-radius: 10px 0 0 10px;
    
            .el-input__wrapper {
                box-shadow: none !important;
            }
            input {
                outline: none;
            }       
        }
    }

    .search-btn {
        height: 38px;
        background-color: $primary-color;
        border-radius: 0 10px 10px 0;
    }
}
</style>