import fs from 'fs';

// Import the filterAndSortEntries function from the src folder
import {filterAndSortEntries} from '../src/filterOperations.js';

// Read and process the JSON file. Make sure to run on terminal this script on the main folder. 
fs.readFile('out/myThings.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    let entries = JSON.parse(data);
    const { moreThanFiveWords, fiveOrFewerWords }  = filterAndSortEntries(entries);

    // Write the sorted data according to number of comments to a new JSON file
    fs.writeFile('out/moreThanFiveWord.json', JSON.stringify(moreThanFiveWords, null, 4), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Sorted data has been saved to moreThanFiveWord.json');
    });

    // Write the sorted data according to number of comments to a new JSON file
    fs.writeFile('out/fiveOrFewerWords.json', JSON.stringify(fiveOrFewerWords, null, 4), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Sorted data has been saved to fiveOrFewerWords.json');
    });
});