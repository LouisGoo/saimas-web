// const { request } = require("@/utils");
import { request } from "@/utils"

let myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

export function loginAPI(formData){
    return request({
        url:'/148591070',
        method:"POST",
        data:formData
    })
}

export function registAPI(formData){
    return request({
        url:'/user/register',
        method:"POST",
        data:formData
    })
}
 

export function getProfileAPI(){
    return request({
        url:'/user/',
        method:'GET'
    })
}