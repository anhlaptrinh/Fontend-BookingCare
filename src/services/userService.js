import axios from "../axios"

export const handleLoginPage=(email,password)=>{
    return axios.post('/api/login',{email,password})
}

export const getAllUser=(inputId)=>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
}