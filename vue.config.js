module.exports = {
    outputDir: 'docs',
    pages: {
        index: {
            entry: 'src/pages/index.js',
            template: 'public/index.html'
        },
        bootstrap: {
            entry: 'src/pages/bootstrap.js',
            template: 'public/factory.html'
        },
        bulma: {
            entry: 'src/pages/bulma.js',
            template: 'public/factory.html'
        }
    }
}
