import puppeteer from "puppeteer";

///////DEPRECATED/////////////////////
//////////////////////////////////////
/*
var newsPath = window.location.href;

console.API;

if (typeof console._commandLineAPI !== "undefined"){
    console.API = console._commandLineAPI;   //chrome 
} else if (typeof console._inspectorCommandLineAPI !== "undefined"){
    console._inspectorCommandLineAPI;      //safari
} else if (typeof console.clear !== "undefined") {
    console.API = console;
}
*/
/////////////////////////////////////////



/* 
getDetails saves in a JSON file the number, title, number of points and comments
via the console method save(). 
*/
const getDetails = async() =>{

    ///////DEPRECATED/////////////////////
    //console.API.clear();

    // Launch the browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
      });

    // Open a new page
    const page = await browser.newPage();
    

    await page.goto("https://news.ycombinator.com", {
        waitUntil: "domcontentloaded",
    });
  
    const elements = await page.evaluate(()=>{
        
        function extractPointsAndComments(inputString) {
            // Initialize default values
            let points = 0;
            let comments = 0;
        
            // Define regular expressions for points and comments
            let pointsRegex = /(\d+)\s+points/;
            let commentsRegex = /(\d+)\s+comments/;
        
            // Extract points
            let pointsMatch = inputString.match(pointsRegex);
            if (pointsMatch) {
                points = parseInt(pointsMatch[1], 10);
            }
        
            // Extract comments
            let commentsMatch = inputString.match(commentsRegex);
            if (commentsMatch) {
                comments = parseInt(commentsMatch[1], 10);
            }
        
            return [points, comments ];
        }
        
        
        console.save = function(data, filename){
            if(!data) {
                console.error("Console.save: no data")
                return;
            }
        
            if(!filename) filename = "myThings.json"
        
            if(typeof data === "object"){
                data = JSON.stringify(data, undefined, 4)
            }
        
            var blob = new Blob([data], {
                type: "text/json"
            }),
            e = document.createEvent("MouseEvents"),
            a = document.createElement("a")
        
            a.download = filename
            a.href = window.URL.createObjectURL(blob)
            a.dataset.downloadurl = ["text/json", a.download, a.href].join(":")
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
        }

        let myThingList = [];

        // Loop through the first 30 elements with the class name "athing"
        for (let i = 0; i < 30; i++) {
    
            //Classes athing and subtext are in the same level node of the HTML
            let athingElement = document.getElementsByClassName("athing")[i];
            let subtextElement = document.getElementsByClassName("subtext")[i];
        
            if (athingElement && subtextElement) {
                athingObject = {};
    
                // Find the child element with the class "title" within the current "athing" and assign to numberText its innerText
                let numberText = athingElement.getElementsByClassName("title")[0].innerText;
                // Find the child element within the current class "titleline"
                let titleElement = athingElement.getElementsByClassName("titleline")[0].firstChild;
    
    
                if(titleElement) {
             
                    athingObject.number = numberText;
                    athingObject.title = titleElement.innerText;
    
                    pointsAndComments = extractPointsAndComments(subtextElement.innerText);
                    athingObject.points = pointsAndComments[0];
                    athingObject.comments = pointsAndComments[1];
                
                    myThingList.push(athingObject);
            
                } else {
                    console.warn(`Title element not found for athing at index ${i}.`);
                }
            
            } else {
                console.warn(`Either athing or subtext element at index ${i} not found.`);
            }
        }
    
        console.save(myThingList);
    });

    // Close the browser
    await browser.close();

}


getDetails();
