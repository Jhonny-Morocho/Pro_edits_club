<?php
    


    $modoDeve=true;//en localhost

    if($modoDeve){

       $conn=new mysqli('localhost','root','root','pro_edit_servidor');

        if($conn->connect_error){
            echo $error->$conn->connect_error;
            echo "<br>.existe un error ".$error->$conn->connect_error;
        }

    }else{
         $conn=new mysqli('127.0.0.1','jhonnydj','ky4lkexwbsc8','pro_edit');

        if($conn->connect_error){
            echo $error->$conn->connect_error;
            echo "<br>.existe un error ".$error->$conn->connect_error;
        }
    }


 

/*    $db_name="pro_edit_servidor";
    $mysql_user="root";
    $mysql_pass="root";
    $server_name="https://proeditsclub.com";

    $conn=mysql_connect($server_name,$mysql_user,$mysql_pass)or die(mysql_error());

    mysql_select_db($db_name,$conn) or die(mysql_error());*/
/*   PHP ACTIVAR ERRORES ini_set('display_errors', 'On');*/

?>