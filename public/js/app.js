define(['backbone'], function (Backbone) {
  
	var app = Backbone.Router.extend({

		initialize : function(){
			
		
		},
		 routes: {
	        "members": "getMembers",
	        "member/:id" : "getMemberDetails"	           
       	},
       	getMembers : function(){
       		console.log("getPost");
       	},
       	getMemberDetails : function(){
       		console.log("defaultRoute");
       	}
  	});

	return app;
});