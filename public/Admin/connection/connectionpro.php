<?php
require_once('db.php');
function getproducts()
{
    $sql='select * from product';
    $conn=create_connection();
    $result=$conn->query($sql);
    $data=array();
    for($i= 0;$i<$result->num_rows;$i++)
    {
        $row=$result->fetch_assoc();
        $data[]=$row;


    }
    return $data;
}
$all_product=getproducts();

?>