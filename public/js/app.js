define(['backbone','reactViews/memberList','reactViews/common/header','reactViews/common/footer','react'], function (Backbone, memberList,header,footer,React) {
  
	var app = Backbone.Router.extend({

		initialize : function(){
				
       React.render(header.el(), document.getElementById("appHeader"));
       React.render(footer.el(), document.getElementById("appFooter"));   



		},
		 routes: {
	        "members": "getMembers",
	        "member/:id" : "getMemberDetails"	           
       	},
       	getMembers : function(){
      	
        var sdsd = React.render(memberList.el(), document.getElementById("appSection"));

        console.log(sdsd);
       		
        console.log(sdsd.setState({"name" : "ramesh"}));
          
      
       	

        },
       	getMemberDetails : function(){
       		console.log("defaultRoute");
       	}
  	});

	return app;
});