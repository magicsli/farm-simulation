import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'

// import { isCacheUrl, serviceCache } from './serviceCache'

import { RESPONSE_CODE } from './code'

// 让url字段必填
type HttpConfig = AxiosRequestConfig & Required<Pick<AxiosRequestConfig, 'url'>>

type HttpConfigGet = Omit<HttpConfig, 'data'>
type HttpConfigPost = Omit<HttpConfig, 'params'>
type Response<T> = {
  code: RESPONSE_CODE
  data: T
}

const baseConfig: AxiosRequestConfig = {
  // timeout: 2500,
  responseType: 'json'
}

const sendRequest: any = {}

// const domain = Domain.test

// TODO: 临时使用
const WINDER_TOKEN =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTY1NzQ2MTMsImlhdCI6MTYxNDE1NDY2MiwiaXNzIjoiKi5mbHllbGUubmV0IiwiVXNlcklEIjoiNTQyMzkyNDc4ODU5NTM3IiwiVG9rZW4iOiIiLCJQbGF0Zm9ybSI6IndlY2hhdCIsIkNsaWVudFZlcnNpb24iOiJ3ZWNoYXQtbXAgMC45LjgifQ._3dxKqu1AyMkTBLNLzCHmwbdaov_cPO4TA6bXTebr5M'
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTYwMzUwODcsImlhdCI6MTYxMzYxMjE1OSwiaXNzIjoiKi5mbHllbGUubmV0IiwiVXNlcklEIjoiNTUxNDQwODMxNDgwMDE3IiwiVG9rZW4iOiIiLCJQbGF0Zm9ybSI6IndlY2hhdCIsIkNsaWVudFZlcnNpb24iOiJ3ZWNoYXQtbXAgMS4wLjAifQ.OG37q_a-cNZOUJV3IdD4pfgeGcQAuQa3UUMfpsemp-M'
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTYwMzc5NDgsImlhdCI6MTYxMzYxNDc3MiwiaXNzIjoiKi5mbHllbGUubmV0IiwiVXNlcklEIjoiNTQyMzk1MTYxMTE2ODgxIiwiVG9rZW4iOiIiLCJQbGF0Zm9ybSI6IndlY2hhdCIsIkNsaWVudFZlcnNpb24iOiJ3ZWNoYXQtbXAgMS4wLjAifQ.Z1pwcoQwleOkXAonz5-FHyn_QL9_QFUJb-AJT3V9Wn0'
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTYwMzUzNDIsImlhdCI6MTYxMzYxNDc0NywiaXNzIjoiKi5mbHllbGUubmV0IiwiVXNlcklEIjoiNTQyNjc5NTU3OTk2ODE3IiwiVG9rZW4iOiIiLCJQbGF0Zm9ybSI6IndlY2hhdCIsIkNsaWVudFZlcnNpb24iOiJ3ZWNoYXQtbXAgMC45LjgifQ.Kv0zPYC3aS6OMlD8YD1dGOFKz2hXCakvdQX5IqQugjk'

const cacheUrlData: { [k: string]: any } = {}

/**
 * 判断此函数是否可以请求
 * @param requestKey 请求的参数集合
 * @returns 是否可以请求
 */
function shouldRequest(requestKey: string) {
  if (sendRequest[requestKey]) {
    // throw new Error(`request exist: ${requestKey}`)
    return false
  }
  sendRequest[requestKey] = 1
  setTimeout(() => {
    delete sendRequest[requestKey]
  }, 1000)

  setTimeout(() => {
    delete cacheUrlData[requestKey]
  }, 2000)

  return true
}

class Http {
  host = 'https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test'

  protected http: AxiosInstance

  constructor(host?: string) {
    // const { host, version } = params

    this.host = host ?? this.host

    this.http = axios.create(baseConfig)

    this.http.interceptors.response.use(
      (res: AxiosResponse) => {
        return this.receive(res)
      },
      async err => {
        this.onRejectedIntercept(err)
        return Promise.reject(err)
      }
    )
    this.http.interceptors.request.use((req: AxiosRequestConfig) => {
      return this.beforeSend(req)
    })
  }

  checkOnline() {
    return navigator.onLine
  }

  protected onRejectedIntercept(err: any) {
    try {
      const {
        response: { status }
      } = err

      switch (status) {
        default:
          break
      }
    } catch (e) {
      return err
    }
    return err
  }

  /**
   * 发起请求前的拦截器，可被子类重写
   * @param request 请求配置
   */
  private beforeSend(request: AxiosRequestConfig) {
    // sign url
    // if (request.url) {
    //   const query = request.params ? `?${qs.stringify(request.params)}` : ''

    //   request.url = signUrl(`${request.url}${query}`)
    // }

    // delete request.params

    // request.headers.Authorization = store.get(USER_TOKEN)
    // request.headers.Authorization =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjA4NzgxNDcsImlhdCI6MTYxODQ1MTc5MywiaXNzIjoiKi5mbHllbGUubmV0IiwiVXNlcklEIjoiNjY3MzQwMjc5MTE5OTU1IiwiVG9rZW4iOiIiLCJQbGF0Zm9ybSI6InBjIiwiQ2xpZW50VmVyc2lvbiI6IjAuMS4wIn0.MFCNkSGsOY3aiUh2DZJVrl7s-Fzq0I7V1nxZYlE4VZ8'
    return request
  }

  private receive(response: AxiosResponse) {
    return response
  }

  protected resFilter<T>(p: AxiosPromise): Promise<Response<T>> {
    return new Promise<Response<T>>((resolve, reject) => {
      p.then(res => {
        if (res.data.code === RESPONSE_CODE.success) {
          resolve(res.data)
        }
        reject(res.data)
      }).catch(err => {
        reject(err.response)
      })
    })
  }

  protected async get<T extends Response<T>>(config: HttpConfigGet): Promise<T> {
    const { url, params } = config

    if (params) {
      delete params._forceUpdate
    }

    const requestKey = `GET${url}${JSON.stringify(params)}`

    if (!shouldRequest(requestKey)) {
      const res = (await new Promise((resolve, reject) => {
        let count = 0
        const i = setInterval(() => {
          count++
          if (cacheUrlData[requestKey]) {
            clearInterval(i)
            resolve(cacheUrlData[requestKey])
            return
          }
          if (count > 40) {
            clearInterval(i)
            console.error('request repeated error:', requestKey)
            reject(Error('request repeated error'))
          }
        }, 50)
      })) as T

      console.log('请求的过于频繁， 当前使用接口缓存的数据', res)

      return res
    }

    cacheUrlData[requestKey] = false

    const res = (await this.http.get<T>(`${this.host}${config.url}`, config)).data

    cacheUrlData[requestKey] = res


    return res
  }

  protected post<T>(config: HttpConfigPost): AxiosPromise<T> {
    const { url, data } = config

    const requestKey = `POST${url}${JSON.stringify(data)}`

    // post请求默认为数据提交。 不允许重复请求，
    if (!shouldRequest(requestKey)) {
      console.error('post request repeat', requestKey)
      return Promise.reject(new Error('post request repeat'))
    }

    const res = this.http.post(`${this.host}${config.url}`, config.data, config)

    return res
  }

  protected put(config: HttpConfigPost): AxiosPromise {
    return this.http.put(`${this.host}${config.url}`, config.data)
  }

  protected patch(config: HttpConfigPost): AxiosPromise {
    return this.http.patch(`${this.host}${config.url}`, config.data)
  }

  protected delete(config: HttpConfigGet): AxiosPromise {
    return this.http.delete(`${this.host}${config.url}`)
  }
}

export default Http
export { WINDER_TOKEN }
