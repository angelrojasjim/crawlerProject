The source folder contains the crawler.js file to create a web crawler using scraping techniques to extract the first 30 entries from [this website](https://news.ycombinator.com/). We care about the number, the title, the points, and the number of comments for each entry. In console of your preferred browser, you can copy and paste 
the script to produce the downloadable JSON file myThing.  

From there, we are able to perform a couple of filtering operations defined in filterOperations.js:

- Filter all previous entries with more than five words in the title ordered by the number of comments first.
- Filter all previous entries with less than or equal to five words in the title ordered by points.
When counting words, consider only the spaced words and exclude any symbols. For instance, the phrase “This is - a self-explained example” should be counted as having 5 words. 

The sorted file myThingSorted.js is saved in the "out" folder in case one saves the original JSON file in the mentioned folder. 
