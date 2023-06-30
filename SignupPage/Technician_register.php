<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">


<?php
include("config.php");
if(isset($_POST['submit30']))
{
$shop_name=$_POST['shop_name'];
$owner_name=$_POST['owner_name'];
$email=$_POST['email'];
$password=$_POST['password'];
$mobile_no=$_POST['mobile_no'];
$city_id=$_POST['city_id'];
$address=$_POST['address'];
$expertise=$_POST['expertise'];
$image=$_FILES['image']['name'];

$sql="select * from tbl_login where email = '$email' and status = 0";
	$result=mysqli_query($con,$sql);
	$count=mysqli_num_rows($result);
	if($count >= 1)
	{
		echo "<script language='javascript'>alert('This Email ID Is Already Registered Here.');</script>";
		echo "<script language='javascript'>window.location.href='index.php';</script>";
	}
	else
	{
		$sql1="insert into tbl_technician(shop_name,owner_name,email,password,mobile_no,city_id,address,expertise,image)value('$shop_name','$owner_name','$email','$password','$mobile_no','$city_id','$address','$expertise','$image')";

		$result1 = mysqli_query($con,$sql1);
		if($result1)
		{
			echo "<script language='javascript'>alert('You Have Register Successfully');</script>";
			echo "<script language='javascript'>window.location.href='index.php';</script>";
		}
		$sql2 = "insert tbl_login(email,password,mobile_no,type)value('$email','$password','$mobile_no','technician')";
		$result2 = mysqli_query($con,$sql2);
		if($result2)
		{
		}
		else
		{
			echo "<script language='javascript'>alert('Invalid File');</script>";
		}
	}
}
?>

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
                    






<!DOCTYPE html>

    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mechanix </title>

           
        <!-- CSS -->
        <link rel="stylesheet" href="css/style1.css">
                
                
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
        <script src="js/script.js"></script>

                                
                       
    </head>
    <body>
        <section class="container forms">
            <div class="form login" style="    margin-top: -10%;">
                <div class="form-content">
                <div class="form-link">
                        <span><a href="index.php" class="link signup-link">Back To Site </a></span>
                    </div><br>
                    <header>Technician Register</header>
                    <form method="post" enctype="multipart/form-data">
                 
                        <div class="field input-field">
                            <input type="text" name="shop_name" placeholder="Shop Name" class="input"required="">
                        </div>
                        <div class="field input-field">

                            <input type="text" name="owner_name" placeholder="enter owner name(input only alphabets)" onKeyPress="return onlyAlphabets(event,this);"  required="" class="input">
                        </div>
                        <div class="field input-field">
                            <input type="email" name="email" placeholder="Email" class="input"required="">
                        </div>

                        <div class="field input-field">
                            <input type="password" name="password" placeholder="Password" class="password" required="">
                        </div>
                        <div >
                        <select name="city_id" class="field input-field">
                    
      <option value="---select---">---Select---</option>
                                <?php
                    include("config.php");
					?>
					<?php
					$sql="select * from tbl_city where status=0";
					$sel=mysqli_query($con,$sql); 
					while ($row=mysqli_fetch_array($sel)) { ?>
					<option value=<?php echo $row['city_id']?>>
                    <?php echo $row['city_name']?></option>
					<?php } ?>
                    
					</select>
                        </div>


                        <div class="field input-field">
                            <input type="text" name="mobile_no"placeholder="enter mobile number(input only 0-9 digits)" minlength="10" maxlength="10" onkeypress="return IsNumeric(event);" ondrop="return false;" onpaste="return false;"  required="" class="mobileno">
                        </div>
                        <div>

                
					<select name="expertise"  class="field input-field"  >
      <option value="---select---">---Select Expertise---</option>
      <option value="Bike">Bike</option>
      <option value="Car">Car</option>
      <option value="Moped">Moped</option>
					</select>

                        </div>

                        <div class="field input-field">

                        <input type="text" name="address" placeholder="Address" required=""></textarea>
                        </div>

                        
					<?php
					 include("config.php");
if(isset($_FILES['image']))
{
    $file_name0 = $_FILES['image']['name'];
    $file_tmp = $_FILES['image']['tmp_name'];
    $file_size = $_FILES['image']['size'];
   // echo $file_size;
	
    if($_FILES['image']['size'] > 10485760)
    {
        echo "<br><br>Photo size is greater";
        
    }
    else
    {
        if(move_uploaded_file($file_tmp,'techimage/'.$file_name0))
        {
			

          echo "<br><br>image uploaded";
           
        }
    }
}
?>
 <div class="field input-field">
                            <input type="file" name="image"  required="" >
                        </div>



                        <div class="field button-field">
                            <button name="submit30">Register</button>
                        </div>
                        <div class="form-link">
                        <span>Already have an account? <a href="login.php" class="link login-link">Login</a></span>
                    </div>
                    </form>

                    </div>
        </section>
