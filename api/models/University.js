/**
 * University.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      UnivName:{
        type:'string',
        required:'true'
      },
      UnivType:{
        type:'string'
      },
      UnivRank:{
        type:'integer'
      },
      UnivYear:{
        type:'integer'
      },

      allcourses:{
        collection:'course',
        via:'univ_id'
      }

  }
};

