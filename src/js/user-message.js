(function($) {
	$.userMsg = $.extend({
		'1500':'Oh snap! You got a system error!',
		'1503':'User name or password invalid.',
		'1504':'Hi, please sign in.',
		'1505':'Verify code invalid.',
		'1506':'This email unfound on system.',
		'1507':'Verify code invalid.',
		'unknown':'Unknown error'
	}, $.userMsg);
})(window.jQuery||this);