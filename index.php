


<!-- ///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA/////////////////////////// -->

<?php 

require_once'Vista/template/head.php'; 

?>
  


 <!--  <div id="preloader"></div> -->

  
<!-- ///////////////////////////MENU///////////////////////////
///////////////////////////MENU///////////////////////////
///////////////////////////MENU/////////////////////////// -->
<?php
require_once'Vista/modal/modal_cliente.php';
require_once'Vista/modal/modal_registro.php';
require_once'Vista/modal/modal_admin.php';  
require_once'Vista/template/header.php';
require_once'Vista/template/animacion_espera.php';
require_once'Vista/template/reproductor.php'; 

?>

<?php 
require_once'Vista/template/slider.php';
 ?>


 
  <?php 

    /////////////AUDIO////////////////

    require_once'Vista/template/audio.php';
   /* require_once'Vista/template/new_audio.php';*/
    /*require_once'Vista/template/video.php';*/
   ?>
  <!-- End About area -->

  <!-- Start Service area -->
  <?php 
    require_once'Vista/template/update.php';
   ?>
  <!-- End Service area -->


  <!-- Start team Area -->
  <?php 
    require_once'Vista/template/integrantes.php';

   ?>


  <?php 
    require_once'Vista/template/video.php';
    require'Vista/template/contactos.php';
   ?>
  <!-- start pricing area -->
 



<?php 
  require_once'Vista/template/scrip.php';
  require_once'Vista/template/footer.php';
  require_once'Vista/template/wasap.php';


 ?>







