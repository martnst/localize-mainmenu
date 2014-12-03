localize-mainmenu
=================

Command line tool that localizes the common main menu items of an OS X app automatically.


# Problem

Localizing Apps for OS X requires to also localize the main menu. It include a bunch of items that are common throughout all OS X apps (like ``Copy``, ``Paste`` and so forth). Unfortunately Apple does not automatically provide localizations for those keys after adding a new langange. So either you or your translators need to take care of it. 

# Solution
Let this small command line tool take care of the common menu items for you. So neither you nor your translators need to bother localizing them. Furthermore the localization is based on Apple's build-in apps. This means you do not need to worry about to have the exact same variation. 


## Install

``[sudo] npm install localize-mainmenu -g``


## How it works 


1. Add a new language in XCode.

2. Export a xliff file.
	1. Select your project file in the project navigator.
	2. [Main Menu] Editor > Export for Localization… 
	
3. Run **localize-mainmenu** from your comman line.
	
	``$ cd /path/to/your/export``
	
	``$ localize-mainmenu de.xliff de_menu_done.xliff``
	
4. Send the output file ``de_menu_done.xliff`` to you translator(s) *to get the actual important stuff localized*.
5. Import the xliff file back in 
	1. Select your project file in the project navigator.
	2. [Main Menu] Editor > Import Localizations… 
	

## Requirements

- XCode 6 *(or higher)*
- [Node.js](http://nodejs.org)


## Contribution

Feel free to contribute, especially by adding more languages. **Make sure the localization matches Apple's strings so that the Apps won't feel alien.**

Please fork the repo and create a pull request when you are done. 

 


