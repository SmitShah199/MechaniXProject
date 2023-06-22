<?php
include("header.php");
include("config.php");
?>
<div class="inner_content_w3_agile_info two_in">
					 
<!-- tables -->

<div class="agile-tables">
    <div class="w3l-table-info agile_info_shadow">
     <h3 class="w3_inner_tittle two">Customer Table</h3>
        <table id="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>City Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Image</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
        <?php
$sql="select pl.city_name,lgn.* from tbl_customer lgn 
INNER JOIN tbl_city pl ON pl.city_id=lgn.city_id where lgn.status=0";

$result=mysqli_query($con,$sql);
while($row=mysqli_fetch_array($result))
{
?>
<tr>
<td><?php echo $row['full_name'];?></td>
<td><?php echo $row['email'];?></td>
<td><?php echo $row['password'];?></td>
<td><?php echo $row['city_name'];?></td>
<td><?php echo $row['mobile_no'];?></td>
<td><?php echo $row['address'];?></td>
<td><img src="../custimage/<?php echo $row['image'];?>" style="height:50px;width:50px;" /></td>

<td><a href="customer.php?cust_id=<?php echo $row['cust_id'];?>">
<img src="images/delete.png"></img></a></td>


</tr>
<?php
}
?>

        </tbody>
      </table>


</div>

<?php
if(isset($_SERVER['PHP_SELF']))
{
if(isset($_GET['cust_id']))
    {
$cust_id  = $_GET['cust_id'];
        include 'config.php';
        $query = "update tbl_customer
set status = 1 where cust_id  = '$cust_id'";
        $result = mysqli_query($con,$query);
        if($result)
{
              echo "<script language='javascript'>alert('record deleted successfully');</script>";
            
            
            echo "<script language='javascript'>window.location.href='customer.php';</script>";
        }
    }
}
?>





<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script src="js/modernizr.custom.js"></script>

<script src="js/classie.js"></script>
<script src="js/gnmenu.js"></script>
<script>
new gnMenu( document.getElementById( 'gn-menu' ) );
</script>
<!-- tables -->

<script type="text/javascript" src="js/jquery.basictable.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
$('#table').basictable();

$('#table-breakpoint').basictable({
breakpoint: 768
});

$('#table-swap-axis').basictable({
swapAxis: true
});

$('#table-force-off').basictable({
forceResponsive: false
});

$('#table-no-resize').basictable({
noResize: true
});

$('#table-two-axis').basictable();

$('#table-max-height').basictable({
tableWrapper: true
});
});
</script>
<!-- //js -->
<script src="js/screenfull.js"></script>
<script>
$(function () {
$('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

if (!screenfull.enabled) {
return false;
}



$('#toggle').click(function () {
screenfull.toggle($('#container')[0]);
});	
});
</script>
<script src="js/jquery.nicescroll.js"></script>
<script src="js/scripts.js"></script>

<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>

<link rel="stylesheet" type="text/css" href="css/table-style.css" />
<link rel="stylesheet" type="text/css" href="css/basictable.css" />
</body>
</html>
        <?php
        include("footer.php");
        ?>
