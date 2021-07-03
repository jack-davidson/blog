const model = require('./blog.js');

/*
 * Routes for blog.
 */

module.exports = (app, config) => {
    /* Get all blogs. */
    app.get('/', (_, res) => {
        model.getBlogs((blogs) => {
            res.render('index.ejs', {blogs: blogs});
        });
    });

    /* Get Blog by title. */
    app.get('/blog/:title', (req, res) => {
        model.getBlog(req.params['title'], (blog) => {
            res.render('blog.ejs', {blog});
        });
    });

    /* Redirect https://jackdavidson.tech/git/<repo> to https://github.com/jack-davidson/<repo>. */
    app.get('/git/:repo', (req, res) => {
        res.redirect('https://github.com/jack-davidson/' + req.params['repo']);
    });

    /* Render Portfolio Page. */
    app.get('/portfolio', (_, res) => {
        res.render('portfolio.ejs', {});
    });

    app.get('/resume', (_, res) => {
        /* redirect to google docs resume url */
        res.redirect('https://docs.google.com/document/d/e/2PACX-1vSb5GkR9ckGq5BEX-TStSNNPlGNkA9f--eHORQ1YYJKX_F_BafyTvmQtpwVGGzwhnCYbZknLcTda0cD/pub');
    });

    /* Render Contact Page. */
    app.get('/contact', (_, res) => {
        res.render('contact.ejs', {contact: config['contact']});
    });

    /* Render About Page */
    app.get('/about', (_, res) => {
        res.render('about.ejs', {});
    });
};
