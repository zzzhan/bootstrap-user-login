	  <form class="user-form" action="/api/auth/signin">
        <h4 class="user-form-heading">${signin_title}</h4>
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" name="login" placeholder="${email}" required autofocus>
		<label for="userPassword" class="sr-only">${password}</label>
		<input type="password" class="form-control" id="userPassword" name="password" placeholder="${password}" required>
		<button type="submit" class="btn btn-lg btn-primary btn-block">${signin}</button>
		<p>
		  <a href="forgot">${forgot}</a> |
		  <a href="signup">${signup_title}</a>
		</p>
	  </form>
	  	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
		$('.user-form').userlogin();
		};
	  -->
	  </script>