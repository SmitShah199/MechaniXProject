<?php 
include("header.php");
?>

		<!-- Banner -->
		<div class="agileheader-banner">
			<img src="images/contact.jpg"  alt="Groovy Apparel">
		</div>
		<!-- //Banner -->

	</div>
	<!-- //Header -->


    <?php
include("config.php");
if(isset($_POST['submit10']))
{
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
$sql="insert into tbl_contact(name,email,phone,message)value('$name','$email','$phone','$message')";
$result=mysqli_query($con,$sql);
if($result)
{
	echo "<script>alert('thanking for contact us')</script>";
}
}
?>

	<!-- Contact -->
	<div class="w3aitscontactagile">
		<h1>CONTACT</h1>

		<div class="contact-info">
			<div class="container">
				<div class="contact-info-grids">
					<div class="col-md-6 col-sm-6 contact-info-grid contact-info-grid-1">
						<img src="images/m4.jpg" alt="Groovy Apparel">
					</div>
					<div class="col-md-6 col-sm-6 contact-info-grid contact-info-grid-2">
						<h2>Where We Are</h2>
						<p style="text-align:justify;">Mechanix  is THE TOOL THAT FITS LIKE A GLOVE. When it comes to your tools it's all about trust. Our commitment to hand protection has earned the trust of millions of hardworking hands around the world. It's a commitment to anatomical design, industry leading material technology and rigorous testing standards. A commitment to looking beyond conventional ideas with the drive to innovate the most advanced tools for working hands. We believe every toolbox is a signature, a testament to skilled hands</p>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>



	<!-- Map -->
		<div id="map"><div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1000&amp;height=400&amp;hl=en&amp;q=3800A Laird Rd Unit 2 & 3, Mississauga, ON L5L 0B2, Canada&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/">Capcut Templates</a></div><style>.mapouter{position:relative;text-align:right;width:1340px;height:500px;}.gmap_canvas {overflow:hidden;background:none!important;width:1340px;height:500px;}.gmap_iframe {width:1340px!important;height:500px!important;}</style></div></div>
	<!-- //Map -->


	<script language="Javascript" type="text/javascript">

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)||(charCode == 32))
            return true;
        else
            return false;

    }
    catch (err) {
        alert(err.Description);
        
    }
}

</script>

<script type="text/javascript">
      var specialKeys = new Array();
     specialKeys.push(8); //
     function IsNumeric(e) {
        var keyCode = e.which ? e.which : e.keyCode
     var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }
    </script>  
	  <span id="error" class="ss-icon" style="color: Red; display: none" ></span>
                    


	<div class="wthreeaddressaits">
		<div class="container">
			<div class="col-md-4 wthreeaddressaits-grid wthreeaddressaits-grid1">
				<div class="aitsaddressw3l">
					<h4>Address</h4>
					<address>
						<ul>   
							<li>3800A Laird Rd Unit 2 & 3,</li>
							<li>Mississauga,</li>
							<li>ON L5L 0B2,</li>
							<li>Canada</li>
						</ul>
					</address>
				</div>
				<div class="aitsphonew3l">
					<h4>Phone</h4>
					<ul>
						<li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> +1 877-278-5821</li>
						<li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span> +1 877-278-8754</li>
					</ul>
				</div>
				<div class="aitsemailw3l">
					<h4>Email</h4>
					<ul>
						<li><a href="mailto:mechanix@gmail.com">
                            <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> mechanix@gmail.com</a></li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>

			<div class="col-md-8 wthreeaddressaits-grid wthreeaddressaits-grid2">
				<form  method="post">
					<input type="text" class="text" name="name" placeholder="enter name(input only alphabets)" onKeyPress="return onlyAlphabets(event,this);" required="">
					<input type="text" class="text" name="email" placeholder="Email" required="">
					<input type="text" class="text" name="phone" placeholder="enter phone number(input only 0-9 digits)" minlength="10" maxlength="10" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;"   required="">
					<textarea name="message" class="text" placeholder="Message" required=""></textarea>
					<input type="submit" name="submit10" value="SEND MESSAGE">
				</form>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<!-- //Contact -->



<?php
include("footer.php");
?>
