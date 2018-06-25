import axios from 'axios'

export default function (url: string, method: string, params: any, fn: (res: any) => void, errFn: (err: any) => void) {
  return axios({
    data: params,
    method,
    url
  }).then((res) => {
    if (res.status) {
      fn(res.data)
    } else {
      if (errFn) {
        errFn(res)
      } else {
        console.log(res)
      }
    }
  }, (error) => {
    if (errFn) {
      errFn(error)
    } else {
      console.log(error)
    }
  })
}