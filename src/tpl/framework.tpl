<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${keywords}" />
    <meta name="description" content="${description}" />
	<link href="${cdn_bootstrap_css}" rel="stylesheet">
    <link href="${cdn_fontawesome}" rel="stylesheet">
	<link href="/user/css/bootstrap-user-login.min.css" rel="stylesheet">
	<link href="/css/shapefly.min.css" rel="stylesheet">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	<link rel="icon" href="/favicon.ico">
  </head>
  <body>
    <header class="navbar navbar-inverse navbar-fixed-top" id="top" role="banner">
      <div class="container">
      <div class="navbar-header">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand">${project}</a>
      </div>
      <nav id="bs-navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
	    <tpl for="top_menu">
        <li>
          <a href="${link}">${name}</a>
        </li>
		</tpl>
      </ul>
      <ul class="nav navbar-nav navbar-right">
		<li class="user-sign active"><a href="/user/signup#/editor">${signup}</a></i>
		<li class="user-sign"><a href="/user/signin#/editor">${signin}</a></i>
		<li class="user-menu dropdown hidden"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-user"></span>&nbsp;<span class="user-name"></span><span class="caret"></span></a>
		  <ul class="dropdown-menu">
			<tpl for="user_menu">
			  <li><a href="${link}">${name}</a></li>
			</tpl>
		  </ul>
		</li>
	  </ul>
    </nav>
    </div>
    </header>
    <main class="container" id="content" role="main" tabindex="-1">
		<%content%>
    </main>

    <footer class="footer">
	  <div class="container">
	    <div class="row">
		  <div class="col-md-10">
			<ul class="list-inline text-muted">
			  <li>${copyright}</li>
			<tpl for="bottom_menu">
			<li>
			  <a href="${link}">${name}</a>
			</li>
			</tpl>
			</ul>
		  </div>
		  <div class="col-md-2">
			<ul class="list-inline text-muted">
			<li class="dropup"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${lang_title}<span class="caret"></span></a>
			  <ul class="dropdown-menu">
				<tpl for="langs">
				  <li><a href="${link}">${name}</a></li>
				</tpl>
			  </ul>
			</li>
			</ul>
		  </div>
		</div>
	  </div>
    </footer>
	<script src="${cdn_jquery}" type="text/javascript"></script>
	<script src="${cdn_bootstrap_js}" type="text/javascript"></script>
	<script src="/user/js/userlogin_allinone.js" type="text/javascript"></script>
	<script src="${user_message_js}" type="text/javascript"></script>
  </body>
</html>