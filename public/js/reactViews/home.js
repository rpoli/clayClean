define(['react'], function( React ) {
		
	var reactComponent = React.createClass({displayName: "reactComponent",
	  render: function () {
	    return (
	      React.createElement("div", null, 
	        React.createElement("div", {id: "main-container"}, "Hello main-container")
	      )
	    );
	  }
	});

	var componentObj = {};
	componentObj.el = function(){
		return React.createElement(reactComponent);
	} 
	return componentObj; 

});