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
		this.url = fm.attr('action');
		if(this.url.indexOf('verify')!==1) {
			fm.trigger('submit');
		}
	};
	UserLogin.prototype = {
        constructor: UserLogin,
		submit: function(e) {
			var fm = $(e.target);
			$.post(this.url, fm.serialize(), $.proxy(this.success, this));
			return false;
		},
		success: function(data) {
			if(this.url.indexOf('signin')!==-1) {
				window.location.href = '/';
			} else if(this.url.indexOf('forgot')!==-1) {
				$('.alert-success').removeClass('hidden');
			} else if(this.url.indexOf('verify')!==-1) {
				if(data.code===1) {
					
				} else {
				  //$('.alert').addClass('alert-danger').text(data.code);
				}
			}
		}
	};
	var msgEl = $('<div class="user-message hidden"><div style="padding: 5px;">'+
		'<div class="alert alert-danger .alert-dismissible user-inner-message">'+
	            '<button type="button" class="close" aria-label="Close">&times;</button>'+
				'<p></p></div></div></div>');
	$.ajaxControl = function(data) {
		var ret = false;
		if(data.code===1) {
			ret = true;
		} else {
			msgEl.removeClass('hidden');
			$('p', msgEl).text(data.code);
		}
		console.log(data);
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