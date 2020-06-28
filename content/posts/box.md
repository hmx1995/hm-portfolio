---
title: Making a Vagrant Box
date: 2020-06-28
excerpt: Creating a Vagrant Box from Hacking The Art of Exploitation.
tags: ["vagrant","virtualbox","iso"]
---

I've been using vagrant for almost a year now, the concept behind the program
is very powerful in regards to what it can achieve in the DevOps sector. Though
I won't be tapping into the full potential of vagrant in this article. 

I decided to make a vagrant box for the Hacking: The Art of Exploitation LiveCD
due simply to that fact that the only current box listed has been taken down,
but man was this a journey.

### Setting up

In order to make a vagrant box you would need to create what is called a base box. The meaning of which is the following:

> A base box typically consists of only a bare minimum set of software for Vagrant to function.

In order to create this base box you would need to mount the .iso to VirtualBox
and boot the system. This is just the start. 

```bash
$ <insert here>
```
