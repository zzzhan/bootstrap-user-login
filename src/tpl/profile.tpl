<div class="row row-offcanvas row-offcanvas-right">
	<div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
	  <ul class="nav nav-pills nav-stacked" role="tablist">
		<li role="presentation"><a href="#userinfo" aria-controls="userinfo" role="tab" data-toggle="tab" data-url-selected="userinfo">${setting_profile}</a></li>
		<li role="presentation"><a href="#email" aria-controls="email" role="tab" data-toggle="tab" data-url-selected="changemail">${setting_email}</a></li>
		<li role="presentation"><a href="#password" aria-controls="password" role="tab" data-toggle="tab" data-url-selected="changepass">${setting_password}</a></li>
	</ul>
	</div><!--/.sidebar-offcanvas-->

	<div class="col-xs-12 col-sm-9">
	  <p class="pull-right visible-xs">
		<button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Setting</button>
	  </p>
	  <div class="tab-content">
		<div role="tabpanel" class="tab-pane" id="userinfo"><i class="fa fa-spinner fa-pulse fa-2x"></i></div>
		<div role="tabpanel" class="tab-pane" id="email"><i class="fa fa-spinner fa-pulse fa-2x"></i></div>
		<div role="tabpanel" class="tab-pane" id="password"><i class="fa fa-spinner fa-pulse fa-2x"></i></div>
	  </div>
	</div><!--/.col-xs-12.col-sm-9-->
</div><!--/row-->
<script language="javascript">
  <!--
	window.onload = function() {
	  dotpl.setDelimiters('<%', '%>', '[mytpl]');
	  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
		  var tab = $(e.target);
		  var url = tab.data('url-selected');
		  var tabid = tab.attr('href');
		  var _user = null;
		  if(_user!=null) {
			  if(!!url&&!tab.data('url-loaded')) {
				$.get(url,function(html){
				  $(tabid).html(dotpl.applyTpl(html, _user));
				  tab.data('url-loaded', true);
				});
			  }
		  } else {
			$(tabid).html($.userMsg['1504']);
		  }
	  });
	  $.get('/api/user/auth', function(res) {
		_user = res.data;
		  var href = window.location.href;
		  var ind = href.lastIndexOf('#');
		  var tabid = '#userinfo';
		  if(ind!==-1) {
			tabid = href.substring(ind);
		  }
		  var tag = $('a[href="'+tabid+'"]');
		  tag.tab('show');		  
		  $(tabid).addClass('active');
	  });
	}
  -->
</script>