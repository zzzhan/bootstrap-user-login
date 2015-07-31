(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }	
}(function($){			
	var fm = $('.user-form');
	var UserLogin = function(fm) {
		fm.on('submit', $.proxy(this.submit, this));
	};
	UserLogin.prototype = {
        constructor: UserLogin,
		submit: function(e) {
			var fm = $(e.target);
			var url = fm.attr('action');
			$.post(url, fm, $.proxy(this.success, this));
			return false;
		},
		success: function() {
			$('.alert-success').removeClass('hidden');
		}
	};
	var msgEl = $('<div class="user-message hidden"><div style="padding: 5px;">'+
		'<div class="alert alert-danger .alert-dismissible user-inner-message">'+
	            '<button type="button" class="close" aria-label="Close">&times;</button>'+
				'<p></p></div></div></div>');
	$.ajaxControl = function(data) {
		var ret = false;
		if(data.code===0) {
			ret = true;
		} else {
			$('p', msgEl).text(data.code);
		}
		return ret;
	};
	$('.close', msgEl).on('click', function() {
		msgEl.addClass('hidden');
	});
	$('body').append(msgEl);
	$(document).ajaxError(function(event, request, ajaxOptions, thrownError){
		console.log(thrownError);
		$('p', msgEl).text(thrownError);
		msgEl.removeClass('hidden');
	}).ajaxSend(function() {
		msgEl.addClass('hidden');
		$('button[type=submit]', fm).button('loading');
	}).ajaxComplete(function() {
		$('button', fm).button('reset');
	});
	$.userlogin = new UserLogin(fm);
}));