# create-node-project

## Installation:
`npm i -g create-node-project`

## Running
`create-node-project <target_dir>` 

## Usage
`create-node-project` is intended to make creating backend nodejs apps easy by minimizing the amount of boilerplate needed, and by setting up a structure that you can easily extend.  

`create-node-project <target_dir>` sets up the following file structure in the target directory 

## File Structure
```
 app.js
 routes/
  - index.js
  - user.js
 db/
  - index.js
```


## Starting The Project

create-node-project also installs the required packages for you, including [pg](https://www.npmjs.com/package/pg) and [express-promise-router](https://www.npmjs.com/package/express-promise-router). All you have to do is set up the database from the command line

First, ensure postgres is set up using `psql`. Ensure your user, host and database names exist, or specify a connection string instead. You can edit the postgres connection configuration in `db/index.js` at the following lines

```
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DATABASE_NAME,
  // connectionString: process.env.DATABASE_STRING,
});
```

create-node-project starts off with a `routes/user.js` file that assumes you have a table called `users` in your postgres database. This is not required for setup, but the route will not work without it. 

To start the project, `cd` into your target directory and run `node app.js` or `npm start`. You can also run it with `nodemon app.js` 

