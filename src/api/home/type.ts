// 响应数据接口
interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

// 医院信息接口
export interface Hospital {
    id: string,
    createTime: string,
    updateTime: string,
    isDeleted: number,
    param: {
        hostypeString: string,
        fullAddress: string
    },
    hoscode: string,
    hosname: string,
    hostype: string,
    provinceCode: string,
    cityCode: string,
    districtCode: string,
    address: string,
    logoData: string,
    intro: any,
    route: string,
    status: number,
    bookingRule: {
        cycle: number,
        releaseTime: string,
        stopTime: string,
        quitDay: number,
        quitTime: string,
        rule: string[]
    }
}

// 排序接口
interface Sort {
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}
// 响应医院列表信息接口
export interface ResponseHospitalData extends ResponseData {
    data: {
        content: Hospital[],
        numberOfElements: number,
        size: number,
        number: number,
        empty: boolean,
        totalPages: number,
        totalElements: number,
        last: boolean,
        first: boolean,
        sort: Sort,
        pageable: {
            sort: Sort,
            pageNumber: number,
            pageSize: number,
            offset: number,
            paged: boolean,
            unpaged: boolean
        }
    }
}