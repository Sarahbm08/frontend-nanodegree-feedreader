/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        // allFeeds array is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        // each feed has a URL defined and that the URL is not empty
        it('has each url defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // each feed has a name defined and that the name is not empty
        it('has each name defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        // the side menu is hidden by default (if it has the 'menu-hidden' class)
        it('is hidden by default', function() {
            let body = document.querySelector('body');
            expect(body.className).toBe('menu-hidden');
        });

        // the menu becomes visible/invisible when the menu icon is clicked
        it('changes visibility when the menu icon is clicked', function() {
            let body = document.querySelector('body');
            let menuIconLink = document.querySelector('.menu-icon-link');

            menuIconLink.click();
            expect(body.className).toBe('');
            menuIconLink.click();
            expect(body.className).toBe('menu-hidden');
        });
    });

    describe('Initial Entries', function() {

        // call the loadFeed function before each test, call "done" function when it's finished
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // the feed contains at least one entry after loadFeed is done
        it('should have at least one .entry-link element within the .feed container', function(done) {
            const feedEntries = document.querySelector('.feed').querySelectorAll('.entry-link');
            expect(feedEntries.length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        
        // variables to store two feed contents so we can compare if the contents have changed
        let firstContent,
            secondContent;
        
        // call "done" when loadFeed is done
        beforeEach(function(done) {
            loadFeed(1, function() {
                firstContent = document.querySelector('.entry-link').innerHTML;
                loadFeed(2, function() {
                    secondContent = document.querySelector('.entry-link').innerHTML;
                    done();
                });
            });
        });

        // the feed content should change after the new feed is loaded
        // compare the first content to the second content
        it('content should change when a new feed is loaded', function(done) {
            expect(firstContent === secondContent).toBe(false);
            done();
        });
    });

}());
