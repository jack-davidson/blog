date: May 4 2021
# Hosting a nodejs app on your own server!

If you want to host webapps on your own physical server or
a server in the cloud, the configuration may seem daunting.
There are many large programs you need to configure to get
a web app running. This article is here to the rescue!

So whenever we are administrating a server and trying to
install a new service, we need to plan how our components
are going to interact. We need to plan what interfaces
we are going to use and what channels of communication
our different elements will fit together with.

## Overview

Here is a diagram of the app we are hosting:

```
www <-- https://example.com --> nginx <-- http://localhost:3000 --> nodejs
```

What this means is that we have the world wide web communicating
with an nginx server. Nginx is a server application that acts
as a reverse proxy *and* http web server. A reverse proxy can
forward clients to different web browsers depending on certain
rules. An http web server is a program that allows conent to
be served over a network with the http protocol. With nginx, we
can redirect responses to other ones and we can configure
different rules for redirecting and responding for different
domains.

The communication channel examples within the arrows signifies
the protocol and domain of this connection. Clients on the
world wide web will be requesting to your server via
https through your domain name, *example.com*. Nginx
redirects this request to an unencrypted localhost connection
on port 3000. Usually, web connections, http and https, run
on ports 80 and 443 respectively but since we are already using
the port on our system we need to use another one like 3000.

# Setting up the server.
This article is not yet finished. Please stay tuned!
