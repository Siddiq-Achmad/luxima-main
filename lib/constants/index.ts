export * from './category'
export * from './tags'


export const isProduction = process.env.NODE_ENV === 'production';
export const baseUrl =
  !isProduction || !process.env.NEXT_PUBLIC_APP_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.NEXT_PUBLIC_APP_URL}`);