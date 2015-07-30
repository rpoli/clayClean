define(['react'], function(React) {

    var reactComponent = React.createClass({

        getInitialState: function() {
            return ({
                title : "mindQ",
                username: "rajesh" 
            });
        },

        render: function() {
            return ( 
                <div className="row footer-row" >
                    <div className="col-md-12" > 
                           <div className="text-right title"></div>                        
                    </div>
	           </div>
            );
        }
    });

    var componentObj = {};

    componentObj.el = function() {
        return React.createElement(reactComponent);
    }
    return componentObj;

});