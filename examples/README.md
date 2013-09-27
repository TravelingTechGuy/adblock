Your Ad-blocker Broke My Site!
==============================
Presentation example files
--------------------------
These examples work together with the presentation, to demo the effects of ad-blockers on common beacons.
For the demos to work, the pages need to be served from a server (and not from a local file:// url), or else the ad-blockers ignore them.

You can either put the entire examples directory under a web server, or just use the small Node.js script attached
Make sure [Node.js](http://nodejs.org/) and [NPM](https://npmjs.org/) are installed.
To run the demos locally, make sure you have node and npm installed:

	$ git clone https://github.com/TravelingTechGuy/adblock.git
	$ cd ./adblock
	$ npm install
	$ node app

Browse to [http://localhost:1337](http://localhost:1337) to see the presentation, or [http://localhost:1337/examples](http://localhost:1337/examples) to see the examples

To use these examples properly, you'll need 2 browsers:

1. A browser with [adblock+](http://www.adblockplus.org) and [Ghostery](http://www.ghostery.com) installed
2. A browser with no ad-blocking extensions

Open each page in both browsers to observe the effects. 
All example pages have a simple addition calculator that may, or may not, work as planned - depnding on the page content.

The pages provided:

1. [existence.html](http://localhost:1337/examples/marketo.html) - Simple script testing for AdBlock existence
2. [twitter.com](http://localhost:1337/examples/twitter.html) - Twitter and LinkedIn widgets blocked
3. [marketo.html](http://localhost:1337/examples/marketo.html) - Marketo code blocked, causing a crash
4. [marketo-fixed.html](http://localhost:1337/examples/marketo-fixed.html) - Marketo code existence handled without harming functionality
5. [marketo-qunit.html](http://localhost:1337/examples/marketo-qunit.html) - Marketo code existence, tested by QUnit