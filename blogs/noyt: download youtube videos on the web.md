date: May 5 2021
# noyt: download youtube videos on the web
Hello All! This is just a quick update, (I am still
working on the *Hosting a nodejs app on your own server* series).

I have just released a project called [noyt](https://noyt.jackdavidson.tech)
([github](https://github.com/jack-davidson/noyt)). It is a quick project that
I made to download youtube videos. I created and hosted it yesterday in about
6 hours total. It took a little while to get the server configuration right.
I was so relieved once I had gotten the hosting right. I hadn't registered
another ssl certificate from let's encrypt and also I had messed up the
`server_name` and `listen` directives within my `noyt.jackdavidson.tech`
`server` block.

It uses node and express.js. I spawn a `youtube-dl` process to download a
video to the `/public` directory and then I respond with a download on
the frontend. This was a quite project and I will possibly make it look
more 'pretty' soon.

I created this project because my Integrated Physics and Chemistry
teacher was introducing the concept of electricity and wanted us
to watch a documentary by Jim Al-Khalili about the history of
electricity. Some students were unable to access this video via
youtube and the teacher had recorded the zoom meeting whilst watching
this video. I thought this was suboptimal and recommended he use `youtube-dl`.
I looked up how to install it on windows and I was quite dissapointed with the
ease of installation. The teacher would have to install chocolatey to install
pip to install dependencies and youtube-dl...

So! I thought of creating a web frontend for this program. Something fairly simple,
this is not winning any design awards but it works well.

I am very happy with nodejs, express, nginx, and all of the other tools I have learned
within the last week. I am a beginner at nodejs and this is my first time self hosting
servers. Things are getting a lot easier to just *build* and not *think* about it for a
long time before doing it--or just making big plans but not really making anything. If
I could give any advice for making projects: Let It Flow Naturally and create something
fun. You don't have to sit around thinking of project ideas: just be analytic of the world
and try to make a minimum viable product as fast as you can. REMEMBER the wise words of
Donald Knuth, author of The Art of Computer Programming and creator of TeX:
"Premature optimization is the root of all evil."

Thank you for reading :)
