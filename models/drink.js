//Import and require orm
var orm = require("../config/orm.js");
//Create functions that will interact with the database
var drink = {
    all: function(cb) {
      orm.all("drinks", function(res) {
        cb(res);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.create("drinks", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("drinks", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("drinks", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = drink;