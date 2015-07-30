define(['react'], function( React ) {
		
	var reactComponent = React.createClass({
	  render: function () {
	    return (
	      <div>
	        <div id="main-container">Hello main-container</div>
	      </div>
	    );
	  }
	});

	var componentObj = {};
	componentObj.el = function(){
		return React.createElement(reactComponent);
	} 
	return componentObj; 

});