const path = require('path');
const babelConfig = require('./babel.config');

module.exports = {
    mode: 'production',
    entry: {
        'inputs': './src/components/inputs/index.js',
        'generators/ef': './src/generators/ef.js',
        'generators/blank': './src/generators/blank.js',
        'vue-forminator': './src/Forminator.js'
    },
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
        'vue-functional-data-merge',
        'imask',
        'moment',
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