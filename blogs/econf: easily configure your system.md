date: May 30 2021
# econf: easily configure your system
Hello, I just finished up a program called econf. econf allows you to
deploy configuration files automatically with a special configuration language.

You can check out the project at [](https://github.com/jack-davidson/econf).

When you are in a directory with an econf config file, you just have to run econf
and all of the config files get symlinked and other directives are executed.

I created with project in C. There are no dependencies except for a posix libc.

Thanks for reading!


```
~/repos/jd/config::(master) > econf
/home/jd/repos/jd/config/qutebrowser -> /home/jd/.config/qutebrowser
/home/jd/repos/jd/config/fontconfig -> /home/jd/.config/fontconfig
/home/jd/repos/jd/config/nvim -> /home/jd/.config/nvim
/home/jd/repos/jd/config/zathura -> /home/jd/.config/zathura
/home/jd/repos/jd/config/dunst -> /home/jd/.config/dunst
/home/jd/repos/jd/config/spotifyd -> /home/jd/.config/spotifyd
/home/jd/repos/jd/config/spotify-tui -> /home/jd/.config/spotify-tui
/home/jd/repos/jd/config/xinit-lt0/xinitrc -> /home/jd//.xinitrc
/home/jd/repos/jd/config/alsa-lt0/asoundrc -> /home/jd//.asoundrc
/home/jd/repos/jd/config/tmux/tmux.conf -> /home/jd/.tmux.conf
/home/jd/repos/jd/config/zsh/zshrc -> /home/jd/.zshrc
/home/jd/repos/jd/config/zsh/zprofile -> /home/jd/.zprofile
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 82679  100 82679    0     0   240k      0 --:--:-- --:--:-- --:--:--  241k
```
