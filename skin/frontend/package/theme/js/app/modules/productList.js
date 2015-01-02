/**
 * Module: Product List
 * @type {{init: Function}}
 */
APP.ProductList = (function($) {
    'use strict';

    var api;

    api = {
        init: function() {
            console.log('module: ProductList');
            this.methodOne();
            this.methodTwo();
        },
        methodOne: function() {
            console.log('module: ProductList, method: methodOne');
        },
        methodTwo: function() {
            console.log('module: ProductList, method: methodTwo');
        }
    };

    return api;

})(jQuery);
