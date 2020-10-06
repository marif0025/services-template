const path = require('path')

module.exports = {
    devtool: "eval-source-map",
    entry: './src/ts/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public/assets/js',
        filename: 'script.js',
        path: path.resolve(__dirname, 'public/assets/js'),
        libraryTarget: 'umd',
        library: 'uiLibrary',
        libraryExport: 'default'
    }
}