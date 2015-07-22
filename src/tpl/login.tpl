<form onsubmit="javascript:return false;">
	<label for="loginEmail" class="sr-only">${email}</label>
	<input type="email" class="form-control" id="loginEmail" placeholder="${email}" required autofocus>
	<label for="loginPassword" class="sr-only">${password}</label>
	<input type="password" class="form-control" id="loginPassword" placeholder="${password}" required>
	<div class="checkbox">
		<label>
			<input type="checkbox"> ${rememberme}
		</label>
	</div>
	<button class="btn btn-lg btn-primary btn-block" type="submit" data-url="/serv/auth/login">${login}</button>
</form>