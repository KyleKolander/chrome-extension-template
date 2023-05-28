const { merge } = require('webpack-merge');
const shared    = require('./webpack.shared.js');

module.exports = merge(shared,
    {
        devtool: 'source-map',
        mode:    'production',
    });