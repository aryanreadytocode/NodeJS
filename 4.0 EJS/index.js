//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express"


const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    const d = new Date("Jan 04, 2025 11:13:00");
    let day = d.getDay();
    var days = "it's weekday";
    var adv = "it's time to work hard!"
    if(day === 6 || day === 0) {
       days = "weekend";
       adv = "it's time to have fun!";
    }
    res.render("index.ejs",{
        dayType: days, 
        advice: adv
    }
    );
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})