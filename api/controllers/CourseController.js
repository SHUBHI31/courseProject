/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  search : function (req, res)
  {
    var result=req.param('searchstring');

      Course.find({CourseName:result}).populate("univ_id").exec(function (err, usersName){
        if (err) {
          return res.serverError(err);
        }
        if(typeof(usersName)!='undefined')
        return res.json(usersName);
        else {
          University.find({UnivName: result}).populate("allcourses").exec(function (err, usersName) {
            if (err) {
              return res.serverError(err);
            }

            return res.json(usersName);
          });
        }
      });

  },
  'new' : function(req,res)
  {
    res.view();
  }

};

