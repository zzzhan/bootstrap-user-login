	  <form class="user-form" action="/api/auth/signup">
        <h4 class="user-form-heading">${signup_title}</h4>
		<div class="form-group">
		  <label for="userName" class="sr-only">${userName}</label>
		  <input type="text" class="form-control" id="userName" name="name" placeholder="${userName}" required autofocus pattern="^[0-9a-zA-Z]+\-?[0-9a-zA-Z]+$" oninvalid="this.setCustomValidity('${name_pattern_err}')" onchange="this.setCustomValidity('')">
		</div>
		<div class="form-group">
		  <label for="userEmail" class="sr-only">${email}</label>
		  <input type="email" class="form-control" id="userEmail" name="email" placeholder="${email}" required>
		</div>
		<div class="form-group">
		  <label for="userPassword" class="sr-only">${password}</label>
		  <div class="input-group">
		    <input type="password" class="form-control" id="userPassword" name="password" placeholder="${password}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('${pass_pattern_err}')" onchange="this.setCustomValidity('')">
		    <span class="input-group-addon" title="${display_pass}">
              <input type="checkbox" aria-label="${display_pass}">
            </span>
		  </div>
		</div>
		<button type="submit" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${signup}</button>
	  </form>
	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
	    var onsignin = function() {
		  window.location.href = '/editor/';
		};
		var fm = $('.user-form');
		fm.on('signin', onsignin).userlogin({success: onsignin});
		$('input[type=checkbox]', fm).click(function() {
		  var val = $(this).is(':checked');
		  if(val) {
		    $('#userPassword').attr('type', 'text');
		  } else {		  
		    $('#userPassword').attr('type', 'password');
		  }
		});
	  };
	  -->
	 </script>