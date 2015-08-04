	  <form class="user-form" action="/api/auth/verify" data-skip-ajax-control="true">
        <h4 class="user-form-heading">${verify_title}</h4>
		<div class="alert alert-info">
			<p><span class="glyphicon glyphicon-lock" aria-hidden="true"></span>${verifing}</p>
		</div>
	  </form>
	  	  <script language="javascript">
	  <!--	  
	  window.onload = function() {
		$('.user-form').userlogin({success:function(res){
		  var msg = null;
		  var al = $('.user-form .alert');
		  if(res.code===1) {
			al.addClass('alert-success');
			msg = $.userMsg.verify_success;
		  } else {
			al.addClass('alert-danger');
			msg = $.userMsg[res.code];
		  }
		  al.removeClass('alert-info');
		  $('p', al).html(msg);
		}});
		};
	  -->
	  </script>