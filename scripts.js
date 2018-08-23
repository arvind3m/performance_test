import {check} from 'k6'
import http from 'k6/http'

const serviceUrl = 'http://localhost:9003/api'

export default function () {
  const response = http.get(serviceUrl)
  check(response, {
    'Status is 200': (r) => r.status === 200
  })
}
