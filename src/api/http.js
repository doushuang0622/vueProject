require("es6-promise").polyfill()
import 'babel-polyfill' //es6的API转义
import axios from 'axios'
import QS from 'qs'
// import {
//   Toast
// } from 'vant'
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
  // axios.defaults.baseURL = 'https://commonp.cmfchina.com/commonweb'
} else if (process.env.NODE_ENV === 'debug') {
  console.log('debug')
  axios.defaults.baseURL = 'http://59.37.15.12:8089/commonweb'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.HOST
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params, isLogin) {
  if (isLogin) {
    axios.defaults.baseURL = '/bpi'
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} isLogin [是否是登陆页面是否需要换不同的请求http地址]
 */
export function post(url, params, isLogin) {
  if (isLogin) {
    axios.defaults.baseURL = '/bpi'
  }
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
