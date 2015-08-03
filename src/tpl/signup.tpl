	  <form class="user-form" action="/api/auth/signup">
        <h4 class="user-form-heading">${signup_title}</h4>
		<label for="userName" class="sr-only">${userName}</label>
		<input type="text" class="form-control" id="userName" placeholder="${userName}" required autofocus pattern="^[0-9a-zA-Z]+\-?[0-9a-zA-Z]+$" oninvalid="Login may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen')" onchange="this.setCustomValidity('')">
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" placeholder="${email}" required>
		<label for="userPassword" class="sr-only">${password}</label>
		<input type="password" class="form-control" id="userPassword" placeholder="${password}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('Password needs 7 characters and at least one number')" onchange="this.setCustomValidity('')">
		<button type="submit" class="btn btn-lg btn-primary btn-block">${signup}</button>
	  </form>