# OneTab browser export script

A simple browser console script that helps exporting saved [OneTab](https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall) meta data.
I was trying out [backupOneTab](https://github.com/itsjoshthedeveloper/backupOneTab) and [ran into some problems](https://github.com/itsjoshthedeveloper/backupOneTab/issues/1).

Because I wanted my urls to be at least saved I wrote this script.
It exports more than the default export function of OneTab. You will get an array with the following format:

```js
[
  {
    groupTitle, // tab group titles
    created,    // created date
    tabLinks: { // the individual links of a tab group with:
      {
        link,   // url
        title,  // title
      }
    },
    isLocked,   // if tab group is locked
    isStarred,  // if tab group is starred  
  },
  [...]
]
```

## Usage

1) Copy the content of [export.js](export.js) to the clipboard.
2) Open a OneTab page in the browser.
3) Open the Developer Tools (e.g. mac <kbd>CMD</kbd> + <kbd>ALT</kbd> + <kbd>I</kbd>).
4) Paste the export.js script.

You will see the result of the export as a return value. It's already copied in your clipboard so you can you paste it e.g. in a JSON file.

## Note

After I already created this I found [onetab-export-to-json](https://github.com/jianyuan/onetab-export-to-json) which exports directly from the LevelDB database.
I didn't test it though.
