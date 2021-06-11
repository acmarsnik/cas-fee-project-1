// webpack.config.js
module.exports = {
    entry: [
        './public/scripts/startup.mjs',
        './public/styles/index.css',
        './public/styles/importance.css',
        './public/styles/common.css',
        './public/styles/create-edit-note.css',
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'script-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
};
