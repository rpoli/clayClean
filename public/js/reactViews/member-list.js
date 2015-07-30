define(['react'], function(React) {

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                name: "rajesh"
            });
        },

        render: function() {
            return ( 


                React.createElement("table", {class: "table table-striped"}, 

                    React.createElement("tr", null, React.createElement("th", null, "Sl.No"), "Name", React.createElement("th", null, "Location"), "Contact No.", React.createElement("th", null), React.createElement("th", null, "Edit/Delete")), 
                    
                    React.createElement("tr", null, React.createElement("td", null, "Sl.No"), "Name", React.createElement("td", null, "Location"), "Contact No.", React.createElement("td", null), React.createElement("td", null, "Edit/Delete")), 
                    React.createElement("tr", null, React.createElement("td", null, "Sl.No"), "Name", React.createElement("td", null, "Location"), "Contact No.", React.createElement("td", null), React.createElement("td", null, "Edit/Delete")), 
                    React.createElement("tr", null, React.createElement("td", null, "Sl.No"), "Name", React.createElement("td", null, "Location"), "Contact No.", React.createElement("td", null), React.createElement("td", null, "Edit/Delete")), 
                    React.createElement("tr", null, React.createElement("td", null, "Sl.No"), "Name", React.createElement("td", null, "Location"), "Contact No.", React.createElement("td", null), React.createElement("td", null, "Edit/Delete")), 
                    React.createElement("tr", null, React.createElement("td", null, "Sl.No"), "Name", React.createElement("td", null, "Location"), "Contact No.", React.createElement("td", null), React.createElement("td", null, "Edit/Delete"))



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