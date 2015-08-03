(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }	
}(function($){			
	//var fm = $('.user-form');
	var UserLogin = function(fm, opt) {
		this.opt = opt;
		this.signinPanel = $('.user-signin-panel');
		this.signoutPanel = $('.user-signout-panel');
		fm.on('submit', $.proxy(this.submit, this));
		this.url = fm.attr('action');
		if(this.url.indexOf('verify')!==-1) {
			fm.trigger('submit');
		}
		$.get('/api/auth', $.proxy(this.signin, this));
	};
	UserLogin.prototype = {
        constructor: UserLogin,
		signin: function(res) {
			console.log(res);
			this.user = res.data;
			$('.user-name', this.signinPanel).text(this.user.name);
			this.signinPanel.removeClass('hidden');
			this.signoutPanel.addClass('hidden');
		},
		submit: function(e) {
			var fm = $(e.target);
			$.ajax($.extend({
				method:'POST',
				url:this.url,
				data:fm.serialize(),
				success: $.proxy(this.success, this),
				skipAjaxControl:!!fm.data().skipAjaxControl
			}, this.opt));
			//$.post(this.url, fm.serialize(), $.proxy(this.success, this));
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
    $.fn.userlogin = function(option) {
        var pickerArgs = arguments;

        return this.each(function() {
            var $this = $(this),
            inst = $this.data('userlogin'),
            options = ((typeof option === 'object') ? option : {});
            if ((!inst) && (typeof option !== 'string')) {
                $this.data('userlogin', new UserLogin($this, options));
            } else {
                if (typeof option === 'string') {
                    inst[option].apply(inst, Array.prototype.slice.call(pickerArgs, 1));
                }
            }
        });
    };
	var msgEl = $('<div class="user-message hidden"><div style="padding: 5px;">'+
		'<div class="alert alert-danger .alert-dismissible user-inner-message">'+
	            '<button type="button" class="close" aria-label="Close">&times;</button>'+
				'<p></p></div></div></div>');
	$.ajaxControl = function(data) {
		var ret = false;
		if(data.code===1) {
			ret = true;
		} else if(data.code===0) {
		} else {
			msgEl.removeClass('hidden');
			var msg = null;
			if(!!$.userMsg) {
			  msg = $.userMsg[data.code];
			}
			$('p', msgEl).text(msg||data.code);
		}
		return ret;
	};
	$('.close', msgEl).on('click', function() {
		msgEl.addClass('hidden');
	});
	$('body').append(msgEl);
	$(document).ajaxError(function(event, request, ajaxOptions, thrownError){
		$('p', msgEl).text(thrownError);
		msgEl.removeClass('hidden');
	}).ajaxSend(function() {
		msgEl.addClass('hidden');
		$('button[type=submit]').button('loading');
	}).ajaxComplete(function() {
		$('button[type=submit]').button('reset');
	});
}));