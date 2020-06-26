import { mutate } from 'swr';
import { buildHeaders } from '../buildHeaders';
import { WS_URI } from '../constants';

let latestData = null;

export const subscribe = async (...args) => {
  if (typeof window !== 'undefined') {
    const headers = buildHeaders();
    const ws = new WebSocket(WS_URI, 'graphql-ws');

    const initMsg = {
      type: 'connection_init',
      payload: { ...headers },
    };

    ws.onopen = (event) => {
      ws.send(JSON.stringify(initMsg));
      const msg = {
        id: '1',
        type: 'start',
        payload: { variables: args[2], extensions: {}, operationName: null, query: args[1] },
      };
      ws.send(JSON.stringify(msg));
    };
    ws.onmessage = (data) => {
      const finalData = JSON.parse(data.data);

      if (finalData.type === 'data') {
        latestData = finalData.payload.data;
        mutate(args[0], latestData, false);

        return latestData;
      }
    };
  }
};
