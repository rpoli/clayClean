require.config({    
    baseUrl : "js",
    paths: {
        jquery: "lib/jquery",
        lodash: "lib/lodash",
        underscore: 'lib/underscore',
        backbone: "lib/backbone",        
        react: 'lib/react',
        home : "reactViews/home"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require(['app','backbone'], function(app, Backbone) {    
    new app();
    Backbone.history.start();
});

