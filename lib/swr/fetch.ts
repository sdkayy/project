import { API_URI } from '../constants';
import { buildHeaders } from '../buildHeaders';

const _fetch = async (args) => {
  const headers = buildHeaders(args[1]);
  const isGet = typeof args[0] === 'string';

  const res = await fetch(isGet ? args[0] : API_URI, {
    ...headers,
    credentials: 'include',
    method: isGet ? 'GET' : 'POST',
    ...(!isGet && { body: JSON.stringify(args[0]) }),
  });

  const resJson = await res.json();

  if (resJson.errors) {
    throw JSON.stringify(resJson.errors);
  }

  return resJson.data;
};

export const fetcher = async (...args) => {
  return await _fetch(args);
};
