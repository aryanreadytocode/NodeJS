const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!")
// })

// try {
//     const data = fs.readFileSync('message.txt', "utf8");
//     console.log(data);
// }catch (err) {
//     console.log(err);
// }

fs.readFile("message.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
})