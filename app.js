
const axios = require('axios')
const inquirer = require('inquirer')

//start by asking user for what they're looking for: song, concert, or movie.

inquirer.prompt(
  {
    type: 'list',
    name: 'dataType',
    message: 'What type of information are you looking for?',
    choices: [
        'Song', 'Concert', 'Movie'
    ]
  })
  .then(data => {
    switch(data.dataType) {
      case 'Song':
        
        break;
      case 'Concert':
        break;
      case 'Movie':
        break;
    }
  })
  .catch(err => console.log(err))