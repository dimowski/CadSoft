module.exports = {
    entry: './src/main/resources/static/main.js',
    output: {
        path: __dirname + '/src/main/resources/static',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};
