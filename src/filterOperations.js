
const fs = require('fs'); 

function filterAndSortEntries(entries) {

    // Helper function to count words in a title using regex (can be improved).
    function countWords(title) {
        return title.split(/[^a-zA-Z0-9]*\s/).length  
    }

    // Filter and sort entries
    let moreThanFiveWords = entries.filter(entry => countWords(entry.title) > 5);
    let fiveOrFewerWords = entries.filter(entry => countWords(entry.title) <= 5);

    // Sort entries with more than five words by number of comments (ascending with respect to comments)
    moreThanFiveWords.sort((a, b) => a.comments - b.comments);

    // Sort entries with five or fewer words by points (ascending with respect to points)
    fiveOrFewerWords.sort((a, b) => a.points - b.points);

    // Combine the two sorted arrays
    return moreThanFiveWords.concat(fiveOrFewerWords);
}

// Read and process the JSON file. Make sure to run on terminal this script on the main folder. 
fs.readFile('../out/myThing.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    let entries = JSON.parse(data);
    let sortedEntries = filterAndSortEntries(entries);

    // Write the sorted data to a new JSON file
    fs.writeFile('../out/myThingSorted.json', JSON.stringify(sortedEntries, null, 4), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Sorted data has been saved to myThingSorted.json');
    });
});