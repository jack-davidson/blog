date: May 9 2021
# Making a Custom qutebrowser Homepage
If you use [qutebrowser](https://qutebrowser.org), I assume your current homepage is
[duckduckgo.com](https://duckduckgo.com) or another search engine like searX. You may
have gone into the duckduckgo preferences and configured the colors to your liking
but maybe that doesn't cut it. Maybe it doesn't look good with your ultra fancy awesomewm setup
or it doesn't look good with your ultra-minimalistic dwm setup.

Before custom homepage:
![default homepage](https://jackdavidson.tech/img/blog/qutebrowser_default_homepage.png)

If you want a more custom type of homepage, I have created this small article on how to do so!

First, create a `homepage.html` file in `~/.config/qutebrowser/`:
` ~/.config/qutebrowser $ vi homepage.html`

Press i to start writing.

Then, we can work on our homepage. Here's what I used:
```html
<html>
    <head>
        <title>home</title>
    </head>
    <body style="background-color: #282a36">
    </body>
</html>
```

Once you are done, you may want to modify the `background-color` inline css to another color
but for now it is the background color for dracula theme.

This html makes the top title name of the tab be `home` and the whole page's background color to
fit my dracula colorscheme of the rest of my system.

Now, type escape and then `wq` to save and quit `vi`.

After custom homepage:
![CUSTOM HOMEPAGE](https://jackdavidson.tech/img/blog/qutebrowser_custom_homepage.png)

Thank you for reading!
