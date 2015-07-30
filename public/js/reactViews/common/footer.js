define(['react'], function(React) {

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                title : "mindQ",
                username: "rajesh" 
            });
        },

        render: function() {
            return ( 
                React.createElement("div", {className: "row footer-row"}, 
                    React.createElement("div", {className: "col-md-12"}, 
                           React.createElement("div", {className: "text-right title"})
                    )
	           )
            );
        }
    });

    var componentObj = {};

    componentObj.el = function() {
        return React.createElement(reactComponent);
    }
    return componentObj;

});