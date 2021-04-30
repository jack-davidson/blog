const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;

function getBlogs(callback) {
    var blogs = [];
    fs.readdir('blogs', (_, files) => {
        files.forEach((fileName) => {
            fileContent = fs.readFileSync('blogs/' + fileName, 'utf8');

            date = new Date(fileContent.split(/\r?\n/)[0].replace('date: ', ''));
            body = markdown.toHTML(fileContent.replace(/date\:.*\n/, ''));
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
}

function getBlog(id, callback) {
    getBlogs((blogs) => {
        return callback(blogs[id]);
    });
}

module.exports.getBlog = getBlog;
module.exports.getBlogs = getBlogs;
