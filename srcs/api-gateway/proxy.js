import { createProxyMiddleware } from 'http-proxy-middleware';

export const proxyMiddleware = (api_url) => {
    const proxyOptions = {
        target: api_url,
        changeOrigin: true,
    };
    return createProxyMiddleware(proxyOptions);
};
