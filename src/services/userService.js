import axios from "../axios"

export const handleLoginPage=(email,password)=>{
    return axios.post('/api/login',{email,password})
}