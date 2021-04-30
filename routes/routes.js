const model = require('../models/blog.js');

module.exports = (app, config) => {
    app.get('/', (_, res) => {
        model.getBlogs((blogs) => {
            res.render('index.ejs', {blogs: blogs});
        });
    });

    app.get('/blog/:id', (req, res) => {
        model.getBlog(req.params['id'], (blog) => {
            res.render('blog.ejs', {blog: blog});
        });
    });

    app.get('/portfolio', (_, res) => {
        res.render('portfolio.ejs', {});
    });

    app.get('/contact', (_, res) => {
        res.render('contact.ejs', config['contact']);
    });

    app.get('/about', (_, res) => {
        res.render('about.ejs', {});
    });
};
