module.exports = {
    publicPath: 'news-app',
    devServer: {
        proxy: 'https://maps.googleapis.com/maps/',
    },
}