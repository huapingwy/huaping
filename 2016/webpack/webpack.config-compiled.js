module.exports = {
    entry: {
        home: './js/home/main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: '\.js$',
            exclude: './node_modules/',
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map