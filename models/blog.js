const fs = require('fs');
const path = require('path');
const markdown = require('markdown');

function getBlogs(callback) {
    var blogs = [];
    fs.readdir('blogs', (_, files) => {
        files.forEach((fileName) => {
            blogs.push({
                title: path.basename(fileName, '.md'),
                content: markdown.markdown.toHTML(fs.readFileSync('blogs/' + fileName, 'utf8')),
                date: fs.statSync('blogs/' + fileName).ctime
            });
        });
        return callback(blogs.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        }));
    });
}

function getBlog(id, callback) {
    getBlogs((blogs) => {
        return callback(blogs[id]);
    });
}

module.exports.getBlog = getBlog;
module.exports.getBlogs = getBlogs;
