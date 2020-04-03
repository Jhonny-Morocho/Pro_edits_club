

  <?php
    require_once'Vista/template/head.php'; 
    include_once'Vista/modal/modal_cliente.php';
    include_once'Vista/modal/modal_registro.php';
    include_once'Vista/modal/modal_admin.php';
    include_once'Vista/modal/modal_info_saldo.php';
    include_once'Vista/template/wasap.php';  
    include_once'Vista/template/header.php';

  ?>


  <?php 

    include_once'Vista/template/slider.php';
   ?>

      <?php 

      $id_producto=$_GET['id_producto'];

      if (!is_numeric($id_producto)) { 
      echo "<H1>Error de enlace No son numeros<H1>"; 
      }  

      else { ?>

        <?php 
          include_once'Modelo/bd_conexion.php';

          $sql="SELECT *FROM productos  where productos.activo='1' and productos.id='$id_producto'   ";
          $resultado=$conn->query($sql);

          try {
            
          } catch (Exception $e) {
            $error=$e->getMessage();
            echo $error;
          }
            
          while ($admin = $resultado->fetch_assoc()) {?>    

          <input type="hidden" class="glyphicon glyphicon-play btn btn-success " type="submit" id="id_div" 
                path="biblioteca/<?php echo $admin['url_directorio'] ?>"
                nombre_cancion="<?php echo $admin['url_directorio']; ?>">
                    
          </input>

          
            <!--  scrip menu reproductor musica -->
          <div id="jquery-script-menu" >
                
            <div class="jquery-script-center padre_reproductor" style="">
              <div id="player" class="demo_2 reproductor" ></div>
              
            </div>
          </div><!--  scrip menu reproductor musica -->

          <a class="btn btn-info btn-rounded agregar-carrito center-block" style="width: 50%;height: 10%;padding-top: 20px;" data-id="<?php echo $admin['id'] ?>" data-nombre="<?php echo $admin['url_directorio']; ?>" precio="<?php echo $admin['precio'];?>">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <?php echo $admin['precio']; ?>$
          </a>

          <h4 style="text-align: center; padding-top: 20px;">
            Demo:<p> <?php echo $admin['url_directorio']; ?></p>
          </h4>
          
          <?php } ?>     
      
      <?php } ?> 

    




 




<?php 
require'Vista/template/contactos.php';
  require_once'Vista/template/footer.php';
  require_once'Vista/template/scrip.php';
  require'Vista/template/wasap.php';


 ?>

  <script>
    $(document).ready(function(){
    var titulo=$('.glyphicon-play').attr('nombre_cancion');
    var path=$('.glyphicon-play').attr('path');//url y nombre del tema

    console.log("spy pach",path);

    $("#player").vpplayer({
    playerType: "audio",
    src: path,
    autoPlay: true,
/*        preloadMessage: "LOADING...ProeditsClub",*/
/*    playerColor: "red",
    displayColor: "blue",*/
    trackName: titulo

    });


  });

  </script>



