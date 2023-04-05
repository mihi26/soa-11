import { AxiosRequestConfig } from 'axios'

export default class Http {
  axios: any
  getCredential: any
  constructor(axios: any, getCredential: any) {
    this.axios = axios
    this.getCredential = getCredential
  }
  request(config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.request(config)
  }
  get(url: string, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.get(url, config)
  }
  post(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.post(url, data, config)
  }
  put(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.put(url, data, config)
  }
  patch(url: string, data?: any, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.patch(url, data, config)
  }
  delete(url: string, config?: AxiosRequestConfig) {
    config = this.getCredential(config)
    return this.axios.delete(url, config)
  }
}