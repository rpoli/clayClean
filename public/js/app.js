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
      	

        memberList.component.prototype.componentDidMount = function(){
          console.timeEnd("original");
        }

        var memberListComponent = React.render(memberList.el(), document.getElementById("appSection"));       
       
        console.log(React.findDOMNode(memberListComponent.refs.refreshIcon));


        React.findDOMNode(memberListComponent.refs.refreshIcon).onclick = function(){
          console.time("recordupdate");
          //memberListComponent.updateFirstChild({name : "ramesh"}, 0);
          memberListComponent.setState({title : "ramesh"});
          //memberListComponent.forceUpdate();
          console.timeEnd("recordupdate");

        };

        memberListComponent.componentDidUpdate = function(){
          console.log("rendered");
        };


        },
       	getMemberDetails : function(){
       		console.log("defaultRoute");
       	}
  	});

	return app;
});