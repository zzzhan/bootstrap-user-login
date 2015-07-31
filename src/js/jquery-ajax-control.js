(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }
}(function($){
	 var Success = function(origCallback){
        return function(data, textStatus, jqXHR) {
			if(typeof origCallback === "function"&&$.ajaxControl(data, textStatus, jqXHR)) {
				origCallback(data, textStatus, jqXHR);
			}
        };
    };
    var jqAjax = $.ajax;
    $.ajax = function(settings){
        settings.success = new Success(settings.success);
        jqAjax(settings);
    };
	var defaultControl = function() {
		//console.log(data);
		var ret = true;
		console.log('$.ajaxControl has not implemented.');
		return ret;
	};
	$.ajaxControl = $.ajaxControl||defaultControl;
}));