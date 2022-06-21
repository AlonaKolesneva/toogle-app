const { Model } = require("objection");

class Timers extends Model {
  static get tableName() {
    return "processes";
  }

  static get jsonSchema() {
    return {
      type: "object",

      properties: {
        id: { type: "integer" },
        date: {type: "date"},
        },
        start_time: {type: "time"},
        finish_time: {type: "time"},
        name: {type: "string"},
        user_id: {type: "integer"},
      }
    };

}

module.exports = Timers;
  