require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// var bit = new BandsInTown(keys.bandsintown);
// var omdb = new Omdbapi(keys.omdbapi);
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");

// * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

// * [Axios](https://www.npmjs.com/package/axios)

// * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

// * [Moment](https://www.npmjs.com/package/moment)

// * [DotEnv](https://www.npmjs.com/package/dotenv)

var liriArgs = process.argv[2];
var searchName = process.argv[3];


// 9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`

// 1. `node liri.js concert-this <artist/band name here>`

// Then create a request with axios to the queryUrl
// ...

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.


if (liriArgs === "do-what-it-says") {

    // 4. `node liri.js do-what-it-says`

    //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

        liriArgs = dataArr[0];
        searchName = dataArr[1];

        console.log(liriArgs);
        console.log(searchName);
    });

};





if (liriArgs === 'concert-this') {

    // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    //      * Name of the venue

    //      * Venue location

    //      * Date of the Event (use moment to format this as "MM/DD/YYYY")


    var queryUrl = "https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=c76cf777a-6f3d-4954-86a5-130ab9a38e89";


    console.log(queryUrl);

    var response;

    axios.get(response).then({
        function(response) {

            if (err) {
                console.log("Error occured: " + err)
            }

            console.log(response);
        }
    });



    // var dataBand = JSON.parse(body);

    // console.log(body)

    //     for (var i = 0; i < dataBand.length; i++) {
    //         //Get venue name
    //         console.log("Venue: " + dataBand[i].venue.name);

    //         // var dat = (response.eventDate)
    //         // dat = moment().format(MM / DD / YYYY);
    //     }
    //     var date = data[i].datetime;
    //     date = moment(date).format("MM/DD/YYYY");
    //     console.log("Date: " + date)

    //     axios.get(queryUrl).then(
    //         function (body) {
    //             console.log("Upcoming concerts for " + searchName + ": ");
    //             // console.log("Name of the Venue: " + body.venue.name);
    //             // var response = JSON.parse(response)
    //             // for (var set in body) {
    //             //     var date = moment(body[set].datetime).format("MM/DD/YYYY")
    //             //     console.log(body[set].venue.city + ", " + "at " + body[set].venue.name + ", " + "on " + date)
    //             // }
    //             // console.log("Venue Location: " + response.Location);
    //             // console.log("Date of event: " + dat);
    //         });
    // } else {
    //     console.log("Location: " + dataBand[i].venue.city + ", " + dataBand[i].venue.region + ", " + dataBand[i].venue.country);
    //     //Append data to log.txt
    //     fs.appendFileSync("log.txt", "Location: " + dataBand[i].venue.city + ", " + dataBand[i].venue.region + ", " + dataBand[i].venue.country + "\n", function (error) {
    //         if (error) {
    //             console.log(error);
    //         };
    //     });
    // }




} else if (liriArgs === 'spotify-this-song') {
    // 2. `node liri.js spotify-this-song '<song name here>'`

    var spotify = new Spotify(keys.spotify);
    // id: 3dd9aee1e0f74e80ad93f4811fa2064a,
    // secret: 8dee61b1be244f718fdeea29850dca6d


    spotify.search({ type: searchName, query: 'artists' }, function (response) {
        console.log(response);
    })
    // .catch(function (err) {
    //     console.log(err);
    // });

    axios.get(response).then({
        function(response) {

            if (err) {
                console.log("Error occured: " + err)
            }

            console.log(response);
        }
    });



    //    * This will show the following information about the song in your terminal/bash window

    //      * Artist(s)

    //      * The song's name

    //      * A preview link of the song from Spotify

    //      * The album that the song is from

    //    * If no song is provided then your program will default to "The Sign" by Ace of Base.

    //    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

    //    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

    //    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

    //    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

    //    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

    //    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).


} else if (liriArgs === 'movie-this') {
    // 3. `node liri.js movie-this '<movie name here>'`

    //    * This will output the following information to your terminal/bash window:

    //      ```
    //        * Title of the movie.
    //        * Year the movie came out.
    //        * IMDB Rating of the movie.
    //        * Rotten Tomatoes Rating of the movie.
    //        * Country where the movie was produced.
    //        * Language of the movie.
    //        * Plot of the movie.
    //        * Actors in the movie.
    //      ```

    //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    //      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    //      * It's on Netflix!

    //    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

    var queryUrl = "http://www.omdbapi.com/?t=" + searchName + "&r=json&tomatoes=true&y=&plot=long&apikey=19a8804b";

    console.log(queryUrl);

    var response;
    // Then create a request with axios to the queryUrl

    axios.get(queryUrl).then(
        function (response) {
            console.log("Movie Name: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("Country Where Movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie: " + response.data.Plot);
            console.log("Actors in the movie: " + response.data.Actors);
        }
    );

}

// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

fs.appendFile("log.txt", liriArgs + ", " + searchName + ", ", function (err, data) {
    if (err) {
        return console.log(err);
    }
    else {
        console.log("Content Added!");
    }
});

// ### Reminder: Submission on BCS

// * Please submit the link to the Github Repository!

// - - -

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

// - - -

// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

// ### One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.



// var spotify = new Spotify(keys.spotify);


