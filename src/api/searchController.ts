/* eslint-disable */
// @ts-ignore
import request from '../request.ts';
import * as API from './types';

/** doSearchAll POST /api/es/all */
export async function doSearchAllUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: unknown }
) {
  return request<API.BaseResponseSearchVOObject_>('/api/es/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** searchPostVOByPage POST /api/es/search/post/page/vo */
export async function searchPostVoByPageUsingPost(
  body: API.PostQueryRequest,
  options?: { [key: string]: unknown }
) {
  return request<API.BaseResponsePagePostVO_>('/api/es/search/post/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** searchUserVOByPage POST /api/es/search/user/page/vo */
export async function searchUserVoByPageUsingPost(
  body: API.UserQueryRequest,
  options?: { [key: string]: unknown }
) {
  return request<API.BaseResponsePageUserVO_>('/api/es/search/user/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
