const path = require('path');
module.exports = {
    entry: path.join(__dirname, '../entry.js'),
    output: {
        filename: 'handle.js'
    },
    module: [{
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
    },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015']
        }
    }]
}
