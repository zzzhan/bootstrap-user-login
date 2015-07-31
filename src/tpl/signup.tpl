	  <form class="user-form" action="/api/auth/signup">
        <h4 class="user-form-heading">${signup_title}</h4>
		<label for="userName" class="sr-only">${userName}</label>
		<input type="text" class="form-control" id="userName" placeholder="${userName}">
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" placeholder="${email}">
		<label for="userPassword" class="sr-only">${password}</label>
		<input type="password" class="form-control" id="userPassword" placeholder="${password}">
		<button class="btn btn-lg btn-primary btn-block">${signup}</button>
	  </form>