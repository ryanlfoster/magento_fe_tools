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
        var i, k, module, baseConfig, moduleConfig, $body;

        /**
         * Base Module Configuration
         * @type {{route: null, isEnabled: boolean}}
         */
        baseConfig = {
            route: null,
            isEnabled: true
        };

        /**
         * Route Element
         * @type {*|HTMLElement}
         */
        $body = $('body');

        /**
         * Load Modules
         */
        for (i in APP) {
            if (APP.hasOwnProperty(i)) {
                module = APP[i];
                if (module.hasOwnProperty('init')) {
                    if (module.hasOwnProperty('config')) {
                        moduleConfig = $.extend({}, baseConfig, module['config']);
                        if (moduleConfig.isEnabled) {
                            if (typeof moduleConfig.route == 'object') {
                                for (k = 0; k < moduleConfig.route.length; k++) {
                                    if ($body.hasClass(moduleConfig.route[k])) {
                                        module.init();
                                        break;
                                    }
                                }
                            } else if (typeof moduleConfig.route == 'string') {
                                if ($body.hasClass(moduleConfig.route)) {
                                    module.init();
                                }
                            } else if (!moduleConfig.route) {
                                module.init();
                            }
                        }
                    } else {
                        module.init();
                    }
                }
            }
        }

    };

})(jQuery);
