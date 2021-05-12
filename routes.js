const model = require('./blog.js');

module.exports = (app, config) => {
    app.get('/', (_, res) => {
        model.getBlogs((blogs) => {
            res.render('index.ejs', {blogs: blogs});
        });
    });

    app.get('/blog/:title', (req, res) => {
        model.getBlog(req.params['title'], (blog) => {
            res.render('blog.ejs', {blog});
        });
    });

    app.get('/git/:repo', (req, res) => {
        res.redirect('https://github.com/jack-davidson/' + req.params['repo']);
    });

    app.get('/portfolio', (_, res) => {
        res.render('portfolio.ejs', {});
    });

    app.get('/contact', (_, res) => {
        res.render('contact.ejs', {contact: config['contact']});
    });

    app.get('/about', (_, res) => {
        res.render('about.ejs', {});
    });
};