import axios from 'axios'

export const $http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

export default function (url, methods = {}) {
  function search (params, config) {
    return $http(Object.assign({
      url,
      method: 'get',
      params
    }, config))
  }

  function getById (id, config) {
    return $http(Object.assign({
      url: `${url}/${id}`,
      method: 'get'
    }, config))
  }

  function deleteById (id, config) {
    return $http(Object.assign({
      url: `${url}/${id}`,
      method: 'delete'
    }, config))
  }

  function saveOrUpdate (data, config) {
    return $http(Object.assign({
      url,
      method: 'post',
      data
    }, config))
  }

  return {
    search,
    getById,
    deleteById,
    saveOrUpdate,
    ...methods
  }
}
