/* Resolve jQuery conflicts */
jQuery.noConflict();

/**
 * Application namespace
 * @type {APP|*|{}}
 */
var APP = {};

(function($) {
    'use strict';

    /**
     * Invoke all modules
     */
    APP.run = function() {
        var i, module;
        for (i in APP) {
            if (APP.hasOwnProperty(i)) {
                module = APP[i];
                if (module.hasOwnProperty('init')) {
                    module.init();
                }
            }
        }
    };

})(jQuery);
