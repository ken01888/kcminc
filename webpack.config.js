// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// const StylelintPlugin = require('stylelint-webpack-plugin');


const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const configClient = {

    mode: 'development',
    entry: './mainDevFolder/src/index.tsx',
    
    output: {
        path: path.resolve(__dirname, 'dist_client'),
        filename: 'main.js',
        clean: true

    },
    devtool: 'inline-source-map',
    devServer: {
        liveReload:false,
        compress: true,
        open: true,
        hot: true,
        port: 3000,
        

    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html', hash: false }),
        // new StylelintPlugin()

    ],

    module: {
        rules: [{
            test: /\.(ts|tsx)$/i,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.client.json'
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: 'javascript/auto',
        },
        {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.less$/i,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    },
};

const configServer = {
    watch:true,
    mode: 'development',
    entry: './mainDevFolder/server/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist_server'),
    },

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

    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};

module.exports = [configServer, configClient];