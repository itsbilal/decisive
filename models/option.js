'use strict';
module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Poll.hasMany(models.Option, {as: "options", foreignKey: 'pollId'});
      }
    }
  });
  return Option;
};