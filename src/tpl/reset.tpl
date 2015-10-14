	  <form class="user-form" action="/api/auth/forgot" data-method="put">
        <h4 class="user-form-heading">${reset_pass}</h4>
		<div class="alert alert-info">
			<p>${newpass_info}</p>
		</div>
		<div class="form-group">
		  <label for="userPassword" class="sr-only">${newpass}</label>
		  <div class="input-group">
		    <input type="password" class="form-control" id="userPassword" name="newpass" placeholder="${newpass}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('${pass_pattern_err}')" onchange="this.setCustomValidity('')">
		    <span class="input-group-addon" title="${display_pass}">
              <input type="checkbox" aria-label="${display_pass}">
            </span>
		  </div>
	      <span class="help-block">${pass_pattern_err}</span>
		</div>
		<button type="submit" id="submitBtn" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${reset_pass}</button>
	  </form>
	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
		var fm = $('.user-form');
		fm.userlogin({success:function() {		  
		  var msg = null;
		  var al = $('.user-form .alert');
		  al.addClass('alert-success');
		  msg = $.userMsg.changpass_success;
		  al.removeClass('alert-info');
		  $('p', al).html(msg);
		  setTimeout(function(){
		    $('#submitBtn').prop('disabled', 'disabled');
		  }, 500);
		}});
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