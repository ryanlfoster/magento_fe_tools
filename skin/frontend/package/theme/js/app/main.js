var APP = APP || {};

APP.Main = (function($) {
    /* Important! Use strict mode */
    "use strict";

    var privateVar = "I\'m private variable";

    /* Stash var */
    var base = {};

    /* Methods */
    base.init = function() {
        base.method1();
    };

    base.publicVar = "I\'m public variable";

    base.method1 = function() {
        console.log("I\'m method 1");
    };

    /* Make "base" public */
    return base;
})(jQuery);

jQuery(APP.Main.init);
