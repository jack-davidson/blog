date: May 14 2021
# Scheduling Protocol Implementation Details
In the previous article [here](/blog/A_New_Internet_Calendar_Protocol%3F), I discussed my intentions of creating an internet
calender/scheduling protocol inspired by the mess that is webCAL and CalDAV. Xml is not something we need in our protocols
and such a complicated protocol is of no use to me. The calendar protocols like webCAL and CalDAV were designed in a strange
period after simplistic server software but before more modern programming techniques and technologies.

I think that building the protocol atop HTTP will allow more clients to be built and allow the protocol to operate at a higher
level. Also, building with HTTP allows the server to be placed behind an HTTP reverse proxy like nginx and my home hosting
solution includes an nginx proxy that forwards traffic to one of my two domains running. It will be easier for everyone
if I use HTTP. HTTP allows easy ssl encryption with the reverse proxy as well.

The goal of the protocol is to have a simple, human readable calendar format with incremental changes. Only one operation is
allowed at a time allowing all changes to be stored and restored. The goal is also to have a simple protocol that makes
sense and is easy to implement servers and clients.

For an implementation in C, I would use the mongoose web server library to serve requests. Parsing request bodies into
a format that can be later processed into data operations.

Once the body is parsed, the changes are made.

A client will poll the server at any speed and most likely it will be a configurable speed to poll at.

I think this scheduling protocol can be very helpful as the current technologies are not amazing. If there was something better
out there I would definitely use it but it seems that I need to "Put up or Hack up" and make this protocol.
