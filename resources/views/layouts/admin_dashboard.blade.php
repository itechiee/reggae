<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
	<meta charset="utf-8"/>
	<title>Reggae Mansion</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1" name="viewport"/>
	<meta content="Reggae Mansion" name="description"/>
	<meta content="Reggae Mansion" name="author"/>

	<link rel="stylesheet" href="{{ asset("admin/assets/stylesheets/styles.css") }}" />
</head>
<body>
    <div id="wrapper">
        @include('includes.admin.menu')
        @yield('section')
    </div>
	<script src="{{ asset("admin/assets/scripts/frontend.js") }}" type="text/javascript"></script>
</body>
</html>