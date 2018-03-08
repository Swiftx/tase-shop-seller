const path = require('path');
const config = require('./webpack');
const { Compiler } = require('../modules/webpack-react-scaffold/dist');

const docsCompiler = new Compiler();
docsCompiler.entry.main = path.resolve(__dirname,'../components/docs/index.ts');
docsCompiler.module.rules.unshift({
    test: /\.md$/,
    use: 'raw-loader'
});

const adminComplier = new Compiler();
adminComplier.entry.main = path.resolve(__dirname,'../src/index.ts');
docsCompiler.module.rules.unshift({
    test: /\.less$/,
    use: [
        {loader: "style-loader"}, 
        {loader: "css-loader"}, 
        {loader: "less-loader"}
    ]
});

docsCompiler.run('localhost', 3000);
adminComplier.run('localhost', 3001);