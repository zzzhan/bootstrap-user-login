(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }	
}(function($){
	var UserLogin = function() {
		$('button[data-url]').on('click', $.proxy(this.submit, this));
	};
	UserLogin.prototype = {
        constructor: UserLogin,
		submit: function(e) {
			var target = $(e.target);
			var fm = target.parent('form');
			var url = target.data('url');
			$.post(url, fm, function(res){
				console.log(res);				
			});
		}
	};
	$.userlogin = new UserLogin();
}));