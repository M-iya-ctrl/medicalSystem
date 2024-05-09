<template>
    <div class="home">
        <el-row>
            <!-- 左布局 -->
            <el-col class="left" :span="18">
                <!-- 搜索框 -->
                <Search></Search>
                <!-- 选择器 -->
                <Level></Level>
                <!-- 展示医院信息 -->
                <HospitalList></HospitalList>
            </el-col>
            <!-- 右布局 -->
            <el-col class="right" :span="6">
                <!-- 轮播图 -->
                <Carousel></Carousel>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from '@/pages/home/carousel/index.vue'
import Search from '@/pages/home/search/index.vue'
import Level from '@/pages/home/level/index.vue'
import HospitalList from '@/pages/home/hospitalList/index.vue'

</script>

<style lang="scss" scoped>
// 左列样式
.left {
    display: flex;
    flex-direction: column;
    align-items: center;

}
// 右列样式
.right {
    display: flex;
    flex-direction: column;
    align-items: start;

}
</style>