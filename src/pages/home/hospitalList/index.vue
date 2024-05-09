<template>
    <div class="hospital-list">
        <!-- 医院卡片 -->
        <div class="hospital-card-list">
            <Card v-for="item in hospitalArr" :key="item.id" :hospitalInfo="item">
            </Card>
        </div>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" class="pagination" background
            layout="prev, pager, next,->, sizes, total" :total="total" @size-change="handlePageSizeChange"
            @current-change="handlePageCurrentChange" :page-sizes="[6, 12, 18, 24]" />
    </div>
</template>

<script setup lang="ts">
import Card from '@/pages/home/hospitalList/card/index.vue'
import { reqHospitalList } from '@/api/home/index.ts'
import { Hospital, ResponseHospitalData } from '@/api/home/type.ts'
import { onMounted, ref } from 'vue'

// 初始化数据
let hospitalArr = ref<Hospital[]>([])  // 医院列表
let currentPage = ref<number>(1)       // 当前页
let pageSize = ref<number>(6)          // 每页数据数量
let total = ref<number>(0)             // 总计

// 挂载获取数据
onMounted(() => {
    getHospitalList()
})

// 获取医院列表信息函数
const getHospitalList = async () => {
    let result: ResponseHospitalData = await reqHospitalList(currentPage.value, pageSize.value)

    if (result.code == 200) {
        hospitalArr.value = result.data.content
        total.value = result.data.totalElements
    }
}

// 处理更改当前页函数
const handlePageCurrentChange = () => {
    getHospitalList()
}
// 处理更改一页数据量函数
const handlePageSizeChange = () => {
    getHospitalList()
}

</script>

<style lang="scss" scoped>
.hospital-list {
    .hospital-card-list {
        width: 900px;
        display: flex;
        flex-wrap: wrap;
    }

    .pagination {
        margin: 20px 0;
    }
}
</style>