module.exports = {
    entry: {
        home: './js/main.js',
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [ 
            {
                test: '\.js$',
                exclude: './node_modules/',
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};