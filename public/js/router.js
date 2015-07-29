define(['backbone', 'react'], function (Backbone, React) {
  return Backbone.Router.extend({
   
    routes: {
      '*default': 'defaultAction'
    },
    
    defaultAction: function () {

    }
  


  });
});