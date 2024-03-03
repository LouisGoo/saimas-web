// const { request } = require("@/utils");
import { request } from "@/utils"

export function loginAPI(formData){
    return request({
        url:'/m2/4037335-0-default/148591070',
        method:"POST",
        data:formData
    })
}

export function getProfileAPI(){
    return request({
        url:'/m2/4037335-0-default/148590801',
        method:'GET'
    })
}