	  <form class="user-form" action="/api/auth/changepass">
        <h4 class="user-form-heading">${changepass_title}</h4>
		<div class="alert alert-info">
			<p></p>
		</div>
		<div class="form-group">
		  <label for="userOldPassword" class="sr-only">${oldpass}</label>
		  <input type="password" class="form-control" id="userOldPassword" name="oldpass" placeholder="${oldpass}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('${pass_pattern_err}')" onchange="this.setCustomValidity('')">		    
		</div>
		<div class="form-group">
		  <div class="input-group">
		    <input type="password" class="form-control" id="userPassword" name="newpass" placeholder="${newpass}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('${pass_pattern_err}')" onchange="this.setCustomValidity('')">
		    <span class="input-group-addon" title="${display_pass}">
              <input type="checkbox" aria-label="${display_pass}">
            </span>
		  </div>
		</div>
		<button type="submit" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${confirm}</button>
	  </form>
	  <script language="javascript">
	  <!--	  
		var fm = $('.user-form');
		fm.userlogin({success:function() {		  
		  var msg = null;
		  var al = $('.user-form .alert');
		  al.addClass('alert-success');
		  msg = $.userMsg.reset_pass_success;
		  al.removeClass('alert-info');
		  $('p', al).text(msg);
		}});
		$('input[type=checkbox]', fm).click(function() {
		  var val = $(this).is(':checked');
		  if(val) {
		    $('#userPassword').attr('type', 'text');
		  } else {		  
		    $('#userPassword').attr('type', 'password');
		  }
		});
	  -->
	 </script>