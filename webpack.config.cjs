// webpack.config.js
module.exports = {
    entry: [
        './public/scripts/startup.mjs',
        './public/styles/create-edit-note/create-edit-note-base.css',
        './public/styles/importance/importance-base.css',
        './public/styles/importance/importance-dark-mode.css',
        './public/styles/importance/importance-rainbow.css',
        './public/styles/notes/notes-base.css',
        './public/styles/notes/notes-dark-mode.css',
        './public/styles/notes/notes-rainbow.css',
        './public/styles/notes-app/notes-app-base.css',
        './public/styles/notes-app/notes-app-dark-mode.css',
        './public/styles/notes-app/notes-app-rainbow.css',
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
