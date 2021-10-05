// 响应data中的状态码
export enum RESPONSE_CODE {
  success = 0 // 成功响应
}

// 相应的状态码
export enum HTTP_CODE {
  success = 200, // 成功响应
  resetLogin = 401 // 登录过期/token失效， 重新登录
}
