	  <form class="user-form" action="/api/auth/changemail" data-method="put" data-skip-ajax-control="true">
        <h4 class="user-form-heading">${verify_title}</h4>
		<div class="alert alert-info" data-verify-success="${verify_success}" data-verify-failure="${verify_failure}" >
			<p><span class="glyphicon glyphicon-lock" aria-hidden="true"></span>${verifing}</p>
		</div>
	  </form>
	  	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
		var fm = $('.user-form');
		fm.userlogin({success:function(res){
		  var msg = null;
		  var al = $('.user-form .alert');
		  if(res.code===1) {
			al.addClass('alert-success');
			msg = al.data('verify-success');
		  } else {
			al.addClass('alert-danger');
			msg = al.data('verify-failure');
		  }
		  al.removeClass('alert-info');
		  $('p', al).html(msg);
		}});
		fm.trigger('submit');
		};
	  -->
	  </script>