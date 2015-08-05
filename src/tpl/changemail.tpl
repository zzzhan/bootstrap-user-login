	  <form class="user-form" action="/api/auth/changemail">
        <h4 class="user-form-heading">${changemail_title}</h4>
		<div class="alert alert-info">
			<p></p>
		</div>
		<div class="form-group">
		  <label for="newemail" class="sr-only">${newemail}</label>
		  <input type="email" class="form-control" id="newemail" name="email" placeholder="${newemail}" required pattern="(?=.*\d)(?=.*[a-zA-Z])\w{7,}" oninvalid="this.setCustomValidity('${pass_pattern_err}')" onchange="this.setCustomValidity('')">		    
		</div>
		<button type="submit" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${confirm}</button>
	  </form>
	  <script language="javascript">
	  <!--	  
		var fm = $('.user-form');
		fm.userlogin({success:function() {		  
		  var msg = null;
		  var al = $('.user-from .alert');
		  al.addClass('alert-success');
		  msg = $.userMsg.reset_pass_success;
		  al.removeClass('alert-info');
		  $('p', al).text(msg);
		}});
	  -->
	 </script>