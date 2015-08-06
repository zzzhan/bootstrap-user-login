<form id="userinfofm" action="/api/user/<%name%>">
	<h3 class="user-form-heading">${userinfo_title}</h3>
	<div class="alert alert-info hidden">
		<p></p>
	</div>
  <div class="form-group">
	<label class="control-label">${username}</label>
	<div>
	  <p class="form-control-static"><%name%>&nbsp;&nbsp;(<%email%>)&nbsp;&nbsp;[mytpl if="<%verify%>===0"]<button class="btn btn-success" id="verifyemail" title="${email_verify_info}">${email_verify_btn}</button>[/mytpl]</p>
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
	var fm = $('#userinfofm');		  
	var msg = null;
	var al = $('.user-from .alert');
	fm.userlogin({success:function() {
	  al.addClass('alert-success');
	  msg = $.userMsg.userinfo_success;
	  al.removeClass('hidden');
	  al.removeClass('alert-info');
	  $('p', al).text(msg);
	}});
	$('#verifyemail').click(function() {
	  $.post('api/user/verifyemail', function() {
		  al.addClass('alert-success');
		  msg = $.userMsg.send_verify_success;
		  al.removeClass('hidden');
		  al.removeClass('alert-info');
		  $('p', al).text(msg);
	  });
	});
-->
</script>