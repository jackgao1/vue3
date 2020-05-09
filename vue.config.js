module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:1237/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
} 