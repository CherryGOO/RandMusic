import axios from 'axios'

const service = axios.create({
  baseURL: '/res',
  timeout: 10000
})

export {
  service
}
