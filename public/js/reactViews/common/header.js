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
                React.createElement("div", {className: "row header-row"}, 
                    React.createElement("div", {className: "col-md-12"}, 
                           React.createElement("div", {className: "text-right title"}, React.createElement("h3", {className: "text-right"}, " ", this.state.title, " "))
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