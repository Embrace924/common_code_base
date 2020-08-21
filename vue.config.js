// vue-cli参考教程：https://cli.vuejs.org/zh/config/
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve('src/assets/css/scroll.less'),
                resolve('src/assets/css/var.less')
            ]
        });
}

module.exports = {
    // 取消线上环境打包时候eslint检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 在htmlWebpackPlugin中增加环境变量，在index.html中使用
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].environment = process.env.NODE_ENV;
            return args;
        });
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'));

        // 自动注入less变量、函数等
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    },
    productionSourceMap: false,
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            '/api-local': {
                target: 'http://demo.com',
                progress: false,
                pathRewrite: {
                    '^/api-local': '/'
                }
            }
        }
    },
    assetsDir: 'assets',
    publicPath: process.env.ENV_BASE_URL // 当使用基于 HTML5 history.pushState 的路由时不能使用相对路径
};
