(function($) {
	$.userMsg = $.extend({
		'1500':'Oh snap! You got a system error!',
		'1503':'User name or password invalid.',
		'1504':'Hi, please sign in.',
		'1505':'Invalid verify!Please <a href=\"signin\" class=\"alert-link\">sign in</a> and resend a verify link to your email.',
		'1506':'This email unfound on system.',
		'1507':'Invalid verify!Please <a href=\"signin\" class=\"alert-link\">sign in</a> and resend a verify link to your email.',
		'verify_success':'Well done!You got a real account,please <a href=\"signin\" class=\"alert-link\">sign in</a>.',
		'send_forgot_success':'We have sent you a email, please check your inbox, then reset your password.',
		'reset_pass_success':'Reset your password success!',
		'unknown':'Unknown error'
	}, $.userMsg);
})(window.jQuery||this);