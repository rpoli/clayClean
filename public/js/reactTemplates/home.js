define(['react'], function(React) {

    var reactComponent = React.createClass({

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( < div >
                < div id = "main-container" > Hello {
                    this.state.name
                } < /div>
	      </div >
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