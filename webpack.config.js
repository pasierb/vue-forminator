const path = require('path');
const Components = require('./components.json');
const babelConfig = require('./babel.config');

module.exports = {
    mode: 'production',
    entry: Components,
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: 'VueForminator',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ]
    },
    externals: [
        'vue',
        'vue-functional-data-merge',
        'ramda'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: babelConfig
                }
            }
        ]
    }
}