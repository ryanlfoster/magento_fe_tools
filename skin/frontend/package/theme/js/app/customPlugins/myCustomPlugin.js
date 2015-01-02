(function($) {
    'use strict';

    $.fn.myCustomPlugin = function() {
        return this.each(function() {
            console.log(this, 'init');
        });
    };

})(jQuery);
