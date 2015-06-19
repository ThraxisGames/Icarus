# Icarus

> Earn Your Wings

Icarus is a bare bones, simple tabletop RPG.  It is best used as an introduction to tabletop games and for one-shot campaigns.

This companion app is meant for quick and easy character creation and management. We are currently building using PhoneGap and will most likely be using Backbone.js as our framework.

## Set Up

First and foremost you should check out PhoneGap.  Follow the first two steps in their [Getting Started Guide](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/), which includes installing PhoneGap and its mobile companion app.

We're using nodejs for development dependencies.  If you haven't used node before you can get it here: http://nodejs.org/download/

To get started, first install the dependencies in `package.json` by running `npm install` in the root of the project directory.

Next you'll want to get familiar with the [gulp](http://gulpjs.com/) tasks found in `gulpfile.js`.  We'll be adding more tasks as we go along, but for now we've got a couple simple tasks for:

* getting started: `gulp onramp` (this installs all of our frontend [bower](http://bower.io/) dependencies)
* developing: `gulp dev` (this watches for changes in the `src/` files and builds things, like css, for you as you work)

Finally, when you're ready to check out how things look on your phone, run `phonegap serve`.


