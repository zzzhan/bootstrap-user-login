<div class="center-block">
	<form class="user-form" action="/api/auth/signin">
	<h4 class="user-form-heading">${signin_title}</h4>
	<div class="form-group">
	  <label for="loginid" class="sr-only">${login_id}</label>
	  <input type="text" class="form-control" id="loginid" name="login" placeholder="${loginid}" required autofocus>
	</div>
	<div class="form-group">
	  <label for="userPassword" class="sr-only">${password}</label>
	  <input type="password" class="form-control" id="userPassword" name="password" placeholder="${password}" required>
	</div>
	<button type="submit" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${signin}</button>
	<p>
	  <a href="forgot">${forgot}</a> |
	  <a href="signup">${signup_title}</a>
	</p>
	</form>
</div>
	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
	    var fm = $('.user-form');
		var hash = window.location.hash;
		if(hash!=null&&hash!=='') {
		  $('a[href="signup"]', fm).attr('href', 'signup'+hash);
		}
	    var onsignin = function() {
		  window.location.replace(hash.substring(1)||'/user/profile');
		};
		fm.userlogin({success: onsignin}).on('signin', onsignin);
		};
	  -->
	 </script>