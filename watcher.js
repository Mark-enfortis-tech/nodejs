'use strict';
const fs = require('fs');


fs.watch(filename, (eventType, filename) => {
    console.log(`File changed, eventType ${eventType}`);
    if(filename) {
        console.log(`File changed, filename: ${filename}`);
    } else {
        console.log('File changed but filename not provided');
    }
});

console.log('now watching target.txt for changes...');
