<template>
    <div class="card-container">
        <el-card class="card" shadow="hover">
            <div class="left">
                <p class="card-title">{{hospitalInfo.hosname}}</p>
                <div class="card-info-box">
                    <div class="card-info-item">
                        <el-icon><GoldMedal /></el-icon>
                        <p>{{hospitalInfo.param.hostypeString}}</p>
                    </div>
                    <div class="card-info-item">
                        <el-icon><Timer /></el-icon>
                        <p>{{hospitalInfo.bookingRule.releaseTime}}开启预约</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { Timer, GoldMedal } from '@element-plus/icons-vue'
import {} from 'vue'

defineProps(['hospitalInfo'])

</script>

<style lang="scss" scoped>
.card {
    width: 380px;
    margin: 20px;
    cursor: pointer;
    :deep(){
        .el-card__body {
            display: flex;
            justify-content: space-between;
        }
    }
    .el-card__body {
        .left {
            width: 200px;
            .card-title {
                line-height: 30px;
            }
            .card-info-box {
                display: flex;
                color: $secondary-color;
                font-size: 12px;
                margin-top: 16px;
                display: flex;
                justify-content: space-between;
                .card-info-item {
                    display: flex;
                    align-items: center;
                    p {
                        margin-left: 2px;
                    }
                }
            }
        }
        .right {
            width: 60px;
            height: 60px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>