                            // IN THIS TASK:
// 1. Create a script file that fetches data from JSON PLACEHOLDER POSTS
// 2. Write the JSON data gotten from the API to a file called posts.json or posts.txt
// 3. posts.json or post.txt should be in a directory file called result.
// 4. Create a github repository and push your work.


const https = require("https");
const fs = require("fs");


let data = [];

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  res.on("data", (chunk) => {
    data += chunk;
  });


  res.on('end', () => {
      fs.writeFile('./result/posts.json', data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('*******************************************************');
      console.log('*******************************************************');
      console.log('Felicitations!!! Your file has been created successfully.');
      console.log('*******************************************************');
      console.log('*******************************************************');
    });
  });
});