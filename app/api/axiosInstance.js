import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://43.200.112.139:8080/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // 모든 도메인 허용
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // 허용할 HTTP 메서드
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // 허용할 HTTP 헤더
  },
  withCredentials: true, // 쿠키나 인증 정보를 포함하기 위해
});

export default axiosInstance;
