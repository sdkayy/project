import cookie from 'js-cookie';

export const buildHeaders = (headers?: any) => {
  const anonHeaders = {
    headers: {
      'x-hasura-default-role': 'anonymous',
      'x-hasura-user-id': '00000000-0000-0000-0000-000000000000',
      'Content-Type': 'application/json',
    },
    ...headers,
  };

  // Client-Side Header Builder
  if (typeof window !== 'undefined') {
    if (typeof document !== 'undefined' && cookie.get('token')) {
      return {
        headers: {
          authorization: `Bearer ${cookie.get('token')}`,
          'Content-Type': 'application/json',
        },
      };
    } else {
      return anonHeaders;
    }
  } else {
    // Server-Side Header Builder
    if (headers && typeof headers.cookie !== 'undefined') {
      const cooked: any = parseCookies(headers);
      return cooked.token
        ? {
            headers: {
              authorization: `Bearer ${cooked.token}`,
              'Content-Type': 'application/json',
            },
          }
        : anonHeaders;
    } else {
      return anonHeaders;
    }
  }
};

function parseCookies(headers?: any) {
  const list = {};
  if (headers) {
    const rc = headers.cookie;

    // tslint:disable-next-line: no-unused-expression
    rc &&
      rc.split(';').forEach((cookie) => {
        const parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
      });
  }

  return list;
}
