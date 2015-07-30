define(['react'], function(React) {

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( React.createElement("div", null, 
                React.createElement("div", {id: "main-container"}, " Hello ", 
                    this.state.name, 
                " ")
	      )
            );
        }
    });

    var componentObj = {};
    componentObj.update = function() {

    };

    componentObj.component = new reactComponent();

    componentObj.el = function() {

        return React.createElement(reactComponent);
    }
    return componentObj;

});