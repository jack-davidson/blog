const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it')();

module.exports = {
    getBlogs: function (callback) {
        var blogs = [];
        fs.readdir('blogs', (_, files) => {
            files.forEach((fileName) => {
                fileContent = fs.readFileSync('blogs/' + fileName, 'utf8');
                /* 
                 * 1) Get date from first line of fileContent and remove the date key.
                 * 2) Get body and remove date key and convert to html.
                 * 3) Get first line and remove <h1?> tag.
                 */
                date = new Date(fileContent.split(/\r?\n/)[0].replace(/date:*/, ''));
                body = markdownIt.render(fileContent.replace(/date\:.*\n/, ''));
                title = body.split(/\r?\n/)[0].replace(/<h1?>/, '');
                blogs.push({
                    title: title,
                    content: body,
                    date: date
                });
            });
            return callback(blogs.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            }));
        });
    },
    getBlog: function (title, callback) {
        this.getBlogs((blogs) => {
            for (i = 0; i < blogs.length; i++) {
                if (blogs[i].title.replace(/(<([^>]+)>)/, '').replace(/ /g, '_') == title) {
                    return callback(blogs[i]);
                }
            }
        });
    }
}
