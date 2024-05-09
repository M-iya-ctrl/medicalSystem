// 首页模块接口
import request from '@/utils/request'
import { ResponseHospitalData } from './type'

enum API {
    HOSPITAL_URL = "/hosp/hospital"
}

export const reqHospitalList: any = (page: number, limit: number) => request.get<any, ResponseHospitalData>(API.HOSPITAL_URL + `/${page}/${limit}`)
