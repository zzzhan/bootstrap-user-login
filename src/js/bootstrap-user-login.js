(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }	
}(function($){			
	//var fm = $('.user-form');
	var signinPanel = $('.user-signin-panel');
	var signoutPanel = $('.user-signout-panel');
	var _user = null;
	var UserLogin = function(fm, opt) {
	  this.form = fm;
	  this.opt = opt;
	  fm.on('submit', $.proxy(this.submit, this));
	  this.url = fm.attr('action');
	  $('.user-signout-btn').on('click', $.proxy(this.doSignout, this));
	  if(_user==null) {
	    $.get('/api/auth', $.proxy(this.signin, this));
	  }
	};
	var _fm = null;
	UserLogin.prototype = {
        constructor: UserLogin,
		signin: function(res) {
			_user = res.data;
			$('.user-name', this.signinPanel).text(_user.name);
			signinPanel.removeClass('hidden');
			signoutPanel.addClass('hidden');
			this.form.trigger('signin', [res]);
		},
		submit: function(e) {
			var fm = $(e.target);
			_fm = fm;			
			$.ajax($.extend({
				method:fm.data('method')||'POST',
				url:this.url,
				data:fm.serialize(),
				success: $.proxy(this.success, this),
				skipAjaxControl:!!fm.data().skipAjaxControl
			}, this.opt));
			//$.post(this.url, fm.serialize(), $.proxy(this.success, this));
			return false;
		},
		doSignout: function() {
			$.get('/api/auth/signout', $.proxy(this.signout, this));
		},
		signout: function() {
			signinPanel.addClass('hidden');
			signoutPanel.removeClass('hidden');
			_user = null;
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
		if(typeof data === 'string') {
			ret = true;
		} else {
			if(data.code===undefined) {
			  ret = true;				
			} else {
				if(data.code===1) {
					ret = true;
				} else if(data.code===0) {
				} else {
					msgEl.removeClass('hidden');
					var msg = null;
					if(!!$.userMsg) {
					  msg = $.userMsg[data.code];
					}
					$('p', msgEl).html(msg||data.code);
				}
			}
		}
		return ret;
	};
	$('.close', msgEl).on('click', function() {
		msgEl.addClass('hidden');
	});
	$('body').append(msgEl);
	$(document).ajaxError(function(event, request, ajaxOptions, thrownError){
		$('p', msgEl).html(thrownError);
		msgEl.removeClass('hidden');
	}).ajaxSend(function() {
		msgEl.addClass('hidden');
		if(_fm!=null) {
		  $('button[type=submit]', _fm).button('loading');
		}		
	}).ajaxComplete(function() {
		if(_fm!=null) {
		  var btn = $('button[type=submit]', _fm);
		  btn.button('reset');
		  _fm = null;
		}
	});
}));