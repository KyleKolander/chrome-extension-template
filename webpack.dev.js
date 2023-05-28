const { merge } = require('webpack-merge');
const shared    = require('./webpack.shared.js');

module.exports = merge(shared,
    {
        devServer: { static: './dist' },
        devtool:   'inline-source-map',
        mode:      'development',
    });