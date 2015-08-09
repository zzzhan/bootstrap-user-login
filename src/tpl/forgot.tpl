	  <form class="user-form" action="/api/auth/forgot">
        <h4 class="user-form-heading">${forgot_title}</h4>
		<div class="alert alert-info">
			<p>${forgot_info}</p>
		</div>		
		<div class="form-group">
		  <label for="userEmail" class="sr-only">${email}</label>
		  <input type="email" class="form-control" id="userEmail" name="email" placeholder="${email}" required autofocus>
		</div>
		<div class="form-group">
		  <button type="submit" class="btn btn-lg btn-primary btn-block" id="submitBtn" data-loading-text="${sending}">${forgot_btn}</button>
		</div>
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
		  $('#userEmail').attr('readonly', true);
		  setTimeout(function(){
		    $('#submitBtn').prop('disabled', 'disabled');
		  }, 500);
		};
		$('.user-form').userlogin({success: onsend});
		};
	  -->
	 </script>