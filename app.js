
const axios = require('axios')
const inquirer = require('inquirer')
const spotify = require('node-spotify-api')
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
          name: 'songKeyword',
          message: 'Artist, album, or track title?',
        })
        .then(songData =>{
          console.log(songData.songKeyword)
            //SPOTIFY SEARCH
        })
        .catch(e => console.log(e))
        break;
      case 'Concert':
        inquirer.prompt({
          type: 'input',
          name: 'concertKeyword',
          message: 'Please provide the artist or tour name',
        })
        .then(concertData =>{
          console.log(concertData.concertKeyword)
          //BandsInTown API stuff
        })
        .catch(e => console.log(e))
        break;
      case 'Movie':
        inquirer.prompt({
          type: 'input',
          name: 'movieKeyword',
          message: 'Movie title?',
        })
          .then(movieData =>{
            console.log(movieData.movieKeyword)
            //OMDBAPI SEARCH
          })
          .catch(e => console.log(e))
        break;
      default:
        console.log('How did you manage to select something other than what I asked for?')
      }
    })
  .catch(err => console.log(err))
}
promptData()