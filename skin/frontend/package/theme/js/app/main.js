/* Resolve jQuery conflicts */
jQuery.noConflict();

/**
 * Application namespace
 * @type {APP|*|{}}
 */
var APP = APP || {};

/**
 * Application module
 */
APP.Main = (function($) {
    "use strict";

    var privateVar = "I\'m private variable";

    var api = {};

    /**
     * Module initialize method
     */
    api.init = function() {
        api.someMethod();
    };

    /**
     * Public property
     * @type {string}
     */
    api.publicProperty = "public Property";

    /**
     * Module method
     */
    api.someMethod = function() {
        console.log("I\'m some method which return " + api.publicProperty);
    };

    return api;
})(jQuery);

jQuery(APP.Main.init);
