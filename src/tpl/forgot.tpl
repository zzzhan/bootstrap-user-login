	  <form class="form-inline user-form" action="/api/auth/forgot">
        <h4 class="user-form-heading">${forgot_title}</h4>
		<div class="alert alert-info">
			<p>${forgot_info}</p>
		</div>
		<label for="userEmail" class="sr-only">${email}</label>
		<input type="email" class="form-control" id="userEmail" placeholder="${email}" required autofocus>
		<button type="submit" class="btn btn-lg btn-primary" data-loading-text="${sending}">${forgot_btn}</button>
	  </form>
	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
	    var onsend = function() {
		  var msg = null;
		  var al = $('.user-form .alert');
		  al.addClass('alert-success');
		  msg = $.userMsg.send_forgot_success;
		  al.removeClass('alert-info');
		  $('p', al).text(msg);
		};
		$('.user-form').userlogin({success: onsend});
		};
	  -->
	 </script>