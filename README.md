# IonicCharts

To start with install Node.Js from the website https://nodejs.org/en/

Install the cordova
====================
sudo npm install -g cordova

'Exclude sudo if not in OS X

Install Ionic
==============
Ionic comes with a convenient command line utility to start, build, and package Ionic apps.

To install it, simply run:

$ sudo npm install -g ionic

Create the project
==================
Now, we need to create a new Cordova project somewhere on the computer for the code for our app:

$ ionic start SampleProject blank

That will create a folder called SampleProject in the directory the command was run. Next, we will go into that directory and list the contents. Here is what the outer structure of your Ionic project will look like:

$ cd SampleProject && ls

├── bower.json     // bower dependencies
├── config.xml     // cordova configuration
├── gulpfile.js    // gulp tasks
├── hooks          // custom cordova hooks to execute on specific commands
├── ionic.project  // ionic configuration
├── package.json   // node dependencies
├── platforms      // iOS/Android specific builds will reside here
├── plugins        // where your cordova/ionic plugins will be installed
├── scss           // scss code, which will output to www/css/
└── www            // application - JS code and libs, CSS, images, etc.
If you are planning on using any version control system, you can go ahead and set it up in this new folder.

Configure Platforms
====================
Now, we need to tell ionic that we want to enable the iOS and Android platforms. Note: unless you are on MacOS, leave out the iOS platform:

$ ionic platform add ios
$ ionic platform add android

If you see errors here, make sure to follow the platform guides above to install necessary platform tools.

Test it out
============
Just to make sure the default project worked, try building and running the project (substitute ios for android to build for Android instead):

$ ionic build ios
$ ionic emulate ios

Test it out in browser
======================
Use ionic serve to start a local development server for app dev and testing. This is useful for both desktop browser testing, and to test within a device browser which is connected to the same network. Additionally, this command starts LiveReload which is used to monitor changes in the file system. As soon as you save a file the browser is refreshed automatically. 

$ ionic serve [options]

Running your app
================
Deploys the Ionic app on specified platform devices. If a device is not found it'll then deploy to an emulator/simulator.

$ ionic run ios [options]


Instructions for Running this IonicCharts application
======================================================
Use the below command to install the required dependencies

$ bower update 

