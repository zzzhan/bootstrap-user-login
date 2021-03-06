(function($) {
	$.userMsg = $.extend({
		'1500':'我的天! 系統錯誤,請檢查重試或聯系管理員',
		'1501':'Hi, 請先 <a href=\"/user/signin\" class=\"alert-link\">登錄</a>.',
		'1503':'用戶名或密碼不對.',
		'1504':'密碼錯誤.',
		'1506':'email地址未找到.',
		'1507':'驗證失敗!<ul><li>請<a href=\"/user/signin\" class=\"alert-link\">登錄</a>重新發驗證郵件.</i><li>或點擊<a href=\"/user/forgot\" class=\"alert-link\">忘記密碼</a>重置.</li></ul>',
		'1508':'驗證碼過期!<ul><li>請<a href=\"/user/signin\" class=\"alert-link\">登錄</a>重新發驗證郵件.</i><li>或點擊<a href=\"/user/forgot\" class=\"alert-link\">忘記密碼</a>重置.</li></ul>',
		'verify_success':'恭喜驗證成功!妳得到了壹個真實的帳戶, 請<a href=\"/user/signin\" class=\"alert-link\">登錄</a>.',
		'send_forgot_success':'我們已向妳的郵箱發送了壹封密碼重置的郵件,請查收重置密碼.',
		'reset_pass_success':'密碼重置成功!',
		'send_verify_success':'我們已向妳的郵箱發送了壹封賬戶驗證的郵件,請查收驗證.',
		'changemail_success':'我們已向妳的新郵箱地址發送了壹封賬戶驗證的郵件,請查收驗證.',
		'changpass_success':'新密碼設置成功!',
		'userinfo_success':'用戶信息更新成功!',
		'unknown':'未知錯誤.'
	}, $.userMsg);
})(window.jQuery||this);