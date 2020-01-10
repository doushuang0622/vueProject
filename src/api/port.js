/**
 * api接口统一管理
 */
import { get } from './http'
// 高端理财
export function high(params) {
  return get('/highFund/highFundRedesignList', params)
}
// 登陆界面
export function login(params) {
  return get('/user/login', params, true)
}
