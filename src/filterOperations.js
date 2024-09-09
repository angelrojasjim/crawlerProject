

export function filterAndSortEntries(entries) {

    // Helper function to count words in a title using regex (can be improved).
    function countWords(title) {
        return title.split(/[^a-zA-Z0-9]*\s/).length; 
    }

    // Filter and sort entries
    let moreThanFiveWords = entries.filter(entry => countWords(entry.title) > 5);
    let fiveOrFewerWords = entries.filter(entry => countWords(entry.title) <= 5);

    // Sort entries with more than five words by number of comments (ascending with respect to comments)
    moreThanFiveWords.sort((a, b) => a.comments - b.comments);

    // Sort entries with five or fewer words by points (ascending with respect to points)
    fiveOrFewerWords.sort((a, b) => a.points - b.points);

    // Combine the two sorted arrays
    return {moreThanFiveWords, fiveOrFewerWords};
}

