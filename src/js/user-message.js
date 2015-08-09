(function($) {
	$.userMsg = $.extend({
		'1500':'Oh snap! You got a system error!',
		'1501':'Hi, please <a href=\"/user/signin\" class=\"alert-link\">sign in</a>.',
		'1503':'User name or password invalid.',
		'1504':'Wrong password.',
		'1506':'Email address unfound.',
		'1507':'Verify failure!<ul><li><a href=\"/user/signin\" class=\"alert-link\">sign in</a> to resend a verify email.</i><li><a href=\"/user/forgot\" class=\"alert-link\">Forgot password</a> to resend.</li></ul>',
		'1508':'Verify code expired.<ul><li><a href=\"/user/signin\" class=\"alert-link\">sign in</a> to resend a verify email.</i><li><a href=\"/user/forgot\" class=\"alert-link\">Forgot password</a> to resend.</li></ul>',
		'verify_success':'Well done!You got a real account,please <a href=\"/user/signin\" class=\"alert-link\">sign in</a>.',
		'send_forgot_success':'We have sent you a email, please check your inbox, then reset your password.',
		'reset_pass_success':'Reset your password success!',
		'send_verify_success':'A email has sent to you, please check your inbox to verify.',
		'changemail_success':'A email has sent to your new email address, please check to verify.',
		'changpass_success':'New password was setted!',
		'unknown':'Unknown error'
	}, $.userMsg);
})(window.jQuery||this);