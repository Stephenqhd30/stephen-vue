/* eslint-disable */
// @ts-ignore
import request from '../request.ts';
import * as API from './types';

/** check GET /api/ */
export async function checkUsingGet(
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.checkUsingGETParams,
  options?: { [key: string]: unknown }
) {
  return request<string>('/api/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receiveMessage POST /api/ */
export async function receiveMessageUsingPost(options?: {
  [key: string]: unknown;
}) {
  return request<unknown>('/api/', {
    method: 'POST',
    ...(options || {}),
  });
}

/** setMenu GET /api/setMenu */
export async function setMenuUsingGet(options?: { [key: string]: unknown }) {
  return request<string>('/api/setMenu', {
    method: 'GET',
    ...(options || {}),
  });
}
