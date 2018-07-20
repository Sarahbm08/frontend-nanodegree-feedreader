# Project Overview

This project reads and displays an RSS feed from a list. The purpose of this project is to provide tests using [Jasmine](http://jasmine.github.io/).


## How to Run

To run this application, load the ./index.html and the feed will display on top, with the test results displayed at the bottom. To change the current feed, click the menu icon and then click on a new feed 
from the side menu that appears.

## Add More RSS Feeds

If you would like to add more RSS feeds to the initial list, open ./js/app.js and add to the "allFeeds" array specifying a name and URL.

## Tests Provided

This project tests for the following:

* list of feeds is defined and not empty
* each feed has a URL defined and that the URL is not empty
* each feed has a name defined and that the name is not empty
* the side menu is hidden by default
* the menu icon changes visibility when clicked
* the feed content contains at least one entry after loading a feed
* the feed content changes after new feed is loaded


