<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <title>${verify_title} · ${project}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${keywords}" />
    <meta name="description" content="${description}" />
	<link href="${cdn_bootstrap_css}" rel="stylesheet">
	<link href="css/bootstrap-user-login.min.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">${project}</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
		  <div class="nav navbar-right">
	        <a href="./signup" class="btn btn-success">${signup}</a>
	        <a href="./signin" class="btn btn-default">${signin}</a>
		  </div>
        </div>
		
      </div>
    </nav>
    <div class="container">      
	  <form class="user-form">
        <h4 class="user-form-heading">${verify_title}</h4>
		<div class="alert alert-success hidden">
			<p>${verify_success}</p>
			<a href="/signin" class="btn btn-success hidden">${signin}</a>
		</div>
		<div class="alert alert-danger hidden">
			<p>${verify_failure}</p>
			<a href="/signin" class="btn btn-success hidden">${signin}</a>
		</div>
		<div class="alert alert-info">
			<p><span class="glyphicon glyphicon-lock" aria-hidden="true"></span>${verifing}</p>
		</div>
	  </form>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted">${footer}</p>
      </div>
    </footer>
	<script src="${cdn_jquery}"></script>
	<script src="js/bootstrap-user-login.min.js" type="text/javascript"></script>
  </body>
</html>

