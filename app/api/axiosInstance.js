import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://43.200.112.139:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosInstance
