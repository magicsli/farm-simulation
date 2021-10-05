import Service from './service'

type TestResult = {
  code: number
  data: any
}

class Test extends Service {
  // constructor() {
  // 	super();
  // }
  /**
   *
   * @param count 请求的count参数
   * @returns 请求结果
   */
  getTestData(count: string | number) {
    return this.get<TestResult>({
      url: '/activities/publish/limit',
      params: {
        count
      }
    })
  }
}

export default new Test()
