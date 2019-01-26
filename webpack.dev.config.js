const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const webpackConfig = {
    entry: {
        app: './src/client'
    },
    output: {
        path: path.join(__dirname, 'public'),
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }, {
                test: /\.((s*)css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-80',
                                speed: 6
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            // webp: {
                            //     quality: 75
                            // }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // favicon: './src/favicon.ico',
            template: './src/index.html',
            filename: './index.html'
        }),
        new WebpackShellPlugin({
            onBuildEnd: ['yarn dev:server']
        })
    ]
}

module.exports = webpackConfig;