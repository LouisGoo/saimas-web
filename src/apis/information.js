import { request } from "@/utils";

export function getOverseaListAPI(formData){
    return request({
        url:"/148591994",
        method:"GET",
        data:formData
    })
}