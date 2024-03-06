import { request } from "@/utils";

export function getSchoolListAPI(formData){
    return request({
        url:"/152074765",
        method:"GET",
        data:formData
    })
}