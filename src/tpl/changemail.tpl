	  <form class="user-form" id="changemailfm" action="/api/auth/changemail">
        <h4 class="user-form-heading">${changemail_title}</h4>
		<div class="alert alert-info" id="changemail_msg">
			<p>${changemail_info}</p>
		</div>
		<div class="form-group">
			<label>${oldemail}</label>
			<p class="form-control-static"><%email%></p>
		</div>
		<div class="form-group">
		  <label for="newemail">${newemail}</label>
		  <input type="email" class="form-control" id="newemail" name="email" placeholder="${newemail}">		    
		</div>
		<button type="submit" class="btn btn-lg btn-primary btn-block" data-loading-text="${loading}">${confirm}</button>
	  </form>
	  <script language="javascript">
	  <!--
	  (function(){
		var fm = $('#changemailfm');
		fm.userlogin({success:function() {		  
		  var msg = null;
		  var al = $('#changemail_msg');
		  al.addClass('alert-success');
		  msg = $.userMsg.changemail_success;
		  al.removeClass('alert-info');
		  $('p', al).html(msg);
		  $('#newemail').attr('readonly', true);
		  setTimeout(function(){
		    $('button', fm).prop('disabled', 'disabled');
		  }, 500);
		}});
	  })();
	  -->
	 </script>