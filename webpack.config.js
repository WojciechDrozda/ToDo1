//webpack.config.js
module.exports = {
    entry: './src/app.js',
     output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
     },
     module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }

};