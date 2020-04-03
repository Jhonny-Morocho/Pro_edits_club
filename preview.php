<?php require_once'Vista/template/head.php'; ?>


<!-- ///////////////////////////MENU///////////////////////////
///////////////////////////MENU///////////////////////////
///////////////////////////MENU/////////////////////////// -->
<?php
require_once'Vista/modal/modal_cliente.php';
require_once'Vista/modal/modal_registro.php';
require_once'Vista/modal/modal_admin.php';  
require_once'Vista/template/header.php';
require_once'Vista/template/animacion_espera.php'; 
require_once'Vista/template/slider.php';
require_once'Modelo/bd_conexion.php';
?>



<!-- 
//===============================UPDATE POR FECHA==============================//
//===============================UPDATE POR FECHA==============================//
//===============================UPDATE POR FECHA==============================// -->


<?php 

  
/*ini_set('display_errors', 'On');*/

/*var_dump($_GET);*/

if ( isset($_GET['date_in']) and isset($_GET['date_out']) and isset($_GET['number_update']) and isset($_GET['img']) ) {
  # code...
  $date_in=$_GET['date_in'] ;
  $date_out=$_GET['date_out'] ;
  $numero_update=$_GET['number_update'];
  $img=$_GET['img'];
}else{
   header("Location: menu_update.php");

}

?> 

       


  

  <div id="services" class="services-area area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline services-head text-center">
            <h2>UPDATE <span><?php echo $numero_update ?></span></h2>
             <!--  scrip menu reproductor musica -->
              <?php require_once'Vista/template/reproductor.php'; ?>
            <!--  scrip menu reproductor musica -->

          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="services-contents">
       <!--   <div class="col-md-12 col-sm-12 col-xs-12  ">-->
             <div class="container panel panel-default">
        

        <div class="row">

            <div class="col-md-9 col-sm-9 col-xs-12 col-lg-9">



                <!--  ////////////////////////////////TABLA DE PRODUCTOS////////////// -->



                  <table id="example" class="table table-striped table-bordered dt-responsive nowrap table-hover"  width="100%"  >
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th >Precio</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
                    <tbody>

                 <?php 
                    

                     try {

                         $consulta="SELECT proveedor.apodo,productos.fecha_producto,productos.url_directorio,productos.precio, productos.id ,biblioteca.genero from proveedor,productos,biblioteca WHERE productos.id_proveedor=proveedor.id 
                        and productos.id_biblioteca=biblioteca.id 
                        and productos.fecha_producto>='$date_in'
                        and productos.fecha_producto<='$date_out'
                          and productos.activo=1 
                          and productos.tipo='audio' 
                          and proveedor.estado='1'
                          and productos.fecha_producto<='$date_out'
                          ORDER by  productos.id desc ";

                          $resultado=$conn->query($consulta);
                        } catch (Exception $e) {
                          $error=$e->getMessage();
                          echo $error;

                        }
                while ($admin = $resultado->fetch_assoc()) {?> 
                        <tr>


                            <td >

                              <div class="row">

                                <div class="col-md-1 col-sm-1 col-xs-12 col-lg-1">
                                    <button class="glyphicon glyphicon-play btn btn-success "     type="submit" id="id_div" path="biblioteca/<?php echo $admin['url_directorio'] ?>" nombre_cancion="<?php echo $admin['url_directorio']; ?>">
                                      <meta content="keywords" name="<?php echo $admin['url_directorio']; ?>">
                                    </button>
                                </div>
                                    
                                   <div class="cortar col-md-11 col-sm-11 col-xs-12 col-lg-11" style="text-align: left;">
                                      <!-- reproducir  -->

                                      <?php echo $admin['url_directorio']; ?>
                                     
                                   </div>                           
                                  

                              </div>


                              
                            </td>

                            <!-- icono carrito -->
                            <td>

                                <div class="row">

                                  <div class="col-md-2 col-sm-2 col-xs-12 col-lg-2" >
                                      <a class="agregar-carrito" data-id="<?php echo $admin['id'] ?>" data-nombre="<?php echo $admin['url_directorio']; ?>" precio="<?php echo $admin['precio'];?>" id="btn_comprar">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <?php echo $admin['precio'];?>$
                                      </a>
                                  </div>

                                  
                                </div>

                            </td>

                          

                            <td>  
                              <a href="https://www.proeditsclub.com/demo.php?id_producto=<?php echo $admin['id'] ?>" target="_blank" class="btn btn-warning">
                              <i class="fa fa-link" aria-hidden="true"></i></a> 
                            </td>

                        </tr>



                      
                <?php } ?>       

                    </tbody>
                </table>




            

              
            </div> <!-- end col -->

            <div class="col-sm-3 col-md-3 col-lg-3 col-xs-12">
               <img src="Vista/img_dj/<?php echo$img ?>.png" alt="" style=" padding-top: 80px;">
             
            </div>          
  		</div><!--  end row -->



			<div class="team-content text-center">
                <h4>
                  <a href="menu_update.php" id="btn_filtro">Regresar</a> </h4>
            </div>
               <hr style=" height: 10px;background-color: black;">




              </div> <!-- end container -->
            </div> <!--  end col main --> 
          <!--</div>  end services container -->
      </div> <!-- end row tex -->

  </div> <!-- end container after -services area -->
</div> <!-- end services-area area-padding -->




  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

<?php 
  require_once'Vista/template/scrip.php';
  require_once'Vista/template/footer.php';
  require_once'Vista/template/wasap.php';


 ?>