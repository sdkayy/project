export const IS_PROD = process.env.NODE_ENV === 'production';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production' && !process.env.ciEnvironment;
// In production the API is at the same URL, in development it's at a different port
export const API_URI = IS_PRODUCTION
  ? 'https://hasura.castingdepot.com/v1/graphql'
  : 'http://localhost:8080/v1/graphql';

export const WS_URI = IS_PRODUCTION
  ? `wss://hasura.castingdepot.com/v1/graphql`
  : 'ws://localhost:8080/v1/graphql';
