define(['react','reactViews/memberRow'], function(React, memberRow) {

    var initComp = memberRow.component;

    var reactComponent = React.createClass({displayName: "reactComponent",

        getInitialState: function() {
            return ({
                name: "rajesh",
                memberList : [
                    {
                        name : "Ramesh Polishetti",
                        location : "Hyderabad",
                        contact : "+91 9701181405",
                    },
                    {
                        name : "Raju Adabala",
                        location : "Hyderabad",
                        contact : "+91 9701181405",
                    }



                ]
            });
        },

        render: function() {
            return ( 

                React.createElement("div", {className: "member-section row"}, 
                React.createElement("div", {className: "col-md-12"}, 
                React.createElement("div", {className: "row member-table-header"}, 
                    React.createElement("div", {className: "col-md-11"}, 

                        React.createElement("h3", null, "Executives List")

                    ), 
                    React.createElement("div", {className: "col-md-1 refresh-btn"}, 
                        React.createElement("span", {"aria-hidden": "true", className: "glyphicon glyphicon-refresh"})
                    )
                ), 

                React.createElement("table", {className: "table table-striped table-bordered table-hover"}, 

                    React.createElement("tr", null, React.createElement("th", null, "Sl.No"), React.createElement("th", null, "Name"), React.createElement("th", null, "Location"), React.createElement("th", null, "Contact No."), React.createElement("th", null, "Edit")), 
                    
                           this.state.memberList.map(function(result,index) {
                                return React.createElement("tr", null, React.createElement("td", null, index+1), React.createElement("td", null, result.name), React.createElement("td", null, result.location), React.createElement("td", null, result.contact), React.createElement("td", null, "Edit"));
                            })


                )
                )
                )


            );
        }
    });

    var componentObj = {};
    componentObj.update = function() {

    };

    componentObj.component = new reactComponent();

    componentObj.el = function() {

        console.log(React.createElement(reactComponent));

        return React.createElement(reactComponent);
    }
    return componentObj;

});