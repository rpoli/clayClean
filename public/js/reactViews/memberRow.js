define(['react'], function(React) {

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( 
                React.createElement("tr", {ref: "liElement"}, React.createElement("td", null, this.props.index), React.createElement("td", null, this.props.name), React.createElement("td", null, this.props.location), React.createElement("td", null, this.props.contact), React.createElement("td", null, React.createElement("span", {"aria-hidden": "true", className: "glyphicon glyphicon-pencil"})))
            );
        }
    });

    var componentObj = {};
    componentObj.update = function() {

    };

    componentObj.component = reactComponent;

    componentObj.el = function(propObj) {

        return React.createElement(reactComponent, propObj);
    }
    return componentObj;

});