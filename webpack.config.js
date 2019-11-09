const path = require('path');

module.exports = {
    mode: 'production',
    devtool: "source-map",
    entry: {
        cadastrarFuncionario: "./src/views/public/js/cadastrarFuncionario.js",
        cadastrarProduto: "./src/views/public/js/cadastrarProduto.js",
        login: "./src/views/public/js/login.js",
        bootstrap: "./src/views/public/js/bootstrap.js"
    },
    output: {
        path: path.resolve(__dirname, "./src/views/public/js/dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
        ],
    },
}
