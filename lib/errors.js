/**
 * Created by bilal on 3/27/16.
 */

module.exports = function(req, res){
  return function(err) {
    res.status(500).send({
        error: err.toString(),
        type: "error"
    })
  };
};