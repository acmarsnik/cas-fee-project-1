// webpack.config.js
module.exports = {
    entry: [
        './public/scripts/startup.mjs',
        './public/styles/index.css',
        './public/styles/index-dark-mode.css',
        './public/styles/index-rainbow.css',
        './public/styles/importance.css',
        './public/styles/importance-dark-mode.css',
        './public/styles/importance-rainbow.css',
        './public/styles/common.css',
        './public/styles/common-dark-mode.css',
        './public/styles/common-rainbow.css',
        './public/styles/create-edit-note.css',
        './public/styles/create-edit-note-dark-mode.css',
        './public/styles/create-edit-note-rainbow.css',
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
