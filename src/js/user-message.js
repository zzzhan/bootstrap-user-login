(function($) {
	$.userMsg = $.extend({
		'1500':'Oh snap! You got a system error!',
		'1503':'User name or password invalid.',
		'1504':'Hi, please <a href=\"/user/signin\" class=\"alert-link\">sign in</a>.',
		'1505':'Verify failure!<br>Please <a href=\"/user/signin\" class=\"alert-link\">sign in</a> and resend a verify email.',
		'1506':'This email unfound on system.',
		'verify_success':'Well done!You got a real account,please <a href=\"/user/signin\" class=\"alert-link\">sign in</a>.',
		'send_forgot_success':'We have sent you a email, please check your inbox, then reset your password.',
		'reset_pass_success':'Reset your password success!',
		'unknown':'Unknown error'
	}, $.userMsg);
})(window.jQuery||this);