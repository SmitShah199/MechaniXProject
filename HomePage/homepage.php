<?php
			ob_start();
			session_start();
			?>
<!DOCTYPE html>
<html lang="zxx"> 
<!-- Head -->
<head>
<title>MechaniX</title>

<!-- Meta-Tags -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords" content="Groovy Apparel a Responsive Web Template, Bootstrap Web Templates, Flat Web Templates, Android Compatible Web Template, Smartphone Compatible Web Template, Free Webdesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola Web Design">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //Meta-Tags -->
    <!-- Custom-StyleSheet-Links -->
<!-- Bootstrap-CSS -->	   <link rel="stylesheet" href="css/bootstrap.css"					type="text/css" media="all">
<!-- Index-Page-CSS -->	   <link rel="stylesheet" href="css/style.css"						type="text/css" media="all">
<!-- Header-Slider-CSS --> <link rel="stylesheet" href="css/fluid_dg.css" id="fluid_dg-css" type="text/css" media="all">
<!-- //Custom-StyleSheet-Links -->
    <!-- Fonts -->
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Noto+Serif:400,700"	   type="text/css" media="all">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:400,700"	   type="text/css" media="all">
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500" type="text/css" media="all">
<!-- //Fonts -->

<!-- Font-Awesome-File-Links -->
<!-- CSS -->
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

<link rel="stylesheet" href="css/font-awesome.css" 		 type="text/css" media="all">
<!-- TTF --> 
<link rel="stylesheet" href="fonts/fontawesome-webfont.ttf" type="text/css" media="all">
<!-- //Font-Awesome-File-Links -->

<!-- Supportive-Modernizr-JavaScript --><script src="js/modernizr-2.6.2-respond-1.1.0.min.js"></script>

<!-- Default-JavaScript --><script src="js/jquery-2.2.3.js"></script>
    </head>
<!-- //Head -->



<!-- Body -->
<body>



	<!-- Header -->
	<div class="agileheader" id="agileitshome">

		<!-- Navigation -->
		<nav class="navbar navbar-default w3ls navbar-fixed-top">
			<div class="container" style="margin-top: 1%;width: 90%;">
				<div class="navbar-header wthree nav_2">
					<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand agileinfo" href="index.php">
                        <span style="font-size: 26px;">MechaniX</a> 
					<ul class="w3header-cart">
						<li class="wthreecartaits"><span class="my-cart-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i><span class="badge badge-notify my-cart-badge"></span></span></li>
					</ul>
				</div>
				<div id="bs-megadropdown-tabs" class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<!-- <li >
							<a href="index.php" class="dropdown-toggle w3-agile hyper" data-toggle="dropdown"><span> HOME </span></a>
							
						</li> -->
						<li><a href="index.php">HOME</a></li>
						<li><a href="about.php">ABOUT</a></li>
						<li><a href="services.php">SERVICES</a></li>
						<li><a href="contact.php">CONTACT</a></li>
						<li><a href="faq.php">FAQ</a></li>
						<li><a class="popup-with-zoom-anim" href="#small-dialog1">LOGIN</a></li>
						<li><a class="popup-with-zoom-anim" href="#small-dialog2">SIGN UP</a></li>
                        	<li class="wthreesearch">
							<form action="search.php" method="get">
								<input type="search" name="search" placeholder="Search for a Product" required="">
								<button type="submit" class="btn btn-default search" aria-label="Left Align">
									<i class="fa fa-search" aria-hidden="true"></i>
								</button>
							</form>
						</li>
						
					</ul>
				</div>

			</div>
		</nav>
		<!-- //Navigation -->



		<!-- Header-Top-Bar-(Hidden) -->
		<div class="agileheader-topbar">
			<div class="container">
				<div class="col-md-6 agileheader-topbar-grid agileheader-topbar-grid1">
					
				</div>
				<div class="col-md-6 agileheader-topbar-grid agileheader-topbar-grid2">
					<ul>
						
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
			

			
			<?php
include('config.php');
	if(isset($_POST['submit40']))
	{
		
		$user = $_REQUEST['username'];
		$pass = $_REQUEST['password'];
		$sql = "select * from tbl_login where
         email = '$user' OR mobile_no='$user' and password = '$pass' 
        and status =0";
		$result = mysqli_query($con,$sql);
		$count = mysqli_num_rows($result);
		if($count > 0)
		{
			while($row = mysqli_fetch_array($result))
			{
					$type= $row['type'];
			}
			if(($type=="admin")||($type=='Admin'))
			{
			$_SESSION['user'] = $user;								
	echo "<script language='javascript'>window.location.href='admin/index.php';</script>";
			}
            elseif(($type=="Customer")||($type=='customer'))
			{
			$_SESSION['user'] = $user;
			echo "<script language='javascript'>window.location.href='customer/index.php';</script>";
			}
			}
		else
		{
	echo "<script language='javascript'>alert('Enter correct Email-Id  or Password.');</script>";
				
				
		}
		}
	?>


				<!-- Popup-Box -->
				<div id="popup1">
					<div id="small-dialog1" class="mfp-hide agileinfo">
						<div class="pop_up">
							<form method="post">
								<h3>LOGIN</h3>
								<input type="text" Name="username" placeholder="Mobile no or Email Address" required="">
								<input type="password" Name="password" placeholder="Password" required="">
								<ul class="tick w3layouts agileinfo">
									
									<li>
										<a href="forgot.php">Forgot Password?</a>
									</li>
								</ul>
								<div class="send-button wthree agileits">
									<input type="submit" name="submit40" value="LOGIN">
								</div>
							</form>
						</div>
					</div>

<?php 
if(isset($_POST['type']))
{
$type=$_POST['type'];
if($type=='Technician')
{
	echo "<script>window.location.href='technician.php'</script>";
}
else
{
	echo "<script>window.location.href='customer.php'</script>";
}
}
?>

					<div id="small-dialog2" class="mfp-hide agileinfo">
						<div class="pop_up">
							<form method="post">
								<h3>SIGN UP</h3>
									<div class="send-button wthree agileits">
									<input type="submit" name="type" value="Technician">
								</div>	<br>
								<br>
								<div class="send-button wthree agileits">
									<input type="submit" id="new"name="type" value="Customer">
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- //Popup-Box -->

		</div>
		<!-- //Header-Top-Bar-(Hidden) -->
