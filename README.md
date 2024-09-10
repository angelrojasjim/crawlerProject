The source folder contains the crawler.js file to create a web crawler using scraping techniques to extract the first 30 entries from [this website](https://news.ycombinator.com/). We care about the number, the title, the points, and the number of comments for each entry. In console of your preferred browser, you can copy and paste 
the script to produce the downloadable JSON file myThing.  

From there, we are able to perform a couple of filtering operations defined in filterOperations.js:

- Filter all previous entries with more than five words in the title ordered by the number of comments first.
- Filter all previous entries with less than or equal to five words in the title ordered by points.
When counting words, we consider only the spaced words and exclude any symbols. For instance, the phrase “This is - a self-explained example” should be counted as having 5 words. 

The files moreThanFiveWords.json and fiveOrFewerWords.json are saved in the "out" folder in case one saves the downloadable JSON file myThings.json in the same folder. 

To run automatically the tasks above, we have a script run-tasks.sh.
Modify its permission to make it executable

chmod +x run-tasks.sh

And run the srcipt to produce the output files. Recall we must need the myThing.json file in the out folder. 

