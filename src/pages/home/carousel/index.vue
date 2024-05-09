<template>
    <div class="carousel-container">
        <el-carousel class="carousel">
            <el-carousel-item v-for="item in 4" :key="item">
                <img class="carousel-image" src="@/assets/imgs/carousel.jpg" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { } from 'vue'
</script>

<style lang="scss" scoped>
.carousel {
    width: 360px;
    height: 200px;
    overflow: hidden;
    margin: 36px 0;

    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>