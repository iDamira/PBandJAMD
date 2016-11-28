/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const pg       = require('pg-promise')({});

const pgConfig = {  host:     process.env.PG_HOST,
                    port:     process.env.PG_PORT,
                    database: process.env.PG_DATABASE,
                    user:     process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

<<<<<<< HEAD

var db = pgp(process.env.DATABASE_URL || 'postgres://idamira@localhost:5432/pbandjamd');
// const db       = pg(pgConfig);
=======
const db = pg(process.env.DATABASE_URL || pgConfig);

>>>>>>> af88b30729ab23091b5af6502b6741383d9b7062
module.exports = db;
