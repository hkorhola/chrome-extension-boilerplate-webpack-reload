# Chrome extension boilerplate with webpack and hot reload

## Purpose
This Chrome extension boilerplate is with webpack and hot reload. It is a simple app that lets user change the page background colour by clicking the extension button on Chrome toolbar and then clicking the coloured button. User can also change the colour from settings by selecting right mouse click on top of extension popup and Settings. It opens a new tab for changing the colour.


## Development

1. Clone repository
2. Cd into it
3. Run `npm install` 
4. Open new tab, [Chrome extensions](chrome://extensions)
5. Click "load unpacked"
6. Select the folder `dist` from this project
8. Test that extension works by clicking its popup and by opening options
9. Run `npm run dev` that loads webpack and hot reloading is enabled
10. Start developing

Note that unfortunately the background.js service worker is not hot reloaded, it is in copy webpack section. If you change service worker code, you need to reload the extension from [Chrome extensions](chrome://extensions) by clicking reload.

Note that the distribution of the extension to Chrome marketplace is not in scope of this project. You need to create a zip file from the package. See more (Publish to Chrome store)[https://developer.chrome.com/docs/webstore/publish/]