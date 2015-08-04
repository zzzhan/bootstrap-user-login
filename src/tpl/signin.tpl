	  <form class="user-form" action="/api/auth/signin">
        <h4 class="user-form-heading">${signin_title}</h4>
		<div class="form-group">
		  <label for="userEmail" class="sr-only">${email}</label>
		  <input type="email" class="form-control" id="userEmail" name="login" placeholder="${email}" required autofocus>
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
	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
	    var onsignin = function() {
		  window.location.href = '/editor/';
		};
		$('.user-form').userlogin({success: onsignin}).on('signin', onsignin);
		};
	  -->
	 </script>