import express from "express";
const app = express();
const port = 3000;

app.get("/about", (req, res ) => {
    // res.send("Hello, World!");
    res.send("<h1>My name is Raj Aryan</h1>")
});

app.get("/", (req, res ) => {
    res.send("<h1> Hello, World! </h1>")
});


app.get("/contact", (req, res ) => {
    res.send("<h1> +91-880542737</h1>")
});




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
