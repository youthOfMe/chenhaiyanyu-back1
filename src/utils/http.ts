import service from './service'
//封装get post请求
export function get(url: any, params: any) {
  const config = {
    method: 'get',
    url,
    params,
  }
  return service(config)
}

export function post(url: any, params: any) {
  const config = {
    method: 'post',
    url,
    data: params,
  }
  return service(config)
}
