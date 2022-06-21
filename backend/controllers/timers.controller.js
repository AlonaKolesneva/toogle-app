//if user authenticated, then allow to access the page
//get user id from token

const Timers = require("../models/timers.model");

exports.get_timers_by_user_id = (req, res) => {

  data = Timers.findAll();

  res.json({data});
};
