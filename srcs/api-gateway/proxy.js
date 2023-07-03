import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxyMiddleware = (movies_api_url) => {
    const proxyOptions = {
        target: movies_api_url,
        changeOrigin: true,
    };
    return createProxyMiddleware('/api/movies', proxyOptions);
};
