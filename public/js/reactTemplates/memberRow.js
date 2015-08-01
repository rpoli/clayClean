define(['react'], function(React) {

    var reactComponent = React.createClass({

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( 
                <tr ref="liElement"><td>{this.props.index}</td><td>{this.props.name}</td><td>{this.props.location}</td><td>{this.props.contact}</td><td><span aria-hidden="true" className="glyphicon glyphicon-pencil"></span></td></tr>
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