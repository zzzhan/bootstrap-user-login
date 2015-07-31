	  <form class="user-form" action="/api/auth/verify">
        <h4 class="user-form-heading">${verify_title}</h4>
		<div class="alert alert-success hidden">
			<p>${verify_success}</p>
			<a href="/signin" class="btn btn-success hidden">${signin}</a>
		</div>
		<div class="alert alert-danger hidden">
			<p>${verify_failure}</p>
			<a href="/signin" class="btn btn-success hidden">${signin}</a>
		</div>
		<div class="alert alert-info">
			<p><span class="glyphicon glyphicon-lock" aria-hidden="true"></span>${verifing}</p>
		</div>
	  </form>