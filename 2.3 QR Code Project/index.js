import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
import { url } from 'inspector';

inquirer
  .prompt([
    {
        message: "Type your url: ",
        name: "URL"
        
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var text = answers.URL
    var qr_svg = qr.image(text);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    fs.writeFile("URL.txt", text, (err) => {
        if(err) throw err;
        console.log("The file has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });