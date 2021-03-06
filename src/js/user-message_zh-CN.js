(function($) {
	$.userMsg = $.extend({
		'1500':'我靠! 系统错误,请检查重试或联系管理员',
		'1501':'Hi, 请先 <a href=\"/user/signin\" class=\"alert-link\">登录</a>.',
		'1503':'用户名或密码不对.',
		'1504':'密码错误.',
		'1506':'email地址未找到.',
		'1507':'验证失败!<ul><li>请<a href=\"/user/signin\" class=\"alert-link\">登录</a>重新发验证邮件.</i><li>或点击<a href=\"/user/forgot\" class=\"alert-link\">忘记密码</a>重置.</li></ul>',
		'1508':'验证码过期!<ul><li>请<a href=\"/user/signin\" class=\"alert-link\">登录</a>重新发验证邮件.</i><li>或点击<a href=\"/user/forgot\" class=\"alert-link\">忘记密码</a>重置.</li></ul>',
		'verify_success':'恭喜验证成功!你得到了一个真实的帐户, 请<a href=\"/user/signin\" class=\"alert-link\">登录</a>.',
		'send_forgot_success':'我们已向你的邮箱发送了一封密码重置的邮件,请查收重置密码.',
		'reset_pass_success':'密码重置成功!',
		'send_verify_success':'我们已向你的邮箱发送了一封账户验证的邮件,请查收验证.',
		'changemail_success':'我们已向你的新邮箱地址发送了一封账户验证的邮件,请查收验证.',
		'changpass_success':'新密码设置成功!',
		'userinfo_success':'用户信息更新成功!',
		'unknown':'未知错误.'
	}, $.userMsg);
})(window.jQuery||this);