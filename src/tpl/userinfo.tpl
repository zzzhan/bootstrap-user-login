<form id="userinfofm" action="/api/users/<%name%>">
	<h3 class="user-form-heading">${userinfo_title}</h3>
	<div class="alert alert-info hidden" id="userinfo_msg">
		<p></p>
	</div>
  <div class="form-group">
	<label class="control-label">${username}</label>
	<div>
	  <p class="form-control-static"><%name%>&nbsp;&nbsp;(<%email%>)&nbsp;&nbsp;[mytpl if="<%verified%>===0"]<button class="btn btn-success" id="verifyemail" title="${email_verify_info}">${email_verify_btn}</button>[/mytpl]</p>
	</div>
  </div>
  <div class="form-group">
	<label for="nickname" class="control-label">${nickname}</label>
	<input type="text" class="form-control" id="nickname" name="nickname" placeholder="${nickname}" value="<%nickname%>">
  </div>
  <div class="form-group">
	<label for="company" class="control-label">${company}</label>
	<input type="text" class="form-control" id="company" name="company" placeholder="${company}" value="<%company%>">
  </div>
  <button type="submit" class="btn btn-lg btn-primary" data-loading-text="${loading}">${update}</button>
</form>
<script language="javascript">
<!--
	(function(){
		var fm = $('#userinfofm');		  
		var msg = null;
		var al = $('#userinfo_msg');
		fm.userlogin({success:function() {
		  al.addClass('alert-success');
		  msg = $.userMsg.userinfo_success;
		  al.removeClass('hidden');
		  al.removeClass('alert-info');
		  $('p', al).text(msg);
		}});
		var btn = $('#verifyemail').click(function() {
		  $.post('/api/auth/verify', function() {
			  al.addClass('alert-success');
			  msg = $.userMsg.send_verify_success;
			  console.log(msg);
			  al.removeClass('hidden');
			  al.removeClass('alert-info');
			  $('p', al).html(msg);
			  btn.attr('disabled', 'disabled');
		  });
		  return false;
		});
	})();
-->
</script>