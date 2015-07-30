define(['react'], function(React) {

    var reactComponent = React.createClass({

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( 
                <tr><td>1</td><td>Ramesh Polishetti</td><td>Hyderabad</td><td>+91 9701181405</td><td><span aria-hidden="true" className="glyphicon glyphicon-pencil"></span></td></tr>
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