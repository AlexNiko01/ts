module.exports = {
    entry: './src/app.ts',
    output: {
        path: __dirname+ '/dist',
        filename: 'app.bundle.js'
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