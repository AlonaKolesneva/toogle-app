const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "mytoggle"
  }
});

knex.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = knex;
