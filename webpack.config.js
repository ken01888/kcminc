// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const nodeExternals = require('webpack-node-externals');


const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const configClient = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'main.js',
        clean: true

    },
    devServer: {
        compress: true,
        open: true,
        hot: true,
        port: 3000,



    },
    plugins: [
        // new HtmlWebpackPlugin({
        // }),

        new MiniCssExtractPlugin(),

        // //     // Add your plugins here
        // //     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [{
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.client.json'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                exclude: /node_modules/,
                type: "javascript/auto",
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    },
};

const configServer = {
    devtool: "inline-source-map",
    mode: "development",
    entry: './server/index.ts',
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.server.json'
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};

module.exports = [configServer, configClient];