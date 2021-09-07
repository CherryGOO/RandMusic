import { service } from '../request'

export function getInfo (data) {
  return service({
    url: '/api/rand.music',
    method: 'get',
    params: data
  })
}
