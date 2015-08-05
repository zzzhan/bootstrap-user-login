<div class="row row-offcanvas row-offcanvas-right">
	<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
	  <ul class="nav nav-pills nav-stacked" role="tablist">
		<li role="presentation" class="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">${setting_profile}</a></li>
		<li role="presentation"><a href="#email" aria-controls="profile" role="tab" data-toggle="tab" data-url-selected="changemail">${setting_email}</a></li>
		<li role="presentation"><a href="#password" aria-controls="profile" role="tab" data-toggle="tab" data-url-selected="changepass">${setting_password}</a></li>
	</ul>
	</div><!--/.sidebar-offcanvas-->

	<div class="col-xs-12 col-sm-9">
	  <p class="pull-right visible-xs">
		<button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Setting</button>
	  </p>
	  <div class="tab-content">
		<div role="tabpanel" class="tab-pane active" id="profile"><i class="fa fa-spinner fa-pulse fa-4x"></i></div>
		<div role="tabpanel" class="tab-pane" id="email"><i class="fa fa-spinner fa-pulse fa-4x"></i></div>
		<div role="tabpanel" class="tab-pane" id="password"><i class="fa fa-spinner fa-pulse fa-4x"></i></div>
	  </div>
	</div><!--/.col-xs-12.col-sm-9-->
</div><!--/row-->
<script language="javascript">
  <!--	  
	window.onload = function() {
	  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
	  var tab = $(e.target);
	  var url = tab.data('url-selected');
	  var tabid = tab.attr('href');
	  if(!!url&&!tab.data('url-loaded')) {
		$.ajax({
		  method:'GET',
		  dataType:'html',		  
		  url:url, 
		  success:function(html){
		    $(tabid).html(html);
		    tab.data('url-loaded', true);
		  }
		});
	  }
	  });
	}
  -->
</script>