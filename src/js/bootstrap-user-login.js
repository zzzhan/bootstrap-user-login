(function(factory){
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (window.jQuery) {
        factory(window.jQuery);
    }	
}(function($){
	var UserLogin = function(settings) {
		this.singupElement = settings.singupElement;
		this.loginElement = settings.loginElement;
		$('button', this.signupElement).on('click', $.proxy(this.signup, this));
		$('button', this.loginElement).on('click', $.proxy(this.login, this));
	};
	UserLogin.prototype = {
        constructor: UserLogin,
		signup: function(e) {
			var url = $(e.target).data('url');
			var username = $('#signupName', this.signupElement).val();
			var useremail = $('#signupEmail', this.signupElement).val();
			var userpassword = $('#signupPassword', this.signupElement).val();
			$.post(url, {name:username, email:useremail,password:userpassword}, function(res){
				console.log(res);
			});
		},
		login: function(e) {
			var url = $(e.target).data('url');
			var useremail = $('#loginEmail', this.loginElement).val();
			var userpassword = $('#loginPassword', this.loginElement).val();
			$.post(url, {email:useremail,password:userpassword}, function(res){
				console.log(res);				
			});			
		}
	};
	$.userlogin = UserLogin;
}));