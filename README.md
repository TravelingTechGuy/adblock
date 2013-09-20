Your Ad-blocker Broke My Site!
==============================

This presentation will:

1. Define what are ad-blockers
2. Review some of the leading available ad-blockers out there
3. Explain why *you* - the web developer - should be aware of ad-blockers
4. Demonstrate common JavaScript pitfalls caused by ad-blockers and how to overcome them
5. Show how other commercial sites handle ad-blockers gracefully

You can also see the presentation in action [here](http://goo.gl/V41qp), or scan the following QR code:

[![QR code for http://goo.gl/V41qp](http://imgur.com/drFOr.png)](http://goo.gl/V41qp)

(ps: added [tinyurl.com/adblockPres](http://tinyurl.com/adblockPres) as an additional URL)

###Update 8/2/2013
I've added a few things to flesh out the presentation, ahead of the Silicon Valley Code Camp session:

1. **Examples:** showing various misbehaviors - these should be opened in a browser running Ghostery, and compared to a browser that does not.
2. Since plugins do not work on local files (file:// protocol), I included a small node file that will serve as a simple web server for the presentation.

**The following section is only necessary if you want to run the demos locally.** 
You do not have to use it: double clicking index.html, or browsing to the online version works as well.

To run the demos locally, make sure you have node and npm installed:

	$ git clone https://github.com/TravelingTechGuy/adblock.git
	$ cd ./adblock
	$ npm install
	$ node app

Now, browse to your localhost (ie: [http://localhost:1337/index.html](http://localhost:1337/index.html)) in your web browser.