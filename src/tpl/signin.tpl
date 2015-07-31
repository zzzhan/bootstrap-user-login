	  <form class="user-form" action="/api/auth/signin">
        <h4 class="user-form-heading">${signin_title}</h4>
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" name="login" placeholder="${email}" required autofocus>
		<label for="userPassword" class="sr-only">${password}</label>
		<input type="password" class="form-control" id="userPassword" name="password" placeholder="${password}" required>
		<div><a href="/forgot">${forgot}</a></div>
		<div class="checkbox">
			<label>
			  <input type="checkbox" name="remember"> ${rememberme}
			</label>
		</div>
		<button class="btn btn-lg btn-primary btn-block" data-url="/api/auth/signin">${signin}</button>
	  </form>