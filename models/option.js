'use strict';
module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
    pollId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Poll.hasMany(models.Option, {as: "options"});
      }
    }
  });
  return Option;
};