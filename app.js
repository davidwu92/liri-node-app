
const axios = require('axios')
const inquirer = require('inquirer')
let Spotify = require('node-spotify-api')
  let spotify = new Spotify({
    id: '0817ccada03149868161a81a9a5feb22',
    secret: 'f9c260ba0f52454bbe3540d81376a605',
  }) 
const omdb = require('omdb')

//start by asking user for what they're looking for: song, concert, or movie.

const promptData = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'dataType',
      message: 'What type of information are you looking for?',
      choices: [
        'Song', 'Concert', 'Movie'
        ]
    }
  )
  .then(data => {
    switch(data.dataType) {
      case 'Song':
        inquirer.prompt({
          type: 'input',
          name: 'songKeywords',
          message: 'Artist, album, or track title?',
        })
        .then(songData =>{
          let song = songData.songKeywords;
          console.log("Searching for tracks related to " + song);
          //SPOTIFY API STUFF

        })
        .catch(songError => console.log(songError))
        break;
      
        case 'Concert':
        inquirer.prompt({
          type: 'input',
          name: 'concertKeywords',
          message: 'Please provide the artist or tour name',
        })
        .then(concertData =>{
          let concert = concertData.concertKeywords;
          console.log(concert);
          //BandsInTown API stuff
        })
        .catch(concertError => console.log(concertError))
        break;

      case 'Movie':
        inquirer.prompt({
          type: 'input',
          name: 'movieKeywords',
          message: 'Movie title?',
        })
          .then(movieData =>{
            let movie = movieData.movieKeywords;
            movie = movie.split(" ").join("+");
            console.log(movie)
        //OMDBAPI SEARCH
            axios.get(`http://omdbapi.com/?t=${movie}&apikey=trilogy`)
              .then(movieData => {
                console.log(movieData.data)
              })
              .catch(e=>console.log(e))
          })
          .catch(movieError => console.log(movieError))
        break;
        
      default:
        console.log('How did you manage to select something other than what I asked for?')
      }
    })
  .catch(err => console.log(err))
}
promptData()