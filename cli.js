#!/usr/bin/env node
var exec = require('child_process').exec;

// Grab CLI args
const [,, ...args] = process.argv;

const newDir = args[0];

const command = `mkdir -p ${newDir} && cp ${__dirname}/files ${newDir} && cd ${newDir} && npm i`;

dir = exec(command, function(err, stdout, stderr) {
    if (err) {
      // should have err.code here?  
    }
    console.log(stdout);
    console.log("Start your new nodejs app with `npm start` or `nodemon app.js`")
  });
