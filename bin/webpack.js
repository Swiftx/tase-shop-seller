const { resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, '../src/index.ts'),
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    resolve : {
        extensions:  ['.tsx', '.ts', '.js', '.jsx']
    },
    module : {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{loader: 'ts-loader'}]
            },
            {
                test: /\.css$/,
                use : [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.md$/,
                use: [
                    {loader: "html-loader"},
                    {loader: "markdown-loader"}
                ]
            }
        ]
    }
};