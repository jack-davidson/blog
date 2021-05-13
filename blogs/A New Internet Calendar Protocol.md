date: May 12 2021
# A New Internet Calendar Protocol?
Recently I have started to incorporate electronic calendars into my daily workflow and have started
scheduling tasks and other events I have planned. My previous system was a whiteboard that I would write
tasks on. Thunderbird's tasks feature as well as its calendar were very helpful but I wanted to
be able to sync calendars between devices.

As I looked into the existing internet calendar protocols, I saw complicated software that didn't look
particularly efficient. The server I found that seemed to be the most commonly used was written in python
and while I like python for writing scripts I didn't want to have to deal with python running on my server
for something that needs 100% uptime. I decided that I might have to write my own and so I have been
thinking about the possibility of drafting a small internet calendar protcol built upon other protocols.

Possibly I would build the protocol on top of http, saving me a lot of time as the developer and making
it easier to deploy as reverse proxy server like nginx can easily support http. Since I host all of my
web programs behind nginx this would be the most convenient route as opposed to directly creating a tcp
socket. This also allows me to easily use let's encrypt with nginx for secure connections.

In a web calendar service, I need to specify parameters for exchange of data pertaining to calendar creation.
Similar to the headers and verbs of http, my protocol will need to have its own format.

```
new scheduler 'Jack's Scheduler'
new task 'review pull request #43' in 'Jack's Scheduler'
new event 'Mother's day' on May 9 in 'Jack's Scheduler'
```

This would say to create a new scheduler called 'Jack's Scheduler' and to create a task
with the name 'review pull request #43 and put it in 'Jack's Scheduler'. Then, create
a new event called 'Mothers Day' on May 9 in 'Jack's Scheduler'.

I don't exactly know if the protocol should be this verbose? I think possibly a more concise language would
be better for serving of the world wide web due to slow connections. Please tell me what you think, my email
is jackmaverickdavidson@gmail.com

This protocol would allow a simple client that only needs http capabilities and no other parsing needed. This
would reduce load on the client and offload it to the server. A client could exist soley consisting of a shell
that sends one line requests to the server.

```
> new sheduler 'Jack's Scheduler'
> new task 'review pull request #43' in 'Jack's Scheduler'
> new event 'Mother's day' on May 9 in 'Jack's Scheduler'
```

The client could store the state of the calender the client is interacting with like so.

```
> new sheduler 'Jack's Scheduler'
(Jack's Scheduler) > new task 'review pull request #43'
(Jack's Scheduler) > new event 'Mother's day' on May 9
```

Could automatically append 'in 'Jack's Scheduler'' as it would notice the context. The grammar feels similar to
SQL and that would be indeed intentional. Like I said previously I don't know if this is an entirely good idea
for the protocol but this would be extremely easy to parse rather than parsing a 'machine friendly' format.

Thank you and again my contact is at [](https://jackdavidson.tech/contact) or jackmaverickdavidson@gmail.com.
