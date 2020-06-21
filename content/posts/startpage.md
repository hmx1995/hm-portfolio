---
title: Startpage
date: 2020-06-21
excerpt: How I made my startpage using a single html file
tags: ["html","javascript","css"]
---
An honest run through on what I did to make the startpage

### Finding a template 
Using a template is the easiest and fastest way to get started on developing, saves a lot time setting everything up.

Reddit's startpage subforum is a great page to start looking for startpages:

I settled on [this](https://www.reddit.com/r/startpages/comments/hca1dj/simple_light_startpage/) simple yet effective template, had both dark and light mode. 

### Enhancing the template

#### Font
Now that you've found the template you'd like to use, its time to enhance it. In my case, I didnt like the font.

So I found new ones, using Google Fonts.

These are the fonts I used:
- Staatliches
- Source Sans Pro

#### Search bar
The search bar didn't function, it was there as a placeholder. So I got cracking and made a javascript script to search for whatever I typed in the search bar in duckduckgo's dataabase.

This is the snippet for the search bar:

**HTML Search Bar**
```html
<form action="https://duckduckgo.com/" method="get" onsubmit="return search()" id"ddg-search" action="https://www.duckduckgo.com/search" autocomplete="off">
    <input class="w3-input w3-center w3-section" data-name="q" id="field-3" maxlength="256" type="text" name="q" placeholder="Search" />
</form>

```

**JS Script for DuckDuckGo**
```javascript
function search() {
    let inputValue = document.getElementById('field-3').value;
    if (isDomain(inputValue)) {
        if (!startsWithProtocol(inputValue)) {
            inputValue = 'http://' + inputValue;
            }
        window.open(inputValue, '_blank');
        return false;
        } 
    return true;
    }
function startsWithProtocol(value) {
    return /^((https?|ftp|smtp):\/\/)/.test(value);
    }
function isDomain(value) {
    return /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(value);
}
```

### Using the page

Now all you have to do is just apply the firefox settings to find your page and voila you've got a customised startpage
