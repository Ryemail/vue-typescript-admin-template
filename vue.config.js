module.exports = {
    publicPath: '/',
    devServer: {
        open: true,
    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false,
        },
    },
    productionSourceMap: false,
    css: {
        loaderOptions: {},
    },
    chainWebpack: config => {
        if (process.env.use_analyzer) {
            config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
    },
};
