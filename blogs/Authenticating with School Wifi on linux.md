date: May 17 2021
# Authenticating with (AISD) School Wifi
Before going to in person school (today is my first day), I was slightly worried about my new computer setup and
how that would complicate authentication with the Austin ISD school network. I was worried because you need to have
your school credentials in order to authenticate with the school network.

After I went in for my exam a week ago, I tried authenticating with the school network to test it out and alas
I failed to connect, I got an error `not configured` when connecting with `AISD-GUEST` or `education` networks.
The reason is because you must create a file in `/var/lib/iwd` called `YOUR-SSID.8021x`, replacing `YOUR-SSID`
with the ssid of the access point you are trying to connect to.

In my case, the ssid is called `education` and in order to connect to `education`, I needed to do a little research.
When I got to my class today, I quickly enabled my wireless hotspot on my iphone and I researched some iwd connections
and I looked at some info from iwd and scanned the active networks and realized that the education network's authentication
scheme was 8021x and I needed to do some special steps.

I found [this forum post on the arch linux bbs](https://bbs.archlinux.org/viewtopic.php?id=259050) and one of the answers
has a working config.

This was a quick article and it was mostly for me to remember how to authenticate with enterprise networks and I hope it maybe
can be helpful to others.


sources:
[](https://bbs.archlinux.org/viewtopic.php?id=259050)
