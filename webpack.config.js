module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].[hash].js",
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /node_modules/,
                    chunks: "initial",
                    enforce: true
                }
            }
        } 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}