<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <title><%title%> · ${project}</title>
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
          <div class="nav navbar-form navbar-right">
			  <div class="nav navbar-nav">
				<a href="./signup" class="btn btn-success">${signup}</a>
				<a href="./signin" class="btn btn-default">${signin}</a>
			  </div>
		  </div>
        </div>
		
      </div>
    </nav>
    <div class="container">
		<%content%>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted">${footer}</p>
      </div>
    </footer>
	<script src="${cdn_jquery}" type="text/javascript"></script>
	<script src="${cdn_bootstrap_js}" type="text/javascript"></script>
	<script src="js/bootstrap-user-login.min.js" type="text/javascript"></script>
	<script src="js/jquery-ajax-control.min.js" type="text/javascript"></script>
  </body>
</html>