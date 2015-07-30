define(['react'], function(React) {

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( 
                React.createElement("tr", null, React.createElement("td", null, "1"), React.createElement("td", null, "Ramesh Polishetti"), React.createElement("td", null, "Hyderabad"), React.createElement("td", null, "+91 9701181405"), React.createElement("td", null, React.createElement("span", {"aria-hidden": "true", className: "glyphicon glyphicon-pencil"})))
            );
        }
    });

    var componentObj = {};
    componentObj.update = function() {

    };

    componentObj.component = reactComponent;

    componentObj.el = function() {

        return React.createElement(reactComponent);
    }
    return componentObj;

});