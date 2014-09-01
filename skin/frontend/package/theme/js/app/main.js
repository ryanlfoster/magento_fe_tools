var APP = APP || {};

APP.Main = (function($) {
    "use strict";

    var privateVar = "I\'m private variable";
    /* Stash var */
    var api = {};

    /* Methods */
    api.init = function() {
        api.someMethod();
    };

    api.publicVar = "public variable";

    api.someMethod = function() {
        console.log("I\'m some method which return " + api.publicVar);
    };

    return api;
})(jQuery);

jQuery(APP.Main.init);
