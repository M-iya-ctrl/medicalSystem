<template>
  <div class="medical-system-container">
    <!-- 顶部 -->
    <Header>

    </Header>
    <!-- 中间区域 -->
    <div class="main">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <Footer>

    </Footer>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="scss" scoped>
.medical-system-container {
  display: flex;
  flex-direction: column;
  .main {
    margin-top: $header-height;
  }
}
</style>