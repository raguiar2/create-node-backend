#!/usr/bin/env node
var exec = require('child_process').exec;

// Grab CLI args
const [,, ...args] = process.argv;

if (args.length < 1) {
  console.log("\nusage: create-node-project <target_dir>\n")
  return;
}

const newDir = args[0];

console.log("Creating directory and installing packages...");

const command = `mkdir -p ${newDir} && cp -r ${__dirname}/files/. ${newDir} && cd ${newDir} && npm i`;

dir = exec(command, function(err, stdout, stderr) {
    if (err) {
      console.err(err)
      console.log("Project was not successfully created. Please check error message above for more details.")
      return;
    }
    console.log("Project successfully created!");
    console.log("Start your new nodejs app with npm start or nodemon app.js");
  });

dir.stdout.pipe(process.stdout);
dir.stderr.pipe(process.stderr);