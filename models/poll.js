'use strict';
module.exports = function(sequelize, DataTypes) {
  var Poll = sequelize.define('Poll', {
    name: DataTypes.STRING,
    creator: DataTypes.STRING,
    open: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Poll;
};