---
title: Making a Startpage
date: 2020-06-21
excerpt: A StartPage using HTML, CSS and JavaScript
tags: ["html","javascript","css"]
---
I got bored of the same old Firefox "Previously Closed" and "Most Visited"
categories whenever I opened up Firefox, so I thought lets make a start page 
that works for me. The start page contains links to websites and forums that
I visit the most all conveniently located in their respected categories.

### Finding a template 
Using a template is the easiest and fastest way to get started on developing,
saves a lot time setting everything up. I found a Reddit startpage subforum is
a great page to start looking for startpages:

I settled on
[this](https://www.reddit.com/r/startpages/comments/hca1dj/simple_light_startpage/)
simple yet effective template, the template contained both a simple dark and
light theme which fits into my needs.

### Editing 
Now that I have found the template I would like to use, its time to edit it for
my own personal needs. I edited the typography, the colour scheme, added
a search bar and a better image.

#### Font
Best place in my opinion to look for better typography is the Google Fonts
site, they have hundreds to choose from as well as matching pairs for both
headers and body. 

These are the fonts I used:
- Staatliches for the headers 
- Source Sans Pro for the body 

#### Search bar
The search bar didn't function in the template, it was there as a placeholder. So I got
cracking and made a script using JavaScript, the script queries the DuckDuckGo
directory. I prefer DuckDuckGo due to the better range of results as they are
not tailored to me, compared to Google Search.

This is the snippet for the search bar:
```html
// HTML Snippet
<form action="https://duckduckgo.com/" 
        method="get"
        onsubmit="return search()"
        id"ddg-search" 
        action="https://www.duckduckgo.com/search"
        autocomplete="off">

            <input class="w3-input w3-center w3-section" 
                data-name="q"
                id="field-3"
                maxlength="256"
                type="text"
                name="q"
                placeholder="Search"/>

</form>
```

```javascript
// JavaScript Snippet
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
Using FireFox settings you are able to set the Homepage to your start page
location on your local disk, currently you are unable to setup it up in way
where whenever you open a new tab the startpage will appear, though there are
some add ons you can use to do this. I choose not to.
