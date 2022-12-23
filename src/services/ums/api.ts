// @ts-ignore
/* eslint-disable */
import {request} from "umi";

/** 认证接口: /oauth/token */
export async function token(body: UMS.LoginParams, options?: { [key: string]: any }) {
  return request<UMS.LoginResult>('/oauth/token', {
    method: 'POST',
    params: body,
    ...(options || {})
  })
}

/** 获取当前用户 */
export async function current(options?: { [key: string]: any }) {
  return request<UMS.CurrentUser>('/oauth/current', {
    headers: {
      'Authorization': 'Bearer access_token'
    },
    ...(options || {})
  })
}
