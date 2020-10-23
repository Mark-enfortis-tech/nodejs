'use strict';
const fs = require('fs');
const filename = process.argv[2];

if(!filename) {
    throw Error('A file to watch must be provided');
}

fs.watch(filename, (eventType, filename) => {
    console.log(`File changed, eventType ${eventType}`);
    if(filename) {
        console.log(`File changed, filename: ${filename}`);
    } else {
        console.log('File changed but filename not provided');
    }
});

console.log('now watching target.txt for changes...');
