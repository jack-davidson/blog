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

# Getting a server running
In this guide, I am going to use the debian GNU/Linux distribution
on the server. If you would like to use another distribution,
names of packages may be different and configuration may not
be convered in this guide. Otherwise, I highly recommend using
debian as it is stable and tested and has a high market share.
Unlike Ubuntu GNU/Linux, it is not controlled by one company.

First go to [debian website](https://debian.org) and grab
a copy of the installation image for your system.

Once you have downloaded the installation image, we need
to use a usb drive to install this on another computer. Once
you have your usb drive, there are two ways we can copy
the image to your usb drive:

GNU/Linux:
Flashing a usb drive on GNU/Linux is quite simple, you must
use the program `dd`. `dd` takes many options and these options
are unlike the 'standard' UNIX program options. Our first
parameter specification will be `if=Downloads/debian.iso`. This
is the path to the debian installation image you downloaded
earlier. It **will** be different so make sure to change
the path. The second parameter will be `of=`. This is the output
file that we want to move our input file *to*. Be **EXTREMELY**
careful that you use the correct disk. To find disks installed
on your system, run `lsblk`:

```
$ lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda           8:0    1  14.3G  0 disk
├─sda1        8:1    1   337M  0 part
└─sda2        8:2    1   2.8M  0 part
nvme0n1     259:0    0 447.1G  0 disk
├─nvme0n1p1 259:1    0   500M  0 part /boot
├─nvme0n1p2 259:2    0    40G  0 part /
├─nvme0n1p3 259:3    0   390G  0 part /home
└─nvme0n1p4 259:4    0  16.6G  0 part [SWAP]
nvme1n1     259:5    0 119.2G  0 disk
```

Look at your usb drive and see the size on it, then find the corresponding
drive that has that size. My drive is 15G so I selected `sda` with a size
of 14.3G. Also, the usb drive will have the smallest size just to make sure
you aren't selecting a system drive.

Once you have the name like `sda` or `sdb` that we found in `lsblk` earlier,
we use `dd` to copy it over.

```
$ sudo dd if=Downloads/debian.iso of=/dev/sda status=progess
```

I also added the option `status=progress`. This tells `dd` that we would like
to see a little status bar of how much we have written and how long it will
take. This is optional but it is helpful to see how long you have left.

Windows:

Mac OSX:

This article is not yet finished. Please stay tuned!
