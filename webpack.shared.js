const path                 = require('path');
const CopyPlugin           = require('copy-webpack-plugin');
const ESLintPlugin         = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const contentScripts = {};
['google', 'google-search'].forEach(name => { contentScripts[name] = path.resolve(__dirname, 'src', 'content-scripts', `${name}.ts`); });

module.exports = {
    entry: {
        ...contentScripts,
        modules:           './src/modules/index.ts',  // combines all the .ts files in the modules folder due to the index.ts file
        'options-page':    './src/options-page.ts',
        'popup-page':      './src/popup-page.ts',
        'service-worker':  './src/service-worker.ts',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.(scss|css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        ],
    },
    optimization: { minimize: false }, // disable all optimizations
    output: {
        chunkFilename: 'js/[name].js',
        clean:         true,
        filename:      'js/[name].js',
        path:          path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ESLintPlugin({ extensions: ['js', 'ts'], overrideConfigFile: path.resolve(__dirname, '.eslintrc.js') }),
        new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
        new CopyPlugin({ patterns: [
            { from: 'manifest.json' },
            { from: 'src/html', to: 'html' },
            { from: 'src/icons', to: 'icons' },
            { from: 'vendor', to: 'vendor' },
        ] }),
    ],
    resolve: { extensions: ['.ts', '.js'] },
};
