define(['backbone','home','react'], function (Backbone, home, React) {
  
	var app = Backbone.Router.extend({

		initialize : function(){
				
		},
		 routes: {
	        "members": "getMembers",
	        "member/:id" : "getMemberDetails"	           
       	},
       	getMembers : function(){
       		React.render(home.el(), document.getElementById("appHeader"));

       		console.log("getPost");
       	},
       	getMemberDetails : function(){
       		console.log("defaultRoute");
       	}
  	});

	return app;
});