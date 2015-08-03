
	  <form class="form-inline user-form" action="/api/auth/forgot">
        <h4 class="user-form-heading">${forgot_title}</h4>
		<div class="alert alert-info">
			<p>${forgot_info}</p>
		</div>
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" placeholder="${email}" required autofocus>
		<button type="submit" class="btn btn-lg btn-primary" data-loading-text="${sending}">${forgot_btn}</button>
	  </form>
		<div class="alert alert-success hidden">
			<p>${forgot_success}</p>
		</div>
