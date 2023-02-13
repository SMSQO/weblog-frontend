import axios, { type AxiosInstance } from "axios"

// 所有和网络访问的代码都放在这里

const blogApi: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: "/api"
})

type Method = "GET" | "POST" | "PATCH" | "DELETE"

// '@/api'下的所有接口都应该调用这个. 如何使用'@/api/blogger.ts'
export const Api = function<T>(method: Method, url: string, data?: any, params?: any): Promise<T> {
  return blogApi.request({
    url: url,
    method: method,
    data: data,
    params: params
  })
  .then(e => {
    const data = e.data
    switch (data.code) {
      case 0:
        return data.content
      default:  // case 1, 2, 3, 4, 5, ...?
        console.warn(`COMMON ERROR: ${data.reason}`)
        // throw Error("COMMON ERROR")
        // TODO write something here.
        // What else to do if an error happen?
    }
  })
  .catch(e => console.error(e)) // other problems. What if network error? 
}