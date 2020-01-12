const axios = require("axios");
const inquirer = require("inquirer");
const htmltoGenerate = require("./htmltoGenerate");
const fs = require("fs");
// const convertFactory = require('electron-html-to');
// const electron = require("electron");
// const conversion = convertFactory({
//   converterPath: convertFactory.converters.PDF});



inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`
    console.log(queryUrl)

    axios.get(queryUrl).then(function(res) {
        const name = res.data.name;
        console.log(name);
        const avatarURL = res.data.avatar_url;
        console.log(avatarURL);
        const userLocation = res.data.location; 
        console.log(userLocation);
        const repoURL = res.data.repos_url;
        console.log(repoURL);
        const blogURL = res.data.blog;
        console.log(blogURL);
        const bio = res.data.bio;
        console.log(bio);
        const repoNo = res.data.public_repos;
        console.log(repoNo);
        const followerNo = res.data.followers;
        console.log(followerNo);
        const followingNo = res.data.following;
        console.log(followingNo);
        
        fs.writeFile("html.html", htmltoGenerate(res), function(err) {
          if (err) {
            throw err;
          }});
          
          // conversion(htmltoGenerate(res), function(err, result) {
          //   if (err) {
          //     return console.error(err);
          //   }
          
          //   result.stream.pipe(fs.createWriteStream("resume.pdf"));
          //   conversion.kill();
          // }); 

      });
      
    });
