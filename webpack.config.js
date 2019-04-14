module.exports = {
    entry: './src/app.ts',
    output: {
        path: __dirname+ '/dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module:{
        rules:[
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}