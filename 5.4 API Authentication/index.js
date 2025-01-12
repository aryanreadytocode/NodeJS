import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "raj_ji";
const yourPassword = "R12345a";
const yourAPIKey = "2ef96402-fc04-4144-b436-b1861ce73e7d";
const yourBearerToken = "3b38abcf-294c-45f9-b22c-d7e79505ddce";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    console.log("responsebody", response.data);
    const responseBody = JSON.stringify(response.data);
    res.render("index.ejs", {
      content: responseBody
    });
  } catch(error) {
    console.error(error);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 const URL = "https://secrets-api.appbrewery.com/all?page=1"
 try {
  const response = await axios.get(URL, {
    auth: {
      username:yourUsername,
      password:yourPassword,
    },
  });
  console.log("responseBody", response.data);
  const responseBody = JSON.stringify(response.data);
  res.render("index.ejs", {
    content: responseBody
  });
 }catch(error) {
    console.error(error);
 }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const URL = "https://secrets-api.appbrewery.com/filter"
 try {
  const response = await axios.get(URL, {
    params: { score: '4', apiKey: yourAPIKey },
  });
  console.log("responseBody", response.data);
  const responseBody = JSON.stringify(response.data);
  res.render("index.ejs", {
    content: responseBody
  });
 }catch(error) {
    console.error(error);
 }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  const URL = "https://secrets-api.appbrewery.com/secrets/1"
  try {
   const response = await axios.get(URL, {
    headers: { Authorization: `Bearer ${yourBearerToken}`},
   });
   console.log("responseBody", response.data);
   const responseBody = JSON.stringify(response.data);
   res.render("index.ejs", {
     content: responseBody
   });
  }catch(error) {
     console.error(error);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
