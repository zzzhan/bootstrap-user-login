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
		  console.log(res);
		  if(res.code===1) {
		  } else {
			var al = $('.user-form .alert');
			al.addClass('alert-danger');
			al.removeClass('alert-info');
			$('p', al).text($.userMsg[res.code]);
		  }
		}});
		};
	  -->
	  </script>