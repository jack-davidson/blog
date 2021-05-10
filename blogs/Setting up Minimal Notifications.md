# Setting up Minimal Notifications

I recently switched my mail client from the default gmail web client to [thunderbird](https://www.thunderbird.net/en-US/).
Thunderbird is a featureful, immensely popular mail client that was created by mozilla and now no longer maintained by
mozilla but by a separate community. I saw the mail notifications and they looked--dated. They looked old and didn't go well
with the dark colorscheme I use.

So I did some research:

I had known about dunst notifications but had never bothered to get notifications as I didn't exactly feel the need
but having a native mail client changed my opinion. Here is how you do it:

Assuming you have a configured installation of thunderbird:

`$ sudo pacman -S dunst # install dunst with pacman (arch)`

If you don't have thunderbird, install it:

`$ sudo pacman -S thunderbird`

Then, (if you are on gmail), in gmail web client, go to gear icon > all settings > Forwarding and POP/IMAP and then enable
both by clicking `Enable POP for all mail (even mail that's already been downloaded)` and `Enable IMAP`. Now, open thunderbird
and enter your google sign in information and you should be done.

Now, we need to start dunst by adding this line to `~/.xinitrc`:

`dunst &`

This is what your xinitrc should look like (somewhat):

```
#!/bin/sh
feh --bg-fill img/wallpapers/mount-fuji.jpg &  # wallpaper
xrandr --output HDMI-A-0 --set TearFree on &  # monitor settings with xrandr
dwmblocks &  # dwm status bar
dunst &  # dunst notifications
exec dwm  # starting window manager
```

Now, restart the Xorg server with `killall xinit` and log back in.

Open Thunderbird and go to add-ons > find more add-ons and search for 'mailbox alert'. Install the add-on.

Now, right click your user's email folder: click mailbox alert > default message and then click mailbox alert > alert
for child folders. Then click edit mailbox alerts. Then press edit an unclick everything except "execute a command".
Now, you can put a command to display something with dunst:

`/usr/bin/notify-send "mail from %sendername" "%subject""`

This will show the sender and subject with dunst.
