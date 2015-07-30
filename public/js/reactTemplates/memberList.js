define(['react','reactViews/memberRow'], function(React, memberRow) {

    var initComp = memberRow.component;

    var reactComponent = React.createClass({

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

                <div className="member-section row">
                <div className="col-md-12">
                <div className="row member-table-header">
                    <div className = "col-md-11">

                        <h3>Executives List</h3>

                    </div> 
                    <div className="col-md-1 refresh-btn">
                        <span aria-hidden="true" className="glyphicon glyphicon-refresh"></span>
                    </div>
                </div>

                <table className="table table-striped table-bordered table-hover">

                    <tr><th>Sl.No</th><th>Name</th><th>Location</th><th>Contact No.</th><th>Edit</th></tr>                    
                    
                           {this.state.memberList.map(function(result,index) {
                                return <tr><td>{index+1}</td><td>{result.name}</td><td>{result.location}</td><td>{result.contact}</td><td>Edit</td></tr>;
                            })}


                </table>
                </div>
                </div>


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