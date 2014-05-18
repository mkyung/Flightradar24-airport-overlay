# Flightradar24-airport-overlay
## An addon for Flightradar24 web

![](http://i.imgur.com/tEJLOxz.jpg)

### Background:
Inspired by [Hong Kong FIR (VHHK) FR24 Overlay](https://github.com/microtony/fr24-overlay-vhhk).

This addon aims to label taxiways, runways and other visual markings on Flightradar24. 

### How to use:

Add the code below as your bookmark/favorite URL.

`javascript:(function(){$('body').append("<script src='//rawgit.com/mkyung/Flightradar24-airport-overlay/master/js/fr24-airport-overlay-data.js' />"); setTimeout(function(){$('body').append("<script src='//rawgit.com/mkyung/Flightradar24-airport-overlay/master/js/fr24-airport-overlay.js' id='fr24-airport-overlay' />")}, 100);})()`

Call this bookmark while you are on Flightradar24 main [page](http://www.flightradar24.com/). It would take a few seconds to load airport diagrams (about 0.5MB each)

### Disclaimer:

Do NOT use this addon for navigation or in a practical way. It is just for entertainment use. 
Some of the maps are not up-to-date and may contain errors.
